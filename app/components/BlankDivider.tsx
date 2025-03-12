// "use client";
//
// import {useRef} from "react";
// import {useScroll, useTransform, motion} from "framer-motion";
// import Image from "next/image";
// import spaceBg from "@/public/images/daniel-olah-HNkgPFBShSw-unsplash.jpg"
//
//
// const BlankDivider = () => {
//     const container = useRef<HTMLInputElement | null>(null);
//     const { scrollYProgress } = useScroll({
//         target: container,
//         offset: ["start end", 'end start'],
//     })
//     const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
//
//     return (
//         <>
//             <div
//                 ref={container}
//                 className='relative flex items-center justify-center py-28 overflow-hidden'
//                 style={{clipPath: "polygon(50% 0, 50% 0%, 100% 100%, 0 100%)"}}
//                 // style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
//
//
//             >
//                 <div className='fixed top-[-10%] left-0 h-[125%] w-full'>
//                     <motion.div style={{y}} className='relative w-full h-full'>
//                         <Image src={spaceBg} fill alt="space" className={"object-cover"}/>
//                     </motion.div>
//                 </div>
//             </div>
//         </>
//
//     )
// };
//
// export default BlankDivider;