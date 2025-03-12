import About from "@/app/components/About";
import WhatIKnow from "@/app/components/WhatIKnow";
import Projects from "@/app/components/Projects";
import Introduction from "@/app/components/Introduction";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
      <div className={"relative mx-auto max-w-screen-2xl flex flex-col px-6 py-12 gap-32 md:px-12 lg:py-0 lg:flex-row lg:gap-20"}>
          <div className={"lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-5/12 lg:flex-col lg:justify-between lg:py-24"}>
              <Introduction/>
          </div>
          <div className={"flex flex-col gap-32 lg:py-24 lg:w-7/12"}>
              <About/>
              <WhatIKnow/>
              <Projects/>
              <Footer/>
          </div>
      </div>
  );
}
