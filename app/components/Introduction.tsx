import Image from "next/image";
import headshot from "@/public/images/headshot.jpeg";
import NavReordering from "@/app/components/NavReordering";

const Introduction = () => {
    return (
        <section className={"h-full flex flex-col justify-between"}>
            <div className={"flex flex-col gap-4"}>
                <h1 className={"text-slate-100 font-bold text-5xl"}>
                    Oscar Castro
                </h1>
                <h2 className={"text-slate-200 font-semibold text-2xl"}>
                    Web Developer
                </h2>
                <h3 className={"text-slate-300"}>
                    I create pixel-perfect, high-performance websites using modern tools like React and Next.js.
                </h3>
                <div className={"mt-4 relative"}>
                    <Image
                        priority
                        className={"w-52 h-52 mask mask-squircle"}
                        width={300}
                        height={300}
                        src={headshot}
                        alt={"headshot"}
                    />
                    <div className={"absolute top-0 mask mask-squircle w-52 h-52 bg-purple-500 opacity-20"}/>
                </div>
            </div>
            {/*<IntroLink/>*/}
            <div className={"pt-12"}>
                <NavReordering/>
            </div>
        </section>
    );
};

export default Introduction;