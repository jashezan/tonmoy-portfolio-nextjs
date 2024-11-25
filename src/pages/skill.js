import { TONMOY_CONTACT } from "@/data/contact";

import Layout from  "@/components/Layout";
import TransitionEffect from  "@/components/TransitionEffect";
import Head from  "next/head";
import AnimatedText from "@/components/AnimatedText";
import Skills from "@/components/Skills";

const ExtraCurriculur = () => {
  return (
    <>
      <Head>
        <title>Skill Page | {TONMOY_CONTACT.fullname} Portfolio</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="">
        <AnimatedText
            text="Skills are the bridge between knowledge and success."
            className="lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default ExtraCurriculur;