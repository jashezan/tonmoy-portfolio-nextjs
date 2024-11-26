import { TONMOY_CONTACT } from "@/data/contact";

import Layout from  "@/components/Layout";
import TransitionEffect from  "@/components/TransitionEffect";
import Head from  "next/head";
import IdolPersonalities from "@/components/Idol";

const ExtraCurriculur = () => {
  return (
    <>
      <Head>
        <title>Hobbies Page | {TONMOY_CONTACT.fullname} Portfolio</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <IdolPersonalities/>
        </Layout>
      </main>
    </>
  );
};

export default ExtraCurriculur;