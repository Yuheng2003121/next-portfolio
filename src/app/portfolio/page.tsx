"use client"
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Slack Clone",
    desc: "Developed a full-stack Slack clone enabling real-time messaging across public channels and private conversations. Implemented a responsive UI with a custom component library, user authentication, and live online status indicators. The application facilitates seamless team coordination through instant, WebSocket-powered communication, showcasing advanced full-stack development capabilities.",
    img: "https://res.cloudinary.com/dzyj2w1s5/image/upload/v1762667854/slack-clone_lkof2y.png",
    link: "https://yuheng.website",
  },
  // {
  //   id: 2,
  //   color: "from-blue-300 to-violet-300",
  //   title: "Next.js Medium Blog",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  //   img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  //   link: "https://lama.dev",
  // },
  // {
  //   id: 3,
  //   color: "from-violet-300 to-purple-300",
  //   title: "Vanilla Book App",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  //   img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  //   link: "https://lama.dev",
  // },
  // {
  //   id: 4,
  //   color: "from-purple-300 to-red-300",
  //   title: "Spotify Music App",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   link: "https://lama.dev",
  // },
];
export default function Page() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-400vw"]); //将垂直滚动进度映射为水平位移(x), 当用户滚动到底部时(progress=1)，元素会向左移动400vw(4个屏幕宽度)
  // const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"])

  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="h-full"
    >
      <div className="h-[600vh]" ref={ref}>
        <div className=" h-[calc(100vh-6rem)] flex items-center justify-center text-6xl">
          My works
        </div>
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div style={{ x: x }} className="flex w-fit">
            <div
              className={` w-screen h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300`}
            />
            {items.map((item) => (
              <div
                className={` w-screen h-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-6 text-white items-center">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt={item.title} fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="ml-auto ">
                    <button className="cursor-pointer p-2 md:text-md lg:text-lg lg:p-4 bg-white text-gray-600 font-semibold rounded-lg hover:bg-white/60">
                      See demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-screen h-screen flex flex-col gap-16 justify-center items-center">
        <h1 className="text-3xl md:text-8xl">Do You have a project ?</h1>
        <div className="relative">
          <motion.svg
            viewBox="0 0 300 300"
            className="size-46 md:size-[400px]"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Devloper and UI designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/"
            className="size-16 md:size-28 rounded-full absolute inset-0 m-auto bg-black text-white flex items-center justify-center"
          >
            Hire me
          </Link>
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <Link
              href="/"
              className="size-16 md:size-28 rounded-full  bg-black  text-white flex items-center justify-center"
            >
              Hire me
            </Link>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
}
