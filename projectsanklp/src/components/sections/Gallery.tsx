"use client";

import React, { useState, useEffect, useRef } from "react";
import { siteConfig } from "../../config/org";
import { X, ChevronRight } from "../ui/Icons";

export default function Gallery() {
  const { title, subtitle, stories } = siteConfig.gallery;
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedStoryIndex, setSelectedStoryIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  // Unique categories list
  const categories = ["All", ...Array.from(new Set(stories.map((s) => s.category)))];

  const filteredStories =
    activeCategory === "All"
      ? stories
      : stories.filter((s) => s.category === activeCategory);

  const closeLightbox = () => {
    setSelectedStoryIndex(null);
    if (previousFocus.current) {
      previousFocus.current.focus();
    }
  };

  const nextStory = () => {
    if (selectedStoryIndex === null) return;
    setSelectedStoryIndex((selectedStoryIndex + 1) % stories.length);
  };

  const prevStory = () => {
    if (selectedStoryIndex === null) return;
    setSelectedStoryIndex((selectedStoryIndex - 1 + stories.length) % stories.length);
  };

  // Handle ESC and Arrow keys for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedStoryIndex === null) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        nextStory();
      } else if (e.key === "ArrowLeft") {
        prevStory();
      }
    };

    if (selectedStoryIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      previousFocus.current = document.activeElement as HTMLElement;
      setTimeout(() => {
        lightboxRef.current?.focus();
      }, 50);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStoryIndex]);

  const openLightbox = (title: string) => {
    const index = stories.findIndex((s) => s.title === title);
    setSelectedStoryIndex(index);
  };

  // Generate stylized graphic background for gallery items (as high-fidelity digital art placeholders)
  const getCardStyle = (category: string) => {
    switch (category.toLowerCase()) {
      case "lab openings":
        return "from-violet-600 via-indigo-700 to-indigo-900";
      case "mentorship":
        return "from-indigo-600 via-purple-700 to-pink-900";
      case "workshops":
        return "from-teal-600 via-emerald-700 to-emerald-900";
      case "graduation":
        return "from-blue-600 via-indigo-700 to-purple-900";
      default:
        return "from-zinc-800 to-zinc-950";
    }
  };

  const getIllustration = (category: string) => {
    switch (category.toLowerCase()) {
      case "lab openings":
        return (
          <svg className="w-16 h-16 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "mentorship":
        return (
          <svg className="w-16 h-16 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.97 5.97 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
        );
      case "workshops":
        return (
          <svg className="w-16 h-16 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
        );
      case "graduation":
        return (
          <svg className="w-16 h-16 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 017.882 5.848 50.503 50.503 0 00-2.658.813m-11.482 0A50.82 50.82 0 0112 11.518a50.82 50.82 0 014.518-1.371m-4.518 1.371v5.191" />
          </svg>
        );
      default:
        return (
          <svg className="w-16 h-16 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        );
    }
  };

  const currentLightboxStory = selectedStoryIndex !== null ? stories[selectedStoryIndex] : null;

  return (
    <section id="gallery" className="py-24 sm:py-32 relative overflow-hidden bg-white dark:bg-black">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3">
            In Action
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-6">
            {title}
          </h3>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full mb-6" />
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-sm dark:bg-indigo-500"
                  : "bg-zinc-100 hover:bg-zinc-200/80 text-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStories.map((story) => (
            <div
              key={story.title}
              onClick={() => openLightbox(story.title)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 outline-none"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(story.title)}
              aria-label={`View details of ${story.title}`}
            >
              {/* High fidelity background graphics */}
              <div
                className={`w-full aspect-[4/3] bg-gradient-to-br ${getCardStyle(
                  story.category
                )} flex items-center justify-center relative transition-transform duration-500 group-hover:scale-105`}
              >
                {/* Visual mesh overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-40" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px] opacity-35" />
                {getIllustration(story.category)}
              </div>

              {/* Text Card overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[10px] font-extrabold tracking-wider uppercase text-indigo-400 mb-1">
                  {story.category}
                </span>
                <h4 className="text-base font-bold text-white mb-2 leading-tight">
                  {story.title}
                </h4>
                <p className="text-xs text-zinc-300 line-clamp-2">
                  {story.description}
                </p>
              </div>

              {/* Static visual layout for keyboards / fallback */}
              <div className="p-5 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800/80 group-hover:hidden">
                <span className="text-[10px] font-bold tracking-wider uppercase text-indigo-600 dark:text-indigo-400 block mb-1">
                  {story.category}
                </span>
                <h4 className="text-sm font-bold text-zinc-950 dark:text-white line-clamp-1 mb-1">
                  {story.title}
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedStoryIndex !== null && currentLightboxStory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
        >
          <div
            ref={lightboxRef}
            tabIndex={-1}
            className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 focus:outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 text-zinc-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>

            {/* Carousel Content */}
            <div className="grid md:grid-cols-12 gap-8 items-center">
              {/* Graphic Block */}
              <div className="md:col-span-7 aspect-[4/3] rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-indigo-950 border border-zinc-800 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-40" />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${getCardStyle(
                    currentLightboxStory.category
                  )} opacity-20`}
                />
                {getIllustration(currentLightboxStory.category)}
              </div>

              {/* Text Info */}
              <div className="md:col-span-5 text-left text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-indigo-950/40 text-xs font-semibold text-indigo-400 border border-indigo-900/50 mb-4">
                  {currentLightboxStory.category}
                </span>
                <h3 id="lightbox-title" className="text-2xl font-extrabold text-white mb-4 leading-tight">
                  {currentLightboxStory.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {currentLightboxStory.description}
                </p>

                {/* Nav buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={prevStory}
                    className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    aria-label="Previous story"
                  >
                    <span className="rotate-180 inline-block"><ChevronRight size={18} /></span>
                  </button>
                  <button
                    onClick={nextStory}
                    className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    aria-label="Next story"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
