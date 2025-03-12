// "use client"
//
// import * as motion from "motion/react-client"
// import Image from "next/image";
// import headshot from '@/public/images/headshot.jpeg';
// import React, {useEffect} from "react";
// import {useAnimation} from "framer-motion";
//
// const animationConfig = {
//     scale: [1, .75, 1.15, .75, 1,],
//     borderRadius: ["50%", "15%", "50%", "15%", "50%"],
//     transition: {
//         duration: 1.25,
//         ease: "easeInOut",
//         times: [0, 0.2, 0.5, 0.8, 1],
//     },
// }
//
// export default function AboutHeadshot() {
//     const controls = useAnimation();
//
//     const startAnimation = () => {
//         controls.start(animationConfig)
//     };
//
//     useEffect(() => {
//         startAnimation();
//     }, [controls]);
//
//     return (
//         <motion.div
//             animate={controls}
//             style={box}
//         >
//             <Image
//                 priority
//                 className={"object-cover w-full h-full block cursor-pointer opacity-90 hover:opacity-100 transition-opacity duration-300"}
//                 width={300}
//                 height={300}
//                 src={headshot}
//                 alt="headshot"
//                 onClick={startAnimation}
//             />
//         </motion.div>
//     )
// }
//
// /**
//  * ==============   Styles   ================
//  */
//
// const box: React.CSSProperties = {
//     width: 300,
//     height: 300,
//     borderRadius: 300,
//     overflow: "hidden", // Clip the image to the animated border-radius
//     position: "relative", // Ensure proper positioning context for the child
// }