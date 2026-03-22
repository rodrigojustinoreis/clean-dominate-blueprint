import re, glob

files = glob.glob('src/**/*.tsx', recursive=True) + glob.glob('src/**/*.ts', recursive=True)
pattern = re.compile(r'(@/assets/[^"]+)\.(png|jpg|jpeg)')

for f in files:
    with open(f) as fh:
        content = fh.read()
    new = pattern.sub(r'\1.webp', content)
    if new != content:
        with open(f, 'w') as fh:
            fh.write(new)
        print('Updated:', f)
