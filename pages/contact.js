import { Fragment } from "react";
import ContactForm from "../component/contact/contact-form";
import Head from "next/head";

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="send messages!" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default ContactPage;
