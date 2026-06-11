"use client"

import React from "react"
import { useTheme } from "next-themes"
import Image from "next/image"
import { Sparkles } from "@/components/ui/sparkles"
import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { ProgressiveBlur } from "@/components/ui/progressive-blur"

const clientLogos = [
  { id: 'HA', src: '/client_logo/logo_HA.png', alt: 'Hospital Authority' },
  { id: 'HHS', src: '/client_logo/logo_HHS.png', alt: 'Heep Hong Society' },
  { id: 'IMDA', src: '/client_logo/logo_IMDA.png', alt: 'Infocomm Media Development Authority' },
  { id: 'NCSS', src: '/client_logo/logo_NCSS.jpg', alt: 'National Council of Social Service' },
  { id: 'PYNEH', src: '/client_logo/logo_PYNEH.png', alt: 'Pamela Youde Nethersole Eastern Hospital' },
  { id: 'SKH', src: '/client_logo/logo_SKH.png', alt: 'Hong Kong Sheng Kung Hui' },
  { id: 'SKH2', src: '/client_logo/logo_SKH2.png', alt: 'Hong Kong Sheng Kung Hui logo' },
]

export function ClientLogoSection() {
  const { theme } = useTheme()

  return (
    // <section className="py-24 px-4 overflow-hidden bg-slate-50 dark:bg-zinc-950">
    <section className="py-24 px-4 overflow-hidden ">
      {/* <div className="relative mx-auto max-w-6xl rounded-[3rem] border border-slate-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 py-16 px-8 shadow-2xl backdrop-blur-md"> */}
       
<div className="flex items-center justify-center w-full opacity-90 hover:opacity-100 transition-all duration-300">
        
        {/* Background Sparkles */}
        <Sparkles
          color={theme === "dark" ? "#8350e8" : "#6fbee9"}
          density={800}
          speed={0.6}
          opacity={0.3}
          className="absolute inset-0 pointer-events-none"
        />

        <div className="relative z-10 space-y-12">
          <div className="text-center space-y-4">
            <p className="text-sm font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              Trusted across sectors
            </p>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
              Trusted by leading organizations.
            </h2>
          </div>

          {/* Infinite Slider Implementation */}
          <div className="relative h-24 w-full">
            <InfiniteSlider duration={40} gap={60} className="flex items-center">
              {clientLogos.map((logo) => (
                // <div key={logo.id} className="flex items-center justify-center grayscale w-[160px] opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <div key={logo.id} className="flex items-center justify-center w-[160px] opacity-100 hover:opacity-100 transition-all duration-300">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={80}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </InfiniteSlider>

            {/* Edge Blurring */}
            <ProgressiveBlur
              className="pointer-events-none absolute top-0 left-0 h-full w-32 z-20"
              direction="left"
              blurIntensity={1.5}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute top-0 right-0 h-full w-32 z-20"
              direction="right"
              blurIntensity={1.5}
            />
          </div>
        </div>
      </div>
    </section>
  )
}