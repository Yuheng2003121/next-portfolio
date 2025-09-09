"use client"
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{y: "-100vh"}}
      animate={{y: 0}}
      transition={{duration: 1}}
      className="h-full"
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        {/* Image container */}
        <div className="flex-1 min-h-[300px] lg:w-1/2 relative">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        {/* Content container */}
        <div className="flex-1 lg:h-full lg:w-1/2 flex flex-col gap-8  justify-center">
          <h1 className="font-bold text-4xl">
            factor idea underline loss gentle written satellites directly
            situation would slipped shown crop vowel balance instead building
            milk pure anyway maybe neighbor lake heading
          </h1>
          <p>
            bent full duck put voyage apple my famous sing me merely outside
            combine cap ear trouble previous perfectly once than best writer
            important freeforth scene village previous taste mission slipped
            anywhere begun signal out dirt introduced noise slide cross evidence
            vowel average thank needs shells swim rocky
          </p>
          <div className="flex gap-4">
            <button className="px-3 py-3 bg-black rounded-lg text-white cursor-pointer">
              view My Work
            </button>
            <button className="px-3 py-3 bg-transparent border-1 border-black rounded-lg cursor-pointer">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
