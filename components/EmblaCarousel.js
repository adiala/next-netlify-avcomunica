import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./embla/EmblaButtons";
import { useRecursiveTimeout } from "./embla/useRecursiveTimeout";
import { useEmblaCarousel } from "embla-carousel/react";
import Image from "next/image";
import media1 from "../public/media-1.jpg";
import media2 from "../public/media-2.jpg";

const AUTOPLAY_INTERVAL = 4000;

const EmblaCarousel = () => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const autoplay = useCallback(() => {
    if (!embla) return;
    if (embla.canScrollNext()) {
      embla.scrollNext();
    } else {
      embla.scrollTo(0);
    }
  }, [embla]);

  const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

  const scrollNext = useCallback(() => {
    if (!embla) return;
    embla.scrollNext();
    stop();
  }, [embla, stop]);

  const scrollPrev = useCallback(() => {
    if (!embla) return;
    embla.scrollPrev();
    stop();
  }, [embla, stop]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    embla.on("pointerDown", stop);
  }, [embla, onSelect, stop]);

  useEffect(() => {
    play();
  }, [play]);

  return (
    <section className="flex justify-center p-4">
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <div className="embla__slide__inner">
                <Image
                  className="embla__slide__img"
                  src={media1}
                  alt="A cool cat."
                  
                />
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__inner">
                <Image
                  className="embla__slide__img"
                  src={media2}
                  alt="A cool cat."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
