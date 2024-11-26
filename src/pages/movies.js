import { TONMOY_CONTACT } from "@/data/contact";

import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import { MOVIES } from "@/data/hobby";
import { ImageGrid } from "@/components/ImageGrid";
import { hennyPenny } from "./_app";

const MoviesPage = () => {
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
            text="Movies are the windows to worlds we might never visit but can feel deeply in our hearts."
            className="lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <section className="my-20">
            <h2 className={`text-6xl font-extrabold ${hennyPenny.className}`}>Favourite Movies and Series</h2>
            <ImageGrid sampleData={MOVIES} />
          </section>
        </Layout>
      </main>
    </>
  );
};

export default MoviesPage;
