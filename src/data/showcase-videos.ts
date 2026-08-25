// Vídeos do carrossel "See our team in action" (Home + páginas de serviço).
// Para virar um carrossel completo, adicione mais IDs do YouTube aqui — o
// componente VideoShowcase vira automaticamente um carrossel deslizável quando
// há 2 ou mais vídeos. Use apenas o ID (a parte depois de /embed/ ou v=).
export interface ShowcaseVideo {
  id: string;
  title: string;
}

export const showcaseVideos: ShowcaseVideo[] = [
  { id: "zaj8T4r_3MY", title: "Deep cleaning transformation — Capital Clean Care" },
  // { id: "OUTRO_ID_AQUI", title: "Descrição do vídeo" },
];
