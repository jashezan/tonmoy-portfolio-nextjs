import { TONMOY_CONTACT } from "@/data/contact";

import Layout from  "@/components/Layout";
import TransitionEffect from  "@/components/TransitionEffect";
import Head from  "next/head";
import AnimatedText from "@/components/AnimatedText";
import ExtraCur from "@/components/ExtraCur";

const ExtraCurriculur = () => {
  return (
    <>
      <Head>
        <title>Extra Curriculur Activites Page | {TONMOY_CONTACT.fullname} Portfolio</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
        <AnimatedText
            text="Extra-curricular activities build character and skills beyond the classroom."
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ExtraCur />
        </Layout>
      </main>
    </>
  );
};

export default ExtraCurriculur;