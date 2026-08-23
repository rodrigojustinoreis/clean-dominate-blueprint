const THREE = window.THREE; // vendored locally (see vendor/three.min.js)

const STATUS = {
  none:     { color: 0xe3e2e0, edge: 0xb6b3af, h: 2.9 },
  assessed: { color: 0xa8d0e0, edge: 0x2f6d94, h: 2.95 },
  cleaning: { color: 0xf2a03c, edge: 0xa8600c, h: 3.05 },
  done:     { color: 0x2f6d94, edge: 0x0f3251, h: 2.95 },
  issue:    { color: 0xef6a4f, edge: 0x8f3320, h: 3.0 }
};
const FW = 24, FD = 18, FH = 3.3;

class CCCHouse extends HTMLElement {
  static get observedAttributes() { return ['data-json', 'exploded', 'active-room', 'activeroom', 'roof', 'autorotate', 'label-floor', 'labelfloor', 'label-font', 'labelfont', 'label-caps', 'labelcaps']; }

  constructor() {
    super();
    this._data = [];
    this._exploded = false;
    this._active = null;
    this._roof = true;
    this._rot = { theta: -0.72, phi: 0.72, dist: 34 };
    this._floorGroups = [];
    this._rooms = [];
    this._labels = [];
  }

  connectedCallback() {
    if (this._init) return;
    this._init = true;
    this.style.display = 'block';
    this.style.position = 'absolute';
    this.style.inset = '0';
    this.style.width = '100%';
    this.style.height = '100%';
    this.style.touchAction = 'none';
    this._labelLayer = document.createElement('div');
    Object.assign(this._labelLayer.style, { position: 'absolute', inset: '0', pointerEvents: 'none', overflow: 'hidden' });
    this.appendChild(this._labelLayer);
    this._setup();
    this._readAttrs();
    this._build();
    this._loop();
  }

  attributeChangedCallback() { if (this._init) { this._readAttrs(); this._build(); this._resize(); } }

  _readAttrs() {
    try { this._data = JSON.parse(this.getAttribute('data-json') || '[]'); } catch (e) { this._data = []; }
    this._exploded = this.getAttribute('exploded') === 'true';
    this._roof = this.getAttribute('roof') !== 'false';
    this._active = this.getAttribute('active-room') || this.getAttribute('activeroom') || null;
    this._auto = this.getAttribute('autorotate') === 'true';
    this._labelFloor = this.getAttribute('label-floor') || this.getAttribute('labelfloor') || this._labelFloorProp || null;
    this._labelFont = this.getAttribute('label-font') || this.getAttribute('labelfont') || '500 9.5px/1 "Lora", Georgia, serif';
    this._labelCaps = (this.getAttribute('label-caps') || this.getAttribute('labelcaps') || 'true') !== 'false';
  }

  _setup() {
    const s = this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    Object.assign(this.renderer.domElement.style, { display: 'block', width: '100%', height: '100%' });
    this.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(34, 1, 0.5, 400);

    const hemi = new THREE.HemisphereLight(0xffffff, 0xb4bfc7, 0.85);
    s.add(hemi);
    const key = new THREE.DirectionalLight(0xfffdf8, 1.45);
    key.position.set(28, 42, 24);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    const d = 42;
    Object.assign(key.shadow.camera, { left: -d, right: d, top: d, bottom: -d, near: 1, far: 160 });
    s.add(key);
    const fill = new THREE.DirectionalLight(0xdfe6f0, 0.35);
    fill.position.set(-26, 16, -20);
    s.add(fill);

    this.ground = new THREE.Mesh(
      new THREE.CircleGeometry(60, 64),
      new THREE.ShadowMaterial({ opacity: 0.16 })
    );
    this.ground.rotation.x = -Math.PI / 2;
    this.ground.position.y = -0.3;
    this.ground.receiveShadow = true;
    s.add(this.ground);

    this.root = new THREE.Group();
    s.add(this.root);

    this._raycaster = new THREE.Raycaster();
    this._bindPointer();
    this._ro = new ResizeObserver(() => this._resize());
    this._ro.observe(this);
  }

  _bindPointer() {
    const el = this.renderer.domElement;
    let drag = null, moved = 0;
    el.addEventListener('pointerdown', e => {
      drag = { x: e.clientX, y: e.clientY, t: this._rot.theta, p: this._rot.phi };
      moved = 0;
      el.setPointerCapture(e.pointerId);
    });
    el.addEventListener('pointermove', e => {
      if (!drag) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      moved = Math.max(moved, Math.abs(dx) + Math.abs(dy));
      this._rot.theta = drag.t + dx * 0.0075;
      this._rot.phi = Math.max(0.18, Math.min(1.38, drag.p + dy * 0.006));
    });
    el.addEventListener('pointerup', e => {
      if (drag && moved < 6) this._pick(e);
      drag = null;
    });
    el.addEventListener('pointercancel', () => { drag = null; });
    el.addEventListener('wheel', e => {
      e.preventDefault();
      this._rot.dist = Math.max(16, Math.min(70, this._rot.dist + e.deltaY * 0.05));
    }, { passive: false });
  }

  _pick(e) {
    const r = this.renderer.domElement.getBoundingClientRect();
    const p = new THREE.Vector2(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    this._raycaster.setFromCamera(p, this.camera);
    const hits = this._raycaster.intersectObjects(this._rooms.map(x => x.mesh), false);
    if (hits.length) {
      const rec = this._rooms.find(x => x.mesh === hits[0].object);
      this.dispatchEvent(new CustomEvent('roomselect', { bubbles: true, detail: { roomId: rec.room.id, floorId: rec.floorId, name: rec.room.name } }));
    } else {
      this.dispatchEvent(new CustomEvent('roomselect', { bubbles: true, detail: { roomId: null } }));
    }
  }

  _resize() {
    const w = this.clientWidth || 300, h = this.clientHeight || 300;
    const n = Math.max(1, this._data.length);
    const spanY = n * FH + (this._exploded ? (n - 1) * 5.2 : 0) + (this._roof ? 1.9 : 1.2);
    const spanX = 30;
    const fovY = 2 * Math.tan((34 * Math.PI / 180) / 2);
    const needByH = spanY / fovY;
    const needByW = spanX / (fovY * (w / h));
    this._fit = Math.max(0.72, Math.max(needByH, needByW) / 24);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  _build() {
    while (this.root.children.length) this.root.remove(this.root.children[0]);
    this._labelLayer.innerHTML = '';
    this._floorGroups = [];
    this._rooms = [];
    this._labels = [];

    const floors = this._data;
    const n = floors.length;
    floors.forEach((floor, i) => {
      const g = new THREE.Group();
      g.userData.baseY = i * FH;
      g.userData.index = i;
      this.root.add(g);
      this._floorGroups.push(g);

      const slab = new THREE.Mesh(
        new THREE.BoxGeometry(FW + 0.8, 0.28, FD + 0.8),
        new THREE.MeshStandardMaterial({ color: 0xf1f4f6, roughness: 0.9, metalness: 0 })
      );
      slab.position.y = -0.14;
      slab.castShadow = true; slab.receiveShadow = true;
      g.add(slab);
      g.add(new THREE.LineSegments(
        new THREE.EdgesGeometry(slab.geometry),
        new THREE.LineBasicMaterial({ color: 0xb0bcc5 })
      )).position.y = -0.14;

      (floor.rooms || []).forEach(room => {
        const st = STATUS[room.status] || STATUS.none;
        const w = room.w - 0.5, dd = room.d - 0.5;
        const active = room.id === this._active;
        const h = active ? Math.min(st.h + 0.3, FH - 0.35) : st.h;
        const mat = new THREE.MeshStandardMaterial({
          color: active ? 0x7fc3dd : st.color,
          roughness: 0.72, metalness: 0.02,
          transparent: true, opacity: room.status === 'none' ? 0.82 : 0.96
        });
        const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, dd), mat);
        mesh.position.set(room.x + room.w / 2 - FW / 2, h / 2, room.z + room.d / 2 - FD / 2);
        mesh.castShadow = true; mesh.receiveShadow = true;
        g.add(mesh);

        const edge = new THREE.LineSegments(
          new THREE.EdgesGeometry(mesh.geometry),
          new THREE.LineBasicMaterial({ color: active ? 0x0f3251 : st.edge, transparent: true, opacity: 0.9 })
        );
        edge.position.copy(mesh.position);
        g.add(edge);

        if (room.status === 'issue') {
          const mk = new THREE.Mesh(
            new THREE.ConeGeometry(0.6, 1.4, 4),
            new THREE.MeshStandardMaterial({ color: 0xd0472a, roughness: 0.5 })
          );
          mk.position.set(mesh.position.x, h + 0.95, mesh.position.z);
          mk.rotation.y = Math.PI / 4;
          g.add(mk);
        }
        if (room.status === 'done') {
          const ring = new THREE.Mesh(
            new THREE.TorusGeometry(0.62, 0.1, 8, 24),
            new THREE.MeshStandardMaterial({ color: 0x0f3251, roughness: 0.4 })
          );
          ring.position.set(mesh.position.x, h + 0.65, mesh.position.z);
          ring.rotation.x = Math.PI / 2;
          g.add(ring);
        }

        this._rooms.push({ mesh, room, floorId: floor.id });

        if (room.w * room.d >= 40 || active) {
          const lab = document.createElement('div');
          lab.textContent = room.name;
          Object.assign(lab.style, {
            position: 'absolute', transform: 'translate(-50%,-50%)', whiteSpace: 'nowrap',
            font: this._labelFont,
            letterSpacing: this._labelCaps ? '.07em' : '-.005em',
            textTransform: this._labelCaps ? 'uppercase' : 'none',
            padding: this._labelCaps ? '2.5px 6px' : '3px 7px',
            borderRadius: this._labelCaps ? '3px' : '7px',
            color: active ? '#0f3251' : '#3c4147',
            background: active ? 'rgba(234,244,248,.95)' : 'rgba(246,248,249,.8)',
            border: '1px solid ' + (active ? '#17557f' : 'rgba(20,35,46,.16)'),
            transition: 'opacity .2s'
          });
          this._labelLayer.appendChild(lab);
          this._labels.push({ el: lab, mesh, y: h, floor: floor.id, index: i });
        }
      });

      if (i === n - 1 && this._roof) {
        const roof = new THREE.Mesh(
          new THREE.ConeGeometry(1, 1, 4, 1),
          new THREE.MeshStandardMaterial({
            color: 0xe3eaef, roughness: 0.85,
            transparent: true, opacity: 0.42, depthWrite: false, side: THREE.DoubleSide
          })
        );
        roof.rotation.y = Math.PI / 4;
        roof.scale.set((FW + 1.4) / Math.SQRT2, 1.9, (FD + 1.4) / Math.SQRT2);
        roof.position.y = 3.0 + 1.15;
        roof.castShadow = false;
        roof.userData.roof = true;
        g.add(roof);
        const re = new THREE.LineSegments(
          new THREE.EdgesGeometry(roof.geometry),
          new THREE.LineBasicMaterial({ color: 0xa4b2bc })
        );
        re.rotation.copy(roof.rotation); re.scale.copy(roof.scale); re.position.copy(roof.position);
        g.add(re);
      }
    });
    this._resize();
  }

  _loop() {
    const tick = () => {
      this._raf = requestAnimationFrame(tick);
      if (this._auto) this._rot.theta += 0.0022;

      this._floorGroups.forEach(g => {
        const target = g.userData.baseY + (this._exploded ? g.userData.index * 5.2 : 0);
        g.position.y += (target - g.position.y) * 0.12;
      });

      const { theta, phi } = this._rot;
      const dist = this._rot.dist * (this._fit || 1);
      const cy = this._data.length * FH * 0.45 + (this._exploded ? this._data.length * 1.9 : 0);
      this.camera.position.set(
        Math.sin(theta) * Math.cos(phi) * dist,
        Math.sin(phi) * dist + 4,
        Math.cos(theta) * Math.cos(phi) * dist
      );
      this.camera.lookAt(0, cy, 0);
      this.renderer.render(this.scene, this.camera);

      const r = this.renderer.domElement.getBoundingClientRect();
      const v = new THREE.Vector3();
      const placed = [];
      this._labels.forEach(l => {
        l.mesh.getWorldPosition(v);
        v.y += l.y / 2 + 0.4;
        v.project(this.camera);
        const top = l.index === this._data.length - 1;
        const visible = this._exploded || ((!this._labelFloor || l.floor === this._labelFloor) && !(this._roof && top));
        if (v.z > 1 || !visible) { l.el.style.opacity = '0'; return; }
        const px = (v.x + 1) / 2 * r.width, py = (-v.y + 1) / 2 * r.height;
        const w = (l.el.offsetWidth || 60) / 2 + 3, h = (l.el.offsetHeight || 14) / 2 + 2;
        const box = [px - w, py - h, px + w, py + h];
        if (placed.some(p => !(box[2] < p[0] || box[0] > p[2] || box[3] < p[1] || box[1] > p[3]))) { l.el.style.opacity = '0'; return; }
        placed.push(box);
        l.el.style.opacity = '1';
        l.el.style.left = px + 'px';
        l.el.style.top = py + 'px';
      });
    };
    tick();
  }

  disconnectedCallback() { cancelAnimationFrame(this._raf); this._ro && this._ro.disconnect(); }
}

['labelFloor','labelFont','labelCaps','activeRoom','dataJson','exploded','roof','autorotate'].forEach(p => {
  const attr = p.replace(/[A-Z]/g, c => '-' + c.toLowerCase());
  Object.defineProperty(CCCHouse.prototype, p, {
    configurable: true,
    get() { return this.getAttribute(attr); },
    set(v) {
      if (p === 'labelFloor') this._labelFloorProp = v;
      if (v === null || v === undefined) this.removeAttribute(attr);
      else this.setAttribute(attr, String(v));
    }
  });
});

if (!customElements.get('ccc-house')) customElements.define('ccc-house', CCCHouse);
