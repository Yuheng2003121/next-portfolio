"use client";

import React, { ChangeEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const text = "Say Hello";
// https://dashboard.emailjs.com/admin/

export default function Page() {
  const [sucess, setSucess] = useState(false);
  const myEmail = "lyuheng023@gmail.com";
  const [error, setError] =  useState(false);
  const [email, setEmail] = useState("");

   const form = useRef<HTMLFormElement>(null);

   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     setError(false);
     setSucess(false);

     emailjs
       .sendForm(
         process.env.NEXT_PUBLIC_SERVICE_ID!,
         process.env.NEXT_PUBLIC_TEMPLATE_ID!,
         form.current!,
         {
           publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
         }
       )
       .then(
         () => {
           console.log("SUCCESS!");
           setSucess(true);
           form.current!.reset();
         },
         (error) => {
           console.log("FAILED...", error);
           setError(true);
         }
       );
   };

  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="h-full"
    >
      <div className="h-full flex flex-col lg:flex-row page-padding">
        {/* text-container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center">
          <div className="text-6xl">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>

        {/* form container */}
        <form
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-16"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex flex-col gap-2">
            <span>Dear Yuheng</span>

            <textarea
              rows={5}
              placeholder="Write your message here..."
              className="bg-transparent border-b-2 border-black outline-none resize-none text-md"
              name="user_message"
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <span>My mail address is:</span>
            <input
              name="user_email"
              type="text"
              className="bg-transparent border-b-2 border-black outline-none"
              value={myEmail}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <span>Regards</span>

          <button className="bg-purple-200 rounded-lg font-semibold py-3 text-gray-600 cursor-pointer">
            Send
          </button>

          {sucess && (
            <span className="text-green-500 font-semibold">
              Your message has been sent sucessfully
            </span>
          )}

          {error && (
            <span className="text-red-500 font-semibold">
              There was an error sending your message
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
}
