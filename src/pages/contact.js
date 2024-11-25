import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { TONMOY_CONTACT } from "@/data/contact";
import { ContactForm } from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Page | {TONMOY_CONTACT.fullname} Portfolio</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Let's Create Something Amazing - Get in Touch!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ContactForm />
          <div className="">
            <GoogleMap />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default ContactPage;
