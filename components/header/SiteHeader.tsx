"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Sparkles, MessageSquare, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Define your navigation items here
const navItems = [
  { name: "Home", url: "#", icon: Home },
  { name: "Features", url: "#features", icon: Sparkles },
  { name: "Contact", url: "#contact", icon: MessageSquare },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(navItems[0].name);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .glass-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(15px) brightness(1.1);
          -webkit-backdrop-filter: blur(15px) brightness(1.1);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        /* Hide mobile elements on desktop and vice versa */
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
        
        @media (min-width: 769px) {
          .mobile-toggle { display: none !important; }
        }

        .mobile-menu-panel {
          position: fixed;
          top: 0;
          right: -100%;
          width: 300px;
          height: 100%;
          background: white;
          z-index: 1001;
          transition: right 0.3s ease;
          box-shadow: -10px 0 30px rgba(0,0,0,0.1);
        }
        .mobile-menu-panel.open { right: 0; }
        
        .mobile-menu-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.2);
          display: none;
          z-index: 1000;
        }
        .mobile-menu-backdrop.open { display: block; }
      `}} />

      <header className="glass-header h-20 flex items-center justify-between px-8">
        {/* Left: Brand */}
        <Link href="/" className="font-bold text-xl tracking-tighter">
          Bridge AI
        </Link>

        {/* Center: The Animated NavBar logic (Desktop) */}
        <nav className="desktop-nav flex items-center gap-2 bg-black/5 p-1 rounded-full border border-black/5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors rounded-full",
                  isActive ? "text-black" : "text-slate-500 hover:text-black"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-white shadow-sm rounded-full -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    {/* The Lamp Glow Effect */}
                    <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-8 h-[2px] bg-black rounded-full">
                      <div className="absolute w-12 h-4 bg-black/10 rounded-full blur-md -bottom-2 -left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link href="#contact" className="hidden md:block bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition">
            Book demo
          </Link>

          <button 
            className="mobile-toggle p-2" 
            onClick={() => setOpen(true)}
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={cn("mobile-menu-backdrop", open && "open")} onClick={() => setOpen(false)} />
      <aside className={cn("mobile-menu-panel", open && "open")}>
        <div className="flex items-center justify-between p-6 border-b">
          <span className="font-bold">Bridge AI</span>
          <button onClick={() => setOpen(false)}><X size={24} /></button>
        </div>
        <div className="flex flex-col gap-6 p-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link 
                key={item.name} 
                href={item.url} 
                className="flex items-center gap-4 text-xl font-semibold"
                onClick={() => { setActiveTab(item.name); setOpen(false); }}
              >
                <Icon size={20} />
                {item.name}
              </Link>
            );
          })}
          <Link href="#contact" className="bg-black text-white text-center py-4 rounded-2xl font-bold mt-4">
            Book demo
          </Link>
        </div>
      </aside>
    </>
  );
}