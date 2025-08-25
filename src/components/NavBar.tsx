"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  // { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
      transition: {
        delay: 0.1,
      },
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
      transition: {
        delay: 0.3,
      },
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
      transition: {
        delay: 0.1,
      },
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
      transition: {
        delay: 0.5,
      },
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl  ">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link, index) => (
          <NavLink link={link} key={index} />
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Hari</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>

      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/3 justify-center">
        <Link href="https://github.com/dynamic-hari" target="_blank">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>

        <Link href="https://www.linkedin.com/in/hari-haran-ks/" target="_blank">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>

        <Link
          href="https://www.instagram.com/hari_the_bad_boy?igsh=MXQ3YTdlc3cwa25saw=="
          target="_blank"
        >
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
      </div>

      {/* Responsive Menu */}
      <div className="md:hidden">
        {/* Menu Button */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={isOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={isOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={isOpen ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>

        {/* Menu List */}
        {isOpen && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link, index) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
