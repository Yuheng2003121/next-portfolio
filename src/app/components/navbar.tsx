"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import NavLink from "./navLink";
import {motion} from 'framer-motion'
import { div, li } from "framer-motion/client";

const links = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/portfolio",
    title: "Portfolio",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);


   const topVariants = {
     closed: {
      rotate: 0
     },
     open: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255,255)"
     }

   }

   const centerVariants = {
     closed: {
       opacity: 1,
     },
     open: {
       opacity: 0,
     },
   };

   const bottomVariants = {
     closed: {
       rotate: 0,
     },
     open: {
       rotate: -45,
       backgroundColor: "rgb(255,255,255,255)",
     },
   };

   const listVariants = {
     closed: { 
      x:"100vw"
     },
     open: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      }
     }
   }

   const listItemVariants = {
    closed: {
      x:-10,
      opacity: 0,
    }, 
    open: { 
      x:0,
      opacity:1,
    }
   }



  return (
    <div
      className="h-full flex items-center justify-between   "
      onClick={(e) => {
        e.stopPropagation();
        setOpen(false);
      }}
    >
      {/* Links */}
      <div className="hidden md:flex gap-4 flex-1">
        {links.map((link) => (
          <NavLink key={link.title} href={link.url}>
            {link.title}
          </NavLink>
        ))}
      </div>

      {/* Logo */}
      <div className="md:hidden lg:flex flex-1 justify-center">
        <Link
          href={"/"}
          className="text-sm bg-black rounded-md px-1 py-3 font-semibold"
        >
          <span className="text-white mr-1">Yuheng</span>
          <span className="px-2 py-2 bg-white rounded-md">.dev</span>
        </Link>
      </div>

      {/* Social Icons */}
      <div className="hidden md:flex gap-4 flex-1 justify-end">
        <Link href="#" className="hover:opacity-80 transition-opacity">
          <Image
            src="/github.png"
            alt="GitHub"
            width={24}
            height={24}
            className="object-contain"
          />
        </Link>

        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/dribbble.png"
            alt="Dribbble"
            width={24}
            height={24}
            className="object-contain"
          />
        </Link>

        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/instagram.png"
            alt="Instagram"
            width={24}
            height={24}
            className="object-contain"
          />
        </Link>

        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/facebook.png"
            alt="Facebook"
            width={24}
            height={24}
            className="object-contain"
          />
        </Link>

        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/pinterest.png"
            alt="Pinterest"
            width={24}
            height={24}
            className="object-contain"
          />
        </Link>

        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/linkedin.png"
            alt="LinkedIn"
            width={24}
            height={24}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Menu bar */}
      <div className="md:hidden">
        <button
          className="absolute space-y-1.5 cursor-pointer z-50"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "open" : "closed"}
            className={`w-10 h-1 bg-black rounded-md origin-left`}
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "open" : "closed"}
            className={`w-10 h-1 bg-black rounded-md origin-left`}
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "open" : "closed"}
            className={`w-10 h-1 bg-black rounded-md origin-left`}
          ></motion.div>
        </button>

        {/* Menu list */}
        {open && (
          <motion.div 
            variants={listVariants}
            initial="closed"
            animate="open"
            className="absolute z-10 top-0 left-0 bottom-0 right-0 bg-black text-white flex flex-col gap-8 justify-center items-center">
            {links.map((link) => (
              <motion.div 
                variants={listItemVariants}
                key={link.title}>
                <Link href={link.url}  className="text-4xl">
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
