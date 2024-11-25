import { TONMOY_CONTACT } from "@/data/contact";

import Layout from  "@/components/Layout";
import TransitionEffect from  "@/components/TransitionEffect";
import Head from  "next/head";
import AnimatedText from "@/components/AnimatedText";
import Experience from "@/components/Experience";

const ExtraCurriculur = () => {
  return (
    <>
      <Head>
        <title>Experience Page | {TONMOY_CONTACT.fullname} Portfolio</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="-pt-10">
        <AnimatedText
            text="Experience is the teacher of all things." // nice quote about experience
            className="lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default ExtraCurriculur;