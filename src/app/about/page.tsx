"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import { CircleArrowDown } from "lucide-react";
import Brain from "../components/brain";

const keywords = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "SCSS",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "Node.js",
  "Express.js",
  "GraphQL",
  "Apollo",
  "Redux",
  "Framer Motion",
  "Three.js",
  "WebGL",
  "Webpack",
];
export default function Page() {
  const {scrollYProgress} = useScroll();
  const skillRef = useRef(null);
  const isSkillInView = useInView(skillRef)

  const experienceRef = useRef(null);
  const isExperienceInView = useInView(experienceRef, {once: true})
  
  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="h-full"
    >
      <div className="lg:flex ">
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 lg:pr-0 xl:gap-64 w-2/3 xl:w-1/2">
          {/* biography container */}
          <div className="flex flex-col gap-12 ">
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              pleasant mouth mile giant younger aware model thee produce offer
              dress without plain high cost pond rice harbor quite continued
              frog mix headed shut
            </p>
            <span className="italic">
              pleasant mouth mile giant younger aware model thee produce offer{" "}
            </span>
            {/* signature */}
            <div className="ml-auto">
              <svg
                width="185"
                height="77"
                viewBox="0 0 7184 2388"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 299C5 325.4 57.8 444.6 165.85 632.65C215.296 718.706 277.2 771.2 345.7 816.6C414.2 862 493.4 895 577.1 916.95C660.8 938.9 746.6 948.8 832.05 942.35C1002.1 929.514 1147.7 842.8 1267.45 739.8C1390.71 633.782 1444.8 479.7 1464.9 381.3C1469.94 356.648 1378.8 425.2 1269.2 526.55C1207.5 583.601 1126.6 644.4 986.8 717.95C847 791.5 649 874 583.3 893.4C444.218 934.468 804.7 789 854.65 797.25C893.136 803.607 895 905 880.15 1075.95C870.977 1181.55 835.6 1322.8 805.45 1437.15C752.995 1636.1 708.4 1745.4 711.6 1773.85C712.719 1783.8 747.8 1752.8 982.5 1452.15C1217.2 1151.5 1659.4 574 1890.5 269.9C2121.6 -34.2 2128.2 -47.4 2093.65 86.05C2059.1 219.5 1983.2 500 1934.2 670.9C1885.2 841.8 1865.4 894.6 1903.05 864.05C1940.7 833.5 2036.4 718 2108.8 637.05C2181.2 556.1 2227.4 513.2 2267.7 479.55C2308 445.9 2341 422.8 2283.75 554.45C2226.5 686.1 2078 973.2 2001.5 1127.7C1925 1282.2 1925 1295.4 1934.9 1302.2C1960.01 1319.45 2041.1 1299.1 2182.2 1257.7C2269.18 1232.18 2379.4 1173.4 2498.25 1103.3C2617.1 1033.2 2739.2 947.4 2858.2 840.5C2977.2 733.6 3089.4 608.2 3170.3 495.75C3312.73 297.774 3341.7 152.7 3328.45 89.45C3322.56 61.3322 3302 46 3281.95 37.5C3261.9 29 3238.8 29 3215.35 35.6C3166.66 49.305 3102.1 128.4 3010.7 279.45C2957.02 368.165 2909.4 493.2 2873.95 613.85C2838.5 734.5 2822 850 2815.15 942.5C2803.44 1100.61 2828.2 1198.7 2854.8 1247C2865.86 1267.08 2881.4 1272.2 2901.4 1252.5C2921.4 1232.8 2947.8 1186.6 2999.35 1111.65C3050.9 1036.7 3126.8 934.4 3212.1 838.8C3297.4 743.2 3389.8 657.4 3465.45 600C3541.1 542.6 3597.2 516.2 3640.95 510.85C3714.69 501.832 3794.5 687.5 3867.85 902.6C3890.68 969.556 3888.4 949.4 3886.7 879.8C3882.1 691.449 3845.4 532.7 3775.5 476.05C3747.14 453.069 3725.4 452.4 3705.3 458.95C3661.49 473.227 3635.1 601.3 3634.95 779.4C3634.89 855.824 3674.4 901.4 3732.6 935.1C3790.8 968.8 3876.6 988.6 3971.95 993.85C4067.3 999.1 4169.6 989.2 4261.9 964.3C4438.8 916.576 4557.9 809.5 4626.2 704.8C4659.4 653.908 4658.2 590.2 4646.75 541.45C4635.3 492.7 4605.6 456.4 4583.7 436.05C4561.8 415.7 4548.6 412.4 4531.9 417.3C4492.81 428.771 4458.5 508.4 4433.5 633.05C4406.99 765.236 4461.3 898.4 4536.1 991.7C4568.19 1031.72 4614.2 1032.2 4659.35 1024.05C4704.5 1015.9 4754 992.8 4824.05 909.95C4894.1 827.1 4983.2 685.2 5039 589C5119.89 449.539 5135 372.6 5131.7 326C5130.25 305.583 5121.8 292.6 5106.85 285.8C5091.9 279 5068.8 279 5042.05 293.85C4979.18 328.753 4945.1 402 4943.3 461.9C4942.46 489.98 4977.8 508.6 5083.8 500.65C5189.8 492.7 5374.6 456.4 5512.7 417.9C5650.8 379.4 5736.6 339.8 5784.1 312.8C5831.6 285.8 5838.2 272.6 5813.55 265.8C5735.43 244.25 5595.8 295.3 5439.5 383.3C5358.61 428.843 5289.8 501 5140.2 704.95C4990.6 908.9 4766.2 1248.8 4576.35 1504.75C4386.5 1760.7 4238 1922.4 4085.6 2055.2C3933.2 2188 3781.4 2287 3680.1 2338C3578.8 2389 3532.6 2389 3507.15 2372.5C3481.7 2356 3478.4 2323 3489.9 2284.55C3515.62 2198.57 3597.9 2112.8 3712.4 2004.85C3781.2 1939.99 3883 1867.2 4249.15 1674.65C4615.3 1482.1 5245.6 1175.2 5614.85 989.05C5984.1 802.9 6073.2 746.8 6130.65 701.4C6218.84 631.707 6238.3 572.5 6241.65 542.55C6248.72 479.346 6244.9 395.9 6259.9 367.5C6263.34 360.996 6265 375.4 6212.2 504.3C6159.4 633.2 6053.8 877.4 5999.4 1027.95C5945 1178.5 5945 1228 5951.6 1255.15C5958.2 1282.3 5971.4 1285.6 5998 1284C6024.6 1282.4 6064.2 1275.8 6251.25 1199.8C6438.3 1123.8 6771.6 978.6 6956.5 892.25C7141.4 805.9 7167.8 782.8 7176.45 764.3C7189.89 735.562 7125.4 692.6 7061.85 616.05C7014.53 559.051 7048.3 482.5 7048.35 493.8C7048.47 521.789 7035.2 594.2 6998.75 715.75C6962.3 837.3 6899.6 1005.6 6860.7 1122C6821.8 1238.4 6808.6 1297.8 6803.45 1306.95C6798.3 1316.1 6801.6 1273.2 6856.1 1076.2C6910.6 879.2 7016.2 529.4 7070.6 336C7125 142.6 7125 116.2 7120.05 110.85C7085.1 185.2 7061.7 288.9 7056.7 308.85C7055 318.9 7055 328.8 7065 339"
                  stroke="black"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* scroll down */}
            <motion.div
              className="w-fit"
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <CircleArrowDown strokeWidth={1} className="size-10" />
            </motion.div>
          </div>

          {/* skills container */}
          <motion.div
            initial={{ x: "-300px" }}
            animate={isSkillInView ? { x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-12 "
            ref={skillRef}
          >
            {/* skill title */}
            <h1 className="font-bold text-2xl">SKILLS</h1>
            {/* skill list */}
            <div className="flex gap-4 flex-wrap">
              {keywords.map((item) => (
                <div
                  key={item}
                  className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                >
                  {item}
                </div>
              ))}
            </div>
            {/* scroll down */}
            <motion.div
              className="w-fit"
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <CircleArrowDown strokeWidth={1} className="size-10" />
            </motion.div>
          </motion.div>

          {/* experience container */}
          <motion.div
            className="flex flex-col gap-12 "
            ref={experienceRef}
            initial={{ x: "-300px" }}
            animate={isExperienceInView ? { x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {/* experience title */}
            <h1 className="font-bold text-2xl">EXPERIENCE</h1>
            {/* experience list */}
            <div>
              {/* list item */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3 space-y-3">
                  {/* job title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior javascript developer
                  </div>
                  {/* job description */}
                  <div className="p-2 text-sm italic">
                    My current employment. Way better than the position before!
                  </div>
                  {/* job date */}
                  <div className="p-2 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* job company */}
                  <span className="p-2 rounded text-sm font-bold">apple</span>
                </div>

                {/* center */}
                <div className="w-1/6 flex justify-center">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* line circle */}
                    <div className="size-5 rounded-full absolute -left-2 ring-4 ring-red-400 bg-white"></div>
                  </div>
                </div>

                {/* right */}
                <div className="w-1/3"></div>
              </div>

              {/* list item */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3 "></div>

                {/* center */}
                <div className="w-1/6 flex justify-center">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* line circle */}
                    <div className="size-5 rounded-full absolute -left-2 ring-4 ring-red-400 bg-white"></div>
                  </div>
                </div>

                {/* right */}
                <div className="w-1/3 space-y-3">
                  {/* job title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior javascript developer
                  </div>
                  {/* job description */}
                  <div className="p-2 text-sm italic">
                    My current employment. Way better than the position before!
                  </div>
                  {/* job date */}
                  <div className="p-2 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* job company */}
                  <span className="p-2 rounded text-sm font-bold">apple</span>
                </div>
              </div>

              {/* list item */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3 space-y-3">
                  {/* job title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior javascript developer
                  </div>
                  {/* job description */}
                  <div className="p-2 text-sm italic">
                    My current employment. Way better than the position before!
                  </div>
                  {/* job date */}
                  <div className="p-2 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* job company */}
                  <span className="p-2 rounded text-sm font-bold">apple</span>
                </div>

                {/* center */}
                <div className="w-1/6 flex justify-center">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* line circle */}
                    <div className="size-5 rounded-full absolute -left-2 ring-4 ring-red-400 bg-white"></div>
                  </div>
                </div>

                {/* right */}
                <div className="w-1/3"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* svg container */}
        <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 h-screen z-30 ">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
}
