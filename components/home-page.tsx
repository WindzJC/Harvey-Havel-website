"use client";

import Image from "next/image";
import { useRef } from "react";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { siteData } from "@/data/harvey-site";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { LinkButton } from "@/components/ui/link-button";
import { Reveal } from "@/components/ui/reveal";

export function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative isolate overflow-x-hidden">
      <SiteHeader navItems={siteData.navItems} />

      <main id="main-content">
        <HeroSection shouldReduceMotion={shouldReduceMotion} />
        <AboutSection />
        <BooksSection shouldReduceMotion={shouldReduceMotion} />
        <FeaturedSection shouldReduceMotion={shouldReduceMotion} />
        <ThemesSection shouldReduceMotion={shouldReduceMotion} />
        <PressSection />
        <RetailSection />
      </main>

      <SiteFooter {...siteData.footer} />
    </div>
  );
}

function HeroSection({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean | null;
}) {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const panelY = useTransform(scrollYProgress, [0, 1], [0, -48]);
  const coverY = useTransform(scrollYProgress, [0, 1], [0, -72]);
  const coverRotate = useTransform(scrollYProgress, [0, 1], [-4, 2]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative scroll-mt-28 overflow-hidden px-6 pb-18 pt-28 sm:pt-32 lg:px-10 lg:pb-24 lg:pt-36"
    >
      <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(166,134,78,0.16),transparent_38%),radial-gradient(circle_at_80%_18%,rgba(90,118,156,0.18),transparent_32%)]" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(25rem,0.95fr)]">
        <Reveal className="relative z-10">
          <p className="eyebrow eyebrow-gold">
            Literary Fiction
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-6xl leading-[0.92] text-balance text-ivory sm:text-7xl lg:text-[6.2rem]">
            {siteData.hero.title}
          </h1>
          <p className="mt-6 text-xl leading-8 text-ivory/72 sm:text-2xl">
            {siteData.hero.subtitle}
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ivory/72 sm:text-[1.125rem]">
            {siteData.hero.body}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <LinkButton href="#books">Explore the Books</LinkButton>
            <LinkButton
              href={siteData.links.amazonBook}
              external
              variant="secondary"
            >
              Buy The Queen of Intelligence
            </LinkButton>
          </div>

          <p className="mt-8 text-[0.72rem] uppercase tracking-[0.32em] text-ivory/48">
            {siteData.hero.microcopy}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <motion.div
            style={shouldReduceMotion ? undefined : { y: panelY }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%),radial-gradient(circle_at_80%_15%,rgba(166,134,78,0.2),transparent_28%)]" />
            <div className="absolute inset-x-6 top-6 h-px bg-[linear-gradient(90deg,transparent,rgba(168,134,75,0.65),transparent)]" />

            <div className="relative grid gap-8 sm:grid-cols-[1fr_auto] sm:items-center">
              <div className="max-w-sm">
                <p className="eyebrow eyebrow-gold">
                  {siteData.hero.featuredLabel}
                </p>
                <h2 className="mt-4 max-w-xs font-serif text-4xl leading-none text-ivory sm:text-[3.25rem]">
                  {siteData.hero.featuredTitle}
                </h2>
                <p className="mt-4 text-sm uppercase tracking-[0.28em] text-ivory/54">
                  {siteData.hero.featuredSubtitle}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {siteData.featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[0.66rem] uppercase tracking-[0.24em] text-ivory/62"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <motion.div
                style={
                  shouldReduceMotion
                    ? undefined
                    : { y: coverY, rotate: coverRotate }
                }
                className="relative mx-auto w-[13rem] shrink-0 sm:mr-2 sm:w-[14.5rem]"
              >
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[1.5rem] border border-gold/15 bg-gold/8 blur-[2px]" />
                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/12 bg-midnight/80 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
                  <Image
                    src={siteData.hero.featuredCover}
                    alt="Book cover for The Queen of Intelligence by Harvey Havel."
                    width={620}
                    height={920}
                    priority
                    className="h-auto w-full rounded-[1rem] object-cover"
                  />
                </div>
              </motion.div>
            </div>

            <div className="relative mt-8 border-t border-white/10 pt-6">
              <p className="max-w-xl text-base leading-7 text-ivory/64">
                A serious, atmospheric work of fiction crossing politics,
                obsession, and the uneasy pressure of contemporary history.
              </p>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-28 px-6 py-18 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] px-6 py-8 shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-2xl sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(166,134,78,0.16),transparent_26%),radial-gradient(circle_at_88%_12%,rgba(90,118,156,0.14),transparent_24%)]" />
            <div className="absolute inset-x-8 top-8 h-px bg-[linear-gradient(90deg,transparent,rgba(179,149,92,0.68),transparent)]" />

            <div className="relative">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="eyebrow eyebrow-gold">
                    About
                  </p>
                  <h2 className="mt-5 font-serif text-4xl leading-[0.94] text-ivory sm:text-5xl lg:text-[4.35rem]">
                    A long-form literary voice shaped over three decades.
                  </h2>
                </div>
                <div className="max-w-md rounded-[1.4rem] border border-gold/15 bg-[linear-gradient(180deg,rgba(168,134,75,0.12),rgba(168,134,75,0.04))] px-5 py-4">
                  <p className="eyebrow eyebrow-gold">
                    Authorial Note
                  </p>
                  <blockquote className="mt-3 font-serif text-[1.8rem] leading-[1.02] text-ivory sm:text-[2.15rem]">
                    {siteData.about.quote}
                  </blockquote>
                </div>
              </div>

              <div className="mt-8 grid gap-8 xl:grid-cols-[minmax(0,1.15fr)_22rem] xl:items-start">
                <div className="space-y-8">
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-midnight/45 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.24)] sm:p-8 lg:p-9">
                    <div className="absolute inset-x-6 top-6 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.05),rgba(179,149,92,0.55),rgba(255,255,255,0.05))]" />
                    <div className="relative flow-root pt-5">
                      <p className="max-w-4xl font-serif text-[2rem] leading-[1.06] text-ivory sm:text-[2.65rem] lg:text-[3.2rem]">
                        <span className="float-left mr-4 mt-1 font-serif text-[4.6rem] leading-[0.72] text-gold/88 sm:text-[5.4rem]">
                          H
                        </span>
                        {siteData.about.lead.slice(1)}
                      </p>
                    </div>
                    <p className="mt-8 max-w-3xl border-t border-white/10 pt-6 text-base leading-8 text-ivory/66 sm:text-[1.02rem]">
                      {siteData.about.support}
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    {siteData.about.milestones.map((milestone) => (
                      <div
                        key={`${milestone.label}-${milestone.title}`}
                        className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.22)]"
                      >
                        <p className="eyebrow eyebrow-gold">
                          {milestone.label}
                        </p>
                        <p className="mt-4 font-serif text-[1.7rem] leading-[1.05] text-ivory">
                          {milestone.title}
                        </p>
                        <p className="mt-4 text-sm leading-7 text-ivory/60">
                          {milestone.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:grid-cols-1">
                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(166,134,78,0.18),transparent_30%)]" />
                    <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-midnight/75">
                      <Image
                        src={siteData.about.portrait}
                        alt={siteData.about.portraitAlt}
                        width={680}
                        height={760}
                        className="h-auto w-full object-cover grayscale contrast-125"
                      />
                    </div>
                    <div className="relative mt-5 flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="eyebrow eyebrow-gold max-w-[16rem]">
                          Former Lecturer in English
                        </p>
                        <p className="mt-3 max-w-sm text-sm leading-7 text-ivory/62">
                          Bergen Community College, SUNY Albany, and the College
                          of Saint Rose.
                        </p>
                      </div>
                      <div className="shrink-0 rounded-full border border-white/10 px-4 py-2 text-[0.72rem] uppercase tracking-[0.16em] text-ivory/54">
                        Albany
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,20,31,0.92),rgba(9,12,18,0.82))] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.25)]">
                    <p className="eyebrow eyebrow-gold">
                      Literary Position
                    </p>
                    <p className="mt-4 font-serif text-[2rem] leading-[1.04] text-ivory">
                      A novelist and essayist attentive to power, culture, and
                      the fault lines of American life.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-px overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/10 sm:grid-cols-2 xl:grid-cols-4">
                {siteData.about.stats.map((stat) => (
                  <div
                    key={`${stat.value}-${stat.label}`}
                    className="bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] px-5 py-6"
                  >
                    <p className="font-serif text-[1.85rem] leading-none text-ivory">
                      {stat.value}
                    </p>
                    <p className="mt-3 text-[0.66rem] uppercase tracking-[0.28em] text-ivory/50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BooksSection({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean | null;
}) {
  return (
    <section
      id="books"
      className="scroll-mt-28 px-6 py-18 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
          <Reveal>
            <p className="eyebrow eyebrow-gold">
              Books
            </p>
            <h2 className="mt-6 max-w-4xl font-serif text-4xl leading-none text-ivory sm:text-5xl lg:text-[4.25rem]">
              A catalogue shaped like a private library.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/66">
              Selected titles from Harvey Havel&apos;s body of work, presented
              with
              the restraint and atmosphere of a collected edition rather than an
              online shelf.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.3)]">
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-ivory/44">
                From the wider catalogue
              </p>
              <div className="mt-5 grid grid-cols-4 gap-3">
                {siteData.backlistPreview.map((book) => (
                  <div
                    key={book.title}
                    className="overflow-hidden rounded-[1rem] border border-white/10 bg-midnight/80"
                  >
                    <Image
                      src={book.image}
                      alt={`Book cover for ${book.title} by Harvey Havel.`}
                      width={220}
                      height={320}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {siteData.books.map((book, index) => (
            <motion.article
              key={book.title}
              whileHover={shouldReduceMotion ? undefined : { y: -8 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="h-full"
            >
              <Reveal delay={index * 0.08} className="h-full">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.35)]">
                  <div className="absolute inset-x-5 top-5 h-px bg-[linear-gradient(90deg,transparent,rgba(168,134,75,0.65),transparent)]" />
                  <div className="relative mt-4 overflow-hidden rounded-[1.35rem] border border-white/10 bg-midnight/75">
                    {book.image ? (
                      <Image
                        src={book.image}
                        alt={book.alt ?? `Book cover for ${book.title}.`}
                        width={460}
                        height={680}
                        className="h-[20rem] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-[20rem] items-end bg-[radial-gradient(circle_at_top,rgba(166,134,78,0.26),transparent_36%),linear-gradient(180deg,rgba(16,22,32,0.55),rgba(8,11,16,0.95))] p-6">
                        <p className="max-w-[12rem] font-serif text-3xl leading-none text-ivory/80">
                          Catalogue expanding
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="relative flex flex-1 flex-col">
                    <p className="eyebrow eyebrow-gold mt-6">
                      {book.category}
                    </p>
                    <h3 className="mt-3 font-serif text-3xl leading-tight text-ivory">
                      {book.title}
                    </h3>
                    <p className="mt-4 flex-1 text-base leading-7 text-ivory/64">
                      {book.shortLine}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {book.retailers.length ? (
                        book.retailers.map((retailer) => (
                          <LinkButton
                            key={retailer.label}
                            href={retailer.href}
                            external
                            variant="ghost"
                            className="px-4 py-2 text-[0.64rem]"
                          >
                            {retailer.label}
                          </LinkButton>
                        ))
                      ) : (
                        <span className="text-[0.68rem] uppercase tracking-[0.28em] text-ivory/38">
                          Retail links coming soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedSection({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean | null;
}) {
  return (
    <section
      id="featured"
      className="scroll-mt-28 px-6 py-18 sm:py-24 lg:px-10 lg:py-30"
    >
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] px-6 py-8 shadow-[0_28px_110px_rgba(0,0,0,0.42)] backdrop-blur-xl sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(166,134,78,0.18),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(90,118,156,0.16),transparent_26%)]" />
            <div className="absolute left-10 right-10 top-10 h-px bg-[linear-gradient(90deg,transparent,rgba(179,149,92,0.7),transparent)]" />

            <div className="relative grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
              <div className="lg:pr-10">
                <p className="eyebrow eyebrow-gold">
                  Featured Novel
                </p>
                <h2 className="mt-6 max-w-xl font-serif text-5xl leading-[0.92] text-ivory sm:text-6xl lg:text-[5.6rem]">
                  {siteData.featured.title}
                </h2>
                <p className="mt-5 text-sm uppercase tracking-[0.3em] text-ivory/52">
                  {siteData.featured.subtitle}
                </p>
                <p className="mt-8 max-w-xl text-lg leading-8 text-ivory/68">
                  {siteData.featured.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {siteData.featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-[0.66rem] uppercase tracking-[0.24em] text-gold-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  {siteData.featured.actions.map((action, index) => (
                    <LinkButton
                      key={action.label}
                      href={action.href}
                      external
                      variant={index === 0 ? "primary" : "secondary"}
                    >
                      {action.label}
                    </LinkButton>
                  ))}
                </div>
              </div>

              <div className="relative lg:border-l lg:border-white/10 lg:pl-10">
                <div className="absolute left-0 top-0 hidden h-full w-px bg-[linear-gradient(180deg,transparent,rgba(179,149,92,0.52),transparent)] lg:block" />
                <div className="grid gap-6 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start">
                  <motion.div
                    whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                    className="mx-auto w-[14rem]"
                  >
                    <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-midnight/80 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.55)]">
                      <Image
                        src={siteData.featured.cover}
                        alt="Book cover for The Queen of Intelligence by Harvey Havel."
                        width={620}
                        height={920}
                        className="h-auto w-full rounded-[1.1rem] object-cover"
                      />
                    </div>
                  </motion.div>

                  <div className="space-y-6">
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                      <p className="text-[0.68rem] uppercase tracking-[0.28em] text-ivory/46">
                        Editorial Frame
                      </p>
                      <p className="mt-4 font-serif text-3xl leading-tight text-ivory">
                        Sweeping, provocative, and resolutely fictional.
                      </p>
                      <p className="mt-4 text-base leading-7 text-ivory/62">
                        Presented as a literary-political thriller, the novel
                        moves through espionage, power, and unease without
                        collapsing into reportage or sensationalism.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      {[
                        "Espionage",
                        "Psychological Tension",
                        "Political Unease",
                      ].map((item) => (
                        <div
                          key={item}
                          className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] px-4 py-5 text-center"
                        >
                          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-ivory/58">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ThemesSection({
  shouldReduceMotion,
}: {
  shouldReduceMotion: boolean | null;
}) {
  return (
    <section className="px-6 py-18 sm:py-22 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] px-6 py-14 text-center shadow-[0_28px_90px_rgba(0,0,0,0.35)] sm:px-8 lg:px-14 lg:py-18">
            <motion.div
              aria-hidden="true"
              animate={
                shouldReduceMotion
                  ? undefined
                  : { scale: [1, 1.08, 1], opacity: [0.38, 0.5, 0.38] }
              }
              transition={{
                duration: 18,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute inset-x-[18%] top-[-22%] h-64 rounded-full bg-[radial-gradient(circle,rgba(166,134,78,0.28),transparent_64%)] blur-3xl"
            />
            <motion.div
              aria-hidden="true"
              animate={
                shouldReduceMotion
                  ? undefined
                  : { x: [0, 24, 0], opacity: [0.2, 0.3, 0.2] }
              }
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute inset-y-0 right-[-6rem] w-56 bg-[radial-gradient(circle,rgba(86,110,145,0.25),transparent_60%)] blur-3xl"
            />

            <div className="relative">
              <p className="eyebrow eyebrow-gold">
                Themes
              </p>
              <h2 className="mx-auto mt-6 max-w-5xl font-serif text-4xl leading-[1.02] text-balance text-ivory sm:text-5xl lg:text-[4.5rem]">
                {siteData.themes.title}
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-ivory/68">
                {siteData.themes.support}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PressSection() {
  return (
    <section
      id="press"
      className="scroll-mt-28 px-6 py-18 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_28px_100px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:p-10">
            <div>
              <p className="eyebrow eyebrow-gold">
                Press
              </p>
              <h2 className="mt-6 font-serif text-4xl leading-none text-ivory sm:text-5xl">
                {siteData.press.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/68">
                {siteData.press.copy}
              </p>
              <div className="mt-8">
                <LinkButton href={siteData.links.interview} external>
                  Read the Interview
                </LinkButton>
              </div>
            </div>

            <div className="rounded-[1.7rem] border border-white/10 bg-midnight/80 p-6">
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-ivory/46">
                Imaginary Planet
              </p>
              <p className="mt-5 font-serif text-3xl leading-tight text-ivory">
                An editorial conversation on fiction, politics, and the pressure
                points of American life.
              </p>
              <p className="mt-5 text-base leading-7 text-ivory/62">
                A substantial interview with Robert Nagle, centered on literary
                method, serious themes, and the wider concerns moving through
                Harvey Havel&apos;s work.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function RetailSection() {
  return (
    <section
      id="buy"
      className="scroll-mt-28 px-6 pb-18 pt-4 sm:pb-24 lg:px-10 lg:pb-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <div className="flex flex-col gap-8 rounded-[2rem] border border-white/10 bg-white/[0.05] px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:px-8 sm:py-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow eyebrow-gold">
                Buy
              </p>
              <h2 className="mt-5 font-serif text-4xl leading-none text-ivory sm:text-5xl">
                {siteData.retail.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-ivory/66">
                {siteData.retail.support}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <LinkButton href={siteData.links.amazonAuthor} external>
                Amazon
              </LinkButton>
              <LinkButton
                href={siteData.links.barnesAndNobleBook}
                external
                variant="secondary"
              >
                Barnes & Noble
              </LinkButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
