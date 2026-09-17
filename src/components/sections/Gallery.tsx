import { galleryImages } from "../../data/gallery";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

// Alturas alternadas para gerar composição tipo masonry sem lib extra
const spanPattern = ["row-span-2", "row-span-1", "row-span-1", "row-span-2", "row-span-1", "row-span-1"];

export function Gallery() {
  return (
    <section className="py-20 md:py-32">
      <div className="container-editorial">
        <Reveal>
          <SectionHeading
            eyebrow="Momentos"
            title="A vida da nossa igreja em imagens."
            align="left"
          />
        </Reveal>

        <div className="mt-12 grid auto-rows-[140px] grid-cols-2 gap-3 sm:auto-rows-[180px] sm:gap-4 md:mt-16 md:auto-rows-[220px] md:grid-cols-3">
          {galleryImages.map((img, i) => (
            <div
              key={img.id}
              className={`group relative overflow-hidden rounded-card ${spanPattern[i % spanPattern.length]}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
