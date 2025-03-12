"use client"

import { motion } from 'framer-motion';
import Link from "next/link";

const IntroLink = () => {
    return (
        <Link href={"https://eshopjs.com"}>
            <motion.button
                whileTap={{scale: 0.9}}
                className={"bg-slate-800 w-64 relative rounded-xl px-5 py-5 text-base overflow-hidden group hover:bg-gradient-to-r hover:from-slate-800 hover:to-slate-700 transition-all ease-out duration-300"}>
                <span className={"absolute right-0 w-8 h-32 -mt-12 transition-all duration-500 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"}/>
                <span className={"text-white font-bold"}>Check out my online store!</span>
            </motion.button>
        </Link>
    );
};

export default IntroLink;