"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@hooks/use-outside-click";
import Image from "next/image";

export interface ExpandableCardProps {
  name: string;
  title: string;
  description: string;
  src: string;
}

/**
 * A single reusable card that expands into a modal-like view when clicked.
 * Import and use this component in other pages by passing the props listed above.
 */
export function ExpandableCard({
  name,
  title,
  description,
  src,
}: ExpandableCardProps) {
  const [active, setActive] = useState(false);
  const id = useId();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(false);
    }

    if (active) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(false));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-100"
            onClick={() => setActive(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0  grid place-items-center z-100">
            <motion.button
              key={`button-${title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(false)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${title}-${id}`}
              ref={ref}
              className="w-full max-w-[320px] h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${title}-${id}`}>
                <Image
                  width={200}
                  height={200}
                  src={src}
                  alt={title}
                  className="w-80 h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-center items-center items-start p-4">
                  <div className="flex justify-center items-center flex-col">
                    <motion.h3
                      layoutId={`name-${name}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {name}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {description}
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <motion.div
        layoutId={`card-${title}-${id}`}
        onClick={() => setActive(true)}
        className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
      >
        <div className="relative flex gap-4 flex-col max-w-[200px] w-full">          
          <motion.div className="eb-unactive" layoutId={`image-${title}-${id}`}>
            <Image
              width={100}
              height={100}
              src={src}
              alt={title}
              className="h-[200px] w-[200px] rounded-lg object-cover object-top"
            /> 
          </motion.div>

          <div className="flex justify-center items-center flex-col">
            <motion.h3
              layoutId={`title-${title}-${id}`}
              className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base flex"
            >
              {title} 
            </motion.h3>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export function ExpandableCardDemo() {
  const id = useId();

  return (
    <>
      <ul className="w-full">
        {cards.map((card) => (
          <ExpandableCard
            name="Lana Del Rey"
            key={card.title}
            title={card.title}
            description={card.description}
            src={card.src}
          />
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Disarmament and International Security Committee",
    title: "DISEC",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>
      );
    },
  },
];
