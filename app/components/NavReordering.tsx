"use client"

import gmailSvg from "@/icons/gmail.svg";
import linkedinSvg from "@/icons/linkedin.svg";
import githubSvg from "@/icons/github.svg";
import Image from "next/image";
import * as motion from "motion/react-client";
import React, {JSX, useEffect, useState} from "react";

interface SpringTransition {
    type: "spring";
    damping: number;
    stiffness: number;
}

export default function NavReordering(): JSX.Element {

    const initialOrder: string[][] = [
        ["rgb(38,138,192)", "gmail"],
        ["rgb(108,47,229)", "linkedin"],
        ["#9911ff", "github"],
    ];

    const [order, setOrder] = useState<string[][]>(initialOrder)

    useEffect(() => {
        const timeout = setTimeout(() => setOrder(shuffle(order)), 2000)
        return () => clearTimeout(timeout)
    }, [order])

    return (
        // <div className={"z-20 fixed pb-4 bottom-0 left-0 right-0 mx-auto w-min md:top-0 md:bottom-auto md:left-auto md:pr-8 md:pt-8"}>
        // <div className={"z-20"}>
            <ul style={container}>
                {order.map(([backgroundColor, iconName]) => (
                    <motion.li
                        key={backgroundColor}
                        layout
                        transition={spring}
                        style={{backgroundColor}}
                        // style={{ ...item, backgroundColor }}
                        className={"w-14 h-14 flex items-center rounded-xl justify-center"}
                    >
                        {
                            iconName === "gmail" ? (
                                <a href={"mailto:oscar.a.castro818@gmail.com"}>
                                    <Image
                                        className={"invert"}
                                        src={gmailSvg}
                                        width={35}
                                        height={35}
                                        alt={"gmail"}
                                    />
                                </a>

                            ) : iconName === "linkedin" ? (
                                <a href={"https://www.linkedin.com/in/oscar-ct/"}>
                                    <Image
                                        className={"invert"}
                                        src={linkedinSvg}
                                        width={35}
                                        height={35}
                                        alt={"linkedin"}
                                    />
                                </a>
                            ) : (
                                <a href={"https://github.com/oscar-ct"}>
                                    <Image
                                        className={"invert"}
                                        src={githubSvg}
                                        width={35}
                                        height={35}
                                        alt={"github"}
                                    />
                                </a>
                            )
                        }

                    </motion.li>
                ))}
            </ul>
        // </div>
    )
}

/**
 * ==============   Utils   ================
 */
function shuffle([...array]: string[][]): string[][] {
    return array.sort(() => Math.random() - 0.5)
}

/**
 * ==============   Styles   ================
 */
const spring: SpringTransition = {
    type: "spring",
    damping: 20,
    stiffness: 300,
}

const container: React.CSSProperties = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    gap: 25,
    width: 250,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
}

// const item: React.CSSProperties = {
//     width: 75,
//     height: 75,
//     borderRadius: "10px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
// }