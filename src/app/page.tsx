"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#04040A] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,229,255,0.20),_transparent_45%)]" />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(0,229,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.08) 1px, transparent 1px)", backgroundSize: "42px 42px" }} />

      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: ["0%", "30%", "60%", "85%", "100%"] }}
        transition={{ duration: 2.2, delay: 0.5, times: [0, 0.3, 0.6, 0.85, 1], ease: "easeInOut" }}
        className="absolute inset-y-0 left-0 rounded-full"
        style={{ background: "#00E5FF", boxShadow: "0 0 12px #00E5FF" }}
      />

      <header className="absolute left-6 top-6 z-20 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-md border border-[#00E5FF]/40 bg-[#00E5FF]/10 text-lg font-bold text-[#00E5FF] shadow-[0_0_25px_rgba(0,229,255,0.25)]">
          U
        </div>
        <div className="flex flex-col items-start gap-0.5">
          <h1 className="text-lg font-bold tracking-[0.38em] text-[#00E5FF] font-mono md:text-xl">ULS APEX</h1>
          <span className="text-[9px] font-mono tracking-[0.2em] uppercase text-[#00E5FF]/80 md:text-[10px]">
            BY UNUSUAL LAB STUDIOS LLC
          </span>
        </div>
      </header>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute right-6 top-6 z-20 flex items-center gap-3"
      >
        <span className="rounded border border-[#00E5FF]/40 bg-[#00E5FF]/10 px-2 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-[#00E5FF]">
          GRID ACTIVE
        </span>
      </motion.div>

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 text-center">
        <div className="max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-5 text-[10px] font-mono uppercase tracking-[0.5em] text-[#00E5FF] opacity-90"
          >
            GEOSPATIAL TELEMETRY GRID
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl font-black uppercase leading-none tracking-[0.18em] text-white md:text-7xl"
          >
            ULS APEX
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-6 flex justify-center"
          >
            <div className="relative h-px w-[28rem] max-w-full overflow-hidden bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1.8, delay: 1.2, ease: "easeInOut" }}
                className="h-full w-1/3 bg-[#00E5FF] shadow-[0_0_18px_rgba(0,229,255,0.8)]"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-6 text-xs font-mono uppercase tracking-[0.42em] text-white/70 md:text-sm"
          >
            REAL-TIME GLOBAL INTELLIGENCE GRID
          </motion.p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="rounded-full border border-[#00E5FF]/30 bg-black/30 px-5 py-2 font-mono text-[10px] uppercase tracking-[0.28em] text-[#00E5FF] backdrop-blur-sm"
        >
          UNUSUAL LAB STUDIOS LLC
        </motion.div>
      </div>
    </main>
  );
}
