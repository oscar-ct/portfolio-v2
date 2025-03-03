import Image from "next/image";
import javascriptSvg from "@/icons/javascript.svg";
import htmlSvg from "@/icons/html5.svg";
import cssSvg from "@/icons/css3.svg";
import reactSvg from "@/icons/react.svg";
import reduxSvg from "@/icons/redux.svg";
import jquerySvg from "@/icons/jquery.svg";
import tailwindSvg from "@/icons/tailwindcss.svg";
import bootstrapSvg from "@/icons/bootstrap.svg";
import javaSvg from "@/icons/java.svg";
import thymeleafSvg from "@/icons/thymeleaf.svg";
import springSvg from "@/icons/spring.svg";
import mysqlSvg from "@/icons/mysql.svg";
import expressSvg from "@/icons/express.svg";
import nodeSvg from "@/icons/nodedotjs.svg";
import mongodbSvg from "@/icons/mongodb.svg";
import mongooseSvg from "@/icons/mongoose.svg";
import firebaseSvg from "@/icons/firebase.svg";

const WhatIKnow = () => {
    return (
        <section id={"what-i-know"} className={"px-4 py-20 flex flex-col max-w-screen-2xl mx-auto lg:gap-6 lg:p-20 2xl:px-4"}>
                <div className={"flex flex-col gap-10"}>
                    <h1 className={"text-center text-4xl font-bold text-purple-500 lg:text-end"}>
                        What I Know
                    </h1>
                    <div className={"flex flex-col gap-10 border border-0 rounded-lg lg:flex-row"}>
                        <div className={"flex flex-col gap-6 lg:w-6/12"}>
                            <h2 className={"text-white text-2xl font-bold"}>
                                Front-End Development
                            </h2>
                            <div className={"flex flex-col gap-4 font-light"}>
                                <p className={"text-white"}>
                                    Using <span className={"font-bold text-purple-400"}>JavaScript</span> libraries such
                                    as <span className={"font-bold text-purple-400"}>React</span> and <span
                                    className={"font-bold text-purple-400"}>jQuery</span> has made frontend development
                                    extremely versatile. jQuery's DOM traversing/manipulating is fast, efficient, yet
                                    simple and React's vast hook library/support is extremely useful and powerful,
                                    paired with <span className={"font-bold text-purple-400"}>Redux Toolkit</span> or <span
                                    className={"font-bold text-purple-400"}>Context API</span> for
                                    global state handling allows me to provide users with fast and seamless experiences.
                                </p>
                                <p className={"text-white"}>
                                <span className={"font-bold text-purple-400"}>TailwindCSS</span> and <span
                                    className={"font-bold text-purple-400"}>Bootstrap</span> are more tools that I have
                                    taken full advantage of when designing an app. Learning both is tricky but the
                                    efficiency, simplicity, and customization are second to none.
                                </p>
                            </div>
                            <div className={"flex flex-wrap gap-8"}>
                                <Image
                                    src={javascriptSvg}
                                    width={50}
                                    height={50}
                                    alt={"javascript"}
                                    className={"invert"}
                                />
                                <Image
                                    src={htmlSvg}
                                    width={50}
                                    height={50}
                                    alt={"html"}
                                    className={"invert"}
                                />
                                <Image
                                    src={cssSvg}
                                    width={50}
                                    height={50}
                                    alt={"css3"}
                                    className={"invert"}
                                />
                                <Image
                                    src={reactSvg}
                                    width={50}
                                    height={50}
                                    alt={"react"}
                                    className={"invert"}
                                />
                                <Image
                                    src={reduxSvg}
                                    width={50}
                                    height={50}
                                    alt={"redux"}
                                    className={"invert"}
                                />
                                <Image
                                    src={jquerySvg}
                                    width={50}
                                    height={50}
                                    alt={"jquery"}
                                    className={"invert"}
                                />
                                <Image
                                    src={tailwindSvg}
                                    width={50}
                                    height={50}
                                    alt={"tailwind"}
                                    className={"invert"}
                                />
                                <Image
                                    src={bootstrapSvg}
                                    width={50}
                                    height={50}
                                    alt={"bootstrap"}
                                    className={"invert"}
                                />
                            </div>
                        </div>
                        <div className={"flex flex-col gap-6 lg:w-6/12"}>
                            <h2 className={"text-white text-2xl font-bold"}>
                                Back-End Development
                            </h2>
                            <div className={"flex flex-col gap-4"}>
                                <p className={"text-white font-light"}>
                                    <span className={"font-bold text-purple-400"}>Next.js</span> paired with <span
                                    className={"font-bold text-purple-400"}>TypeScript</span> is my preferred
                                    framework. The seamless blend of server-side and client-side React components,
                                    coupled with TypeScript's robust type safety, enables me to write clean,
                                    high-quality code.
                                    Tools like <span className={"font-bold text-purple-400"}>Prisma</span>, alongside <span className={"font-bold text-purple-400"}>PostgreSQL</span>, simplify
                                    database navigation and table manipulation.
                                    Additionally, Next.js API route integration streamlines full-stack development.
                                </p>
                                <p className={"text-white font-light"}>
                                    Developing applications in <span
                                    className={"font-bold text-purple-400"}>Java EE</span>, using <span
                                    className={"font-bold text-purple-400"}>Servlets</span>, <span
                                    className={"font-bold text-purple-400"}>Java Server Pages</span>, and Prepared Statements to prevent SQL Injection has
                                    given me a wide-ranging experience with legacy programming.
                                </p>
                                <p className={"text-white font-light"}>
                                    Setting up a full-stack Java focused application using <span
                                    className={"font-bold text-purple-400"}>Spring Boot</span> is amazingly simple.
                                    Creating a <span className={"font-bold text-purple-400"}>MySQL</span> database with
                                    Java Beans takes the complicated schema business out of the picture. Defining
                                    controllers with Spring couldn't be any easier and by utilizing <span
                                    className={"font-bold text-purple-400"}>Thymeleaf</span>, serving the frontend is
                                    effortless.
                                </p>
                                <p className={"text-white font-light"}>
                                    <span className={"font-bold text-purple-400"}>Express</span> is my go to framework
                                    for creating a lightweight <span className={"font-bold text-purple-400"}>Node.js</span> backend.
                                    Express provides a robust set of features and paired with <span
                                    className={"font-bold text-purple-400"}>Mongoose</span> for Object modeling,
                                    creating <span className={"font-bold text-purple-400"}>MongoDB</span> collections is
                                    quick and painless.
                                </p>
                                <p className={"text-white font-light"}>
                                    <span className={"font-bold text-purple-400"}>Firebase</span> is another great tool
                                    under my belt. Everything from storage to user authentication, Google's Firebase
                                    brings it all together without any of the extra legwork.
                                </p>
                            </div>
                            <div className={"flex flex-wrap gap-8"}>
                                <Image
                                    src={javaSvg}
                                    width={50}
                                    height={50}
                                    alt={"java"}
                                    className={"invert"}
                                />
                                <Image
                                    src={springSvg}
                                    width={50}
                                    height={50}
                                    alt={"spring"}
                                    className={"invert"}
                                />
                                <Image
                                    src={mysqlSvg}
                                    width={50}
                                    height={50}
                                    alt={"spring"}
                                    className={"invert"}
                                />
                                <Image
                                    src={thymeleafSvg}
                                    width={50}
                                    height={50}
                                    alt={"thymeleaf"}
                                    className={"invert"}
                                />
                                <Image
                                    src={expressSvg}
                                    width={50}
                                    height={50}
                                    alt={"express"}
                                    className={"invert"}
                                />
                                <Image
                                    src={nodeSvg}
                                    width={50}
                                    height={50}
                                    alt={"node"}
                                    className={"invert"}
                                />
                                <Image
                                    src={mongodbSvg}
                                    width={50}
                                    height={50}
                                    alt={"mongodb"}
                                    className={"invert"}
                                />
                                <Image
                                    src={mongooseSvg}
                                    width={50}
                                    height={50}
                                    alt={"mongoose"}
                                    className={"invert"}
                                />
                                <Image
                                    src={firebaseSvg}
                                    width={50}
                                    height={50}
                                    alt={"firebase"}
                                    className={"invert"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default WhatIKnow;