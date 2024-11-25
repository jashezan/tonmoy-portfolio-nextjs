import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { WORK_EXPERIENCES } from "@/data/work";
import JobDetails from "./JobDetails";

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]
                    "
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {WORK_EXPERIENCES.map((work, index) => (
            <JobDetails
              key={index}
              position={work.position}
              company={work.company}
              companyLink={work.companyLink}
              time={work.time}
              address={work.address}
              work={work.work}
              imageLink={work.imageLink}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
