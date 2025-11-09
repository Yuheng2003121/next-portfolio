"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
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
            From Idea to Deployment: Full-Stack Solutions
          </h1>
          <p>
            {"I'm"} a developer passionate about crafting full-stack digital
            experiences with modern technologies. I specialize in transforming
            ideas into functional and elegant applications, using Next.js,
            React, TypeScript, and Spring Boot. My strength lies in owning the
            entire development lifecycle — from prototyping in Figma to building
            robust backends and deploying scalable solutions.
          </p>
          <div className="flex gap-4">
            <Link href="/portfolio">
              <button className="px-3 py-3 bg-black rounded-lg text-white cursor-pointer">
                view My Work
              </button>
            </Link>

            <Link href="/contact">
              <button className="px-3 py-3 bg-transparent border-1 border-black rounded-lg cursor-pointer">
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
