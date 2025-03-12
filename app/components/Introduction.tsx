import IntroLink from "@/app/components/IntroLink";

const Introduction = () => {
    return (
        <section className={"pt-12 pb-20 px-6 max-w-screen-xl mx-auto flex items-start sm:items-center md:pt-0 md:h-screen md:px-10"}>
            <div className={"flex flex-col gap-4 lg:pt-16"}>
                <div className={"text-slate-300 leading-7 text-lg"}>
                    Hi, my name is
                </div>
                <h1 className={"text-accent font-bold text-5xl md:text-6xl lg:text-7xl"}>
                    Oscar Castro.
                </h1>
                <h1 className={"text-slate-100 font-bold text-3xl sm:text-4xl md:text-6xl lg:text-7xl"}>
                    I create modern solutions for the internet.
                </h1>
                <div className={"leading-7 text-slate-300 text-lg"}>
                    I’m a full-stack web developer from San Antonio, TX, skilled in JavaScript, TypeScript, and
                    Java, building user-focused, accessible web solutions that perform and inspire.
                </div>
                <div className={"pt-5 flex"}>
                    <IntroLink/>
                </div>
            </div>
        </section>
    );
};

export default Introduction;