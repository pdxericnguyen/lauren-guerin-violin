export type GalleryImageSlot = {
  src: string;
  alt: string;
  note: string;
};

// Leave src empty until an approved website-ready photo is available.
// Empty slots are intentionally hidden by getVisibleGalleryImages.
export const teachingGalleryImages: GalleryImageSlot[] = [
  {
    src: "",
    alt: "Lauren Guerin teaching a private violin lesson",
    note: "Use for a lesson setting, student setup, or teaching detail photo.",
  },
  {
    src: "",
    alt: "Violin lesson materials and student practice setup",
    note: "Use for an instrument, sheet music, or practice environment photo.",
  },
  {
    src: "",
    alt: "Lauren Guerin working with a violin student",
    note: "Use for a warm student interaction or coaching moment.",
  },
];

export const eventsGalleryImages: GalleryImageSlot[] = [
  {
    src: "",
    alt: "Lauren Guerin performing violin at a wedding ceremony",
    note: "Use for a ceremony, processional, or formal event performance photo.",
  },
  {
    src: "",
    alt: "Live violin performance for a private event",
    note: "Use for a cocktail hour, private event, or ambient performance photo.",
  },
  {
    src: "",
    alt: "Close-up of violin performance details at an event",
    note: "Use for a detail shot of violin, bow, program, venue, or florals.",
  },
];

export function getVisibleGalleryImages(images: GalleryImageSlot[]) {
  return images.filter((image) => image.src.trim().length > 0);
}
