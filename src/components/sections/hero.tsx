import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { File, ArrowDownRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";

import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper
      id="hero"
      className={cn(
        "relative w-full min-h-screen overflow-hidden",
        "bg-background"
      )}
    >
      {/* Decorative background glow — the portrait stays a separate visual, not a cover image. */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative z-[2] mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 py-28 md:grid-cols-[1.05fr_0.95fr] md:px-10 lg:px-16 lg:py-24">
        {/* Intro */}
        <div className="order-2 flex flex-col justify-center md:order-1">
          {!isLoading && (
            <div className="flex flex-col">
              <BlurIn delay={0.7}>
                <p className="mb-3 cursor-default text-base font-medium tracking-[0.22em] text-slate-500 uppercase dark:text-zinc-400 sm:text-lg">
                  Hello, I&apos;m
                </p>
              </BlurIn>

              <BlurIn delay={1}>
                <Tooltip delayDuration={300}>
                  <TooltipTrigger asChild>
                    <h1
                      className={cn(
                        "-ml-1 cursor-default text-left font-bold leading-[0.92]",
                        "text-6xl tracking-tight text-slate-900 dark:text-white",
                        "sm:text-7xl md:text-7xl lg:text-8xl xl:text-9xl"
                      )}
                    >
                      {config.author.split(" ")[0]}
                      <span className="text-cyan-500">.</span>
                      <br />
                      <span className="bg-gradient-to-r from-slate-900 via-cyan-500 to-slate-900 bg-clip-text text-transparent dark:from-white dark:via-cyan-400 dark:to-white">
                        {config.author.split(" ")[1]}
                      </span>
                    </h1>
                  </TooltipTrigger>
                  <TooltipContent
                    side="top"
                    className="dark:bg-white dark:text-black"
                  >
                    there&apos;s something waiting for you in devtools
                  </TooltipContent>
                </Tooltip>
              </BlurIn>

              <BlurIn delay={1.2}>
                <p className="mt-5 cursor-default text-lg font-medium text-slate-600 dark:text-zinc-300 sm:text-xl md:text-2xl">
                  Analyst <span className="text-cyan-500">|</span> Problem Solver <span className="text-cyan-500">|</span> Continuous Learner
                </p>
              </BlurIn>

              <BlurIn delay={1.35}>
                <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500 dark:text-zinc-400 sm:text-lg sm:leading-8">
                  Passionate about data, technology, business solutions and creating real-world impact. I enjoy exploring new opportunities, solving complex problems, and building a better tomorrow through innovation, discipline and hard work.
                </p>
              </BlurIn>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="#projects" className="flex-1 sm:flex-none">
                  <BoxReveal delay={1.55} width="100%">
                    <Button className="h-12 w-full gap-2 rounded-xl bg-cyan-500 px-6 text-slate-950 shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 sm:w-auto">
                      View My Work
                      <ArrowDownRight size={19} />
                    </Button>
                  </BoxReveal>
                </Link>

                <Link href="/resume" target="_blank" className="flex-1 sm:flex-none">
                  <BoxReveal delay={1.7} width="100%">
                    <Button
                      variant="outline"
                      className="h-12 w-full gap-2 rounded-xl border-slate-300 px-6 dark:border-zinc-700 sm:w-auto"
                    >
                      <File size={20} />
                      Resume
                    </Button>
                  </BoxReveal>
                </Link>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <Link href={config.social.github} target="_blank" className="cursor-can-hover">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <SiGithub size={19} />
                  </Button>
                </Link>
                <Link href={config.social.linkedin} target="_blank" className="cursor-can-hover">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <SiLinkedin size={19} />
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Portrait card: your uploaded photo, displayed as a dedicated portfolio portrait. */}
        <div className="order-1 flex items-center justify-center md:order-2 md:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2rem] bg-cyan-400/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/40 p-2 shadow-2xl shadow-slate-900/15 backdrop-blur dark:border-white/10 dark:bg-white/5">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-slate-100 dark:bg-zinc-900">
                <Image
                  src="/assets/me.jpg"
                  alt="Mitesh Singh"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 42vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.025]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-slate-950/55 px-5 py-4 text-white backdrop-blur-md">
                  <p className="text-xs font-semibold tracking-[0.25em] text-cyan-300 uppercase">Mitesh Singh</p>
                  <p className="mt-1 text-sm text-white/80">Analyst · Learner · Achiever</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-slate-200/70 bg-white/90 px-5 py-4 shadow-xl backdrop-blur md:block dark:border-zinc-700 dark:bg-zinc-900/90">
              <p className="text-2xl font-bold text-slate-900 dark:text-white">25+</p>
              <p className="text-xs text-slate-500 dark:text-zinc-400">Certificates & Awards</p>
            </div>

            <div className="absolute -right-4 top-10 hidden rounded-2xl border border-cyan-400/30 bg-slate-950/85 px-4 py-3 text-white shadow-xl backdrop-blur md:block">
              <p className="text-xs tracking-[0.2em] text-cyan-300 uppercase">Focused</p>
              <p className="mt-1 text-sm font-medium">Consistent · Growing</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-[3] -translate-x-1/2">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
