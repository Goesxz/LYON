export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

/** Substitua pelas fotos reais da igreja (cultos, comunidade, eventos). */
export const galleryImages: GalleryImage[] = [
  { id: "g1", src: "https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=1200&auto=format&fit=crop", alt: "Momento de culto da comunidade" },
  { id: "g2", src: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=900&auto=format&fit=crop", alt: "Pessoas reunidas em comunhão" },
  { id: "g3", src: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=900&auto=format&fit=crop", alt: "Momento de louvor e adoração" },
  { id: "g4", src: "https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?q=80&w=1200&auto=format&fit=crop", alt: "Comunidade reunida" },
  { id: "g5", src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=900&auto=format&fit=crop", alt: "Encontro de pequenos grupos" },
  { id: "g6", src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=900&auto=format&fit=crop", alt: "Celebração da igreja" },
];
