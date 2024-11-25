import { TONMOY_CONTACT } from "@/data/contact";

import Layout from  "@/components/Layout";
import TransitionEffect from  "@/components/TransitionEffect";
import Head from  "next/head";
import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";

const ExtraCurriculur = () => {
  return (
    <>
      <Head>
        <title>Education Page | {TONMOY_CONTACT.fullname} Portfolio</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="">
        <AnimatedText
            text="Education is the key to unlocking a world of possibilities."
            className="lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default ExtraCurriculur;