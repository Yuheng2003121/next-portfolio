"use client";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="max-w-screen h-screen  bg-gradient-to-b from-blue-100 to-red-100 flex flex-col"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }} // 新页面：从 140vh → 0vh（收起）
          exit={{ height: "140vh" }} // 旧页面：从 0vh → 140vh（盖下）
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        <motion.div
          className="fixed inset-0 text-white text-8xl cursor-default m-auto w-fit h-fit z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          // exit={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.slice(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bottom-0 bg-black rounded-t-[100px] z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh" }}
          transition={{ delay: 0.5, ease: "easeOut" }}
        />
        {/* 头部 */}
        <div className="h-24 shrink-0 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
          <Navbar />
        </div>

        {/* 主要内容 */}
        <div className="flex-1 ">
          {children}
        </div>
      </div>
    </AnimatePresence>
  );
}
