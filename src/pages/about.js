import React, { useEffect, useRef } from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import { TONMOY_CONTACT } from "@/data/contact";
import Hobbies from "@/components/Hobbies";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>About Page | {TONMOY_CONTACT.fullname} Portfolio</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl
                sm:mb-8
                "
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2
                        md:col-span-8 text-justify "
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Tonmoy is a driven Computer Science student at AIUB, passionate
                about programming, problem-solving, and emerging technologies
                like AI and software development. As a 4th-semester student, he
                is building a strong technical foundation while preparing to
                pursue higher education in Australia in 2025 to expand his
                knowledge and gain global exposure.
              </p>
              <p className="my-4 font-medium">
                Beyond academics, Tonmoy excels in leadership and achievements.
                He represented Bangladesh at the 2024 World Diplomatic Assembly
                in Dubai and led as a campus ambassador for multiple
                organizations. An accomplished debater and athlete, he won
                inter-district cricket championships, debate contests, and
                awards in Math and Physics Olympiads.
              </p>
              <p className="my-4 font-medium">
                With a vision to advance technology for societal impact, Tonmoy
                actively participates in coding challenges and collaborative
                projects, aiming to make a meaningful mark as an innovator in
                the tech industry.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light
                        p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
                        "
            >
              <div
                className="absolute top-0 -right-3 -z-10 w-[100%] h-[102%] rounded-[2rem] bg-dark
                            dark:bg-ligh"
              />
              <Image
                src={profilePic}
                alt={TONMOY_CONTACT.fullname}
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <div
              className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row
                        xl:items-center md:order-3"
            >
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm"
                >
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  tasks completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience clients
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
          <Hobbies />
        </Layout>
      </main>
    </>
  );
};

export default about;
