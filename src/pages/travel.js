import { TONMOY_CONTACT } from "@/data/contact";

import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Skills from "@/components/Skills";
import Image from "next/image";
import { ImageGrid } from "@/components/ImageGrid";
import { ABROAD_TOUR_LIST, HOME_TOUR_LIST } from "@/data/hobby";

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
            text="Travel is the only thing you buy that makes you richer."
            className="lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <section className="my-5 text-center">
            <h2 className="text-4xl font-bold">Most Favourite Place</h2>
            <div className="text-center mx-auto">
              <Image
                src="/info/ins/basundhara.jpg"
                alt="Travel"
                width={300}
                height={600}
                className="text-center mx-auto"
              />
              {/* caption */}
              <p className="text-gray-600">
                Basundhara Residential Block, Dhaka, Bangladesh
              </p>
            </div>
          </section>
          <section className="my-5 text-center">
            <h2 className="text-4xl font-bold">Home</h2>
            <div>
              <ImageGrid sampleData={HOME_TOUR_LIST} />
            </div>
          </section>
          <section className="my-5 text-center">
            <h2 className="text-4xl font-bold">Abroad</h2>
            <ImageGrid sampleData={ABROAD_TOUR_LIST} />
          </section>
        </Layout>
      </main>
    </>
  );
};

export default TravelPage;
