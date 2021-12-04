import type { NextPage } from "next";
import Head from "next/head";
import Resume from "./resume";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ringuralte</title>
        <meta name="description" content="ringuralte" />
      </Head>
      <Resume />
    </div>
  );
};

export default Home;
