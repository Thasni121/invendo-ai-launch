"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { photos } from "@/lib/invendo-data";

export function ImageGallery({ category }: { category?: string }) {
  const galleryPhotos = useMemo(
    () => (category ? photos.filter((photo) => photo.category === category) : photos),
    [category],
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activePhoto = activeIndex === null ? null : galleryPhotos[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return current === 0 ? galleryPhotos.length - 1 : current - 1;
    });
  };

  const showNext = () => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return current === galleryPhotos.length - 1 ? 0 : current + 1;
    });
  };

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryPhotos.map((photo, index) => (
          <figure key={photo.id} className="group overflow-hidden rounded-lg border border-border bg-card shadow-card">
            <Button
              type="button"
              variant="ghost"
              className="block h-auto w-full rounded-none p-0 hover:bg-transparent"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open image: ${photo.caption}`}
            >
              <img src={photo.src} alt={photo.alt} className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            </Button>
            <figcaption className="space-y-2 p-4">
              <span className="eyebrow text-accent-foreground">{photo.category}</span>
              <p className="text-sm leading-6 text-card-foreground">{photo.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      {activePhoto ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-overlay p-4" role="dialog" aria-modal="true" aria-label={activePhoto.caption}>
          <div className="relative w-full max-w-5xl rounded-lg bg-card p-3 shadow-elevated">
            <div className="absolute right-4 top-4 z-10">
              <Button variant="secondary" size="icon" onClick={() => setActiveIndex(null)} aria-label="Close image viewer">
                <X aria-hidden="true" />
              </Button>
            </div>
            <img src={activePhoto.src} alt={activePhoto.alt} className="max-h-[78vh] w-full rounded-md object-contain" />
            <div className="flex items-center justify-between gap-4 px-2 py-3">
              <Button variant="outline" size="icon" onClick={showPrevious} aria-label="Previous image">
                <ChevronLeft aria-hidden="true" />
              </Button>
              <p className="text-center text-sm text-muted-foreground">{activePhoto.caption}</p>
              <Button variant="outline" size="icon" onClick={showNext} aria-label="Next image">
                <ChevronRight aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
