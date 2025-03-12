import About from "@/app/components/About";
import WhatIKnow from "@/app/components/WhatIKnow";
import Projects from "@/app/components/Projects";
import NavReordering from "@/app/components/NavReordering";
import Introduction from "@/app/components/Introduction";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
      <div className={"relative"}>
          <Introduction/>
          <About/>
          <WhatIKnow/>
          <Projects/>
          <NavReordering/>
          <Footer/>
      </div>
  );
}
