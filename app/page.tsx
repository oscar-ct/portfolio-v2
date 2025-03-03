import About from "@/app/components/About";
import WhatIKnow from "@/app/components/WhatIKnow";
import BlankDivider from "@/app/components/BlankDivider";
import Projects from "@/app/components/Projects";
import NavReordering from "@/app/components/NavReordering";

export default function Home() {
  return (
      <div className={"relative"}>
          <About/>
          <BlankDivider/>
          <WhatIKnow/>
          <BlankDivider/>
          <Projects/>
          <NavReordering/>
      </div>
  );
}
