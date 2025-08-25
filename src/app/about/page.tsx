"use client";
import Brain from "@/components/Brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { skillsList, YEARS_OF_EXPERIENCE } from "../../data/data";
import Link from "next/link";

const AboutPage = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef(null);
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div
        className="h-full overflow-x-hidden overflow-y-scroll lg:flex"
        ref={containerRef}
      >
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image src="/biography.jpg" alt="" width={1600} height={1200} />
            {/* Resume */}
            <Link
              href="/HariHaran_Resume.pdf"
              target="_blank"
              locale={false}
              rel="noopener noreferrer"
              download
            >
              <p className="no-underline hover:underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                Download Resume
              </p>
            </Link>
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">More About Me</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-base">
              I&apos;m Hari Haran, a passionate React.js Developer with{" "}
              {YEARS_OF_EXPERIENCE}+ years of experience delivering scalable,
              user-focused web applications across both nimble startups and
              large-scale enterprises like Kroger. This blend of environments
              has shaped my ability to adapt quickly, write clean and
              maintainable code, and collaborate effectively across diverse
              teams.
              <br />
              <br />
              My technical toolkit includes React, TypeScript, Next.js, and
              modern UI frameworks, with a strong focus on performance
              optimization, CI/CD automation, and analytics integration. Whether
              building from scratch or refactoring legacy systems, I bring a
              proactive mindset and a commitment to delivering measurable
              impact.
              <br />
              <br />
              I’m excited about the opportunity to contribute to your team and
              help drive meaningful digital experiences.
              <br />
              <br />
              Committed to lifelong learning, constantly seek opportunities to
              enhance my skills and knowledge, ensuring I remain at the
              forefront of technology trends in software development.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic text-sm">
              I am driven by passion, fueled by innovation, and guided by
              excellence. My mission is to make a lasting impact through my work
              in software development.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <Image src="/sign.svg" alt="" width={200} height={24} />
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              {skillsList.map((skill, index) => (
                <div
                  className="rounded p-3 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                  key={skill.title + index}
                >
                  {skill.title}
                </div>
              ))}
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Software Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I spearheaded React-based application development,
                    leveraging advanced skills.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    03/2021 - 01/2023
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-3 rounded bg-white text-sm font-semibold w-fit">
                    Kycres Technologies
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Software Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    02/2023 - 04/2024
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-3 rounded bg-white text-sm font-semibold w-fit">
                    Phantom Solutions
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    UI Consultant
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Led a front-end modernization project in Next.js, reducing
                    technical debt and accelerating delivery timelines.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    06/2024 - 08/2024
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-3 rounded bg-white text-sm font-semibold w-fit">
                    ATHRU Technologies Private Limited
                  </div>
                </div>

                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Software Development Engineer 2
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Designing scalable React + TypeScript applications enhancing
                    performance, maintainability, and user experience.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    08/2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-3 rounded bg-white text-sm font-semibold w-fit">
                    ZopSmart (Kroger)
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
