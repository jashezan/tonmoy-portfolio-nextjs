import { TONMOY_CONTACT } from "@/data/contact";

import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import { ImageGrid } from "@/components/ImageGrid";
import { VIDEO_GAMES } from "@/data/hobby";

const TravelPage = () => {
  return (
    <>
      <Head>
        <title>Travel Page | {TONMOY_CONTACT.fullname} Portfolio</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="">
          <AnimatedText
            text="Video games are not just play—they're portals to adventure, creativity, and connection."
            className="lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <section className="my-5">
            <h2 className="text-4xl font-bold">Favourite Games</h2>
            <ImageGrid sampleData={VIDEO_GAMES} />
          </section>
        </Layout>
      </main>
    </>
  );
};

export default TravelPage;
