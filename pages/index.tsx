import type { NextPage } from "next";
import Head from "next/head";
import { AboutMe } from "../components/AboutMe";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ringuralte</title>
        <meta name="description" content="ringuralte" />
      </Head>
      <div className="flex flex-col mx-auto w-full max-w-screen-lg h-screen ">
        <div className="h-full min-h-1/5">
          <Header />
        </div>
        <div className="h-full min-h-4/5">
          <AboutMe />
        </div>
      </div>
      <div className="flex flex-col mx-auto w-full max-w-screen-lg h-screen ">
        <Projects />
      </div>
    </div>
  );
};

export default Home;
