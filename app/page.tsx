'use client';

import { motion } from 'framer-motion';
import {  Brain,  Code,  Database,  FlaskConical,  Github,  Globe,  MoveUpRight,} from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white selection:bg-cyan-500/30 p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-4 grid-rows-4 gap-4 h-full md:h-[800px]">
        
        {/* 1. メインヒーローエリア（自己紹介） */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 md:col-span-2 row-span-2 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 flex flex-col justify-between hover:border-cyan-500/50 transition-colors group relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-cyan-500/20 transition-all duration-500" />
          
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-medium mb-4">
              Available for Research & Dev
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
              Hello, I'm <br />
              <span className="text-white">Gemini User.</span>
            </h1>
            <p className="mt-4 text-neutral-400 text-sm leading-relaxed max-w-sm">
              Exploring the intersection of Pharmacology, Machine Learning, and Web Development.
            </p>
          </div>
          <div className="flex gap-4">
             <button className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-cyan-50 text-sm transition-colors">
               Contact Me <MoveUpRight size={16} />
             </button>
          </div>
        </motion.div>

        {/* 2. マップ/ロケーション（視覚的アクセント） */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="col-span-1 md:col-span-1 row-span-1 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-6 flex flex-col justify-center items-center text-center relative overflow-hidden group"
        >
          <Globe className="text-white/80 w-12 h-12 mb-2 group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-white font-bold text-lg">Based in</h3>
          <p className="text-white/80 text-sm">Tokyo, Japan</p>
        </motion.div>

        {/* 3. Social Link (GitHub) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="col-span-1 row-span-1 bg-neutral-900/50 border border-neutral-800 rounded-3xl flex flex-col items-center justify-center p-4 hover:bg-neutral-800 transition-colors cursor-pointer group"
        >
          <Github size={40} className="text-white group-hover:text-cyan-400 transition-colors" />
        </motion.div>

        {/* 4. Research Interest (Pharmacology) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="col-span-1 row-span-2 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 flex flex-col hover:border-emerald-500/50 transition-colors group"
        >
          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4 text-emerald-500">
            <FlaskConical size={20} />
          </div>
          <h3 className="text-xl font-bold mb-2">Research</h3>
          <p className="text-neutral-400 text-sm flex-grow">
            Focusing on drug membrane permeability (Peff) prediction and molecular simulation.
          </p>
          <div className="h-1 w-full bg-neutral-800 rounded-full mt-4 overflow-hidden">
            <div className="h-full bg-emerald-500 w-3/4" />
          </div>
        </motion.div>

        {/* 5. Tech Stack (Data Analysis) */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.4 }}
           className="col-span-1 md:col-span-2 row-span-1 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 flex items-center justify-between hover:border-purple-500/50 transition-colors"
        >
           <div>
             <h3 className="text-lg font-bold text-white">Data Analysis</h3>
             <p className="text-neutral-400 text-xs">GraphPad Prism & Python</p>
           </div>
           <Database className="text-purple-500" size={32} />
        </motion.div>

        {/* 6. Creative/Puzzle Interest */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.5 }}
           className="col-span-1 row-span-1 bg-neutral-100 text-black rounded-3xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform"
        >
           <Brain size={32} className="text-black" />
           <p className="font-bold text-sm">Lateral Thinking</p>
        </motion.div>

         {/* 7. Web Dev Skills */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.6 }}
           className="col-span-1 md:col-span-2 row-span-1 bg-neutral-900/50 border border-neutral-800 rounded-3xl p-6 flex items-center gap-4 hover:border-orange-500/50 transition-colors"
        >
           <div className="p-3 bg-orange-500/10 rounded-xl text-orange-500">
             <Code size={24} />
           </div>
           <div>
             <h3 className="font-bold text-white">Web Engineering</h3>
             <p className="text-neutral-400 text-xs">Next.js, Tailwind CSS, HTML5</p>
           </div>
        </motion.div>

      </div>
    </main>
  );
}
