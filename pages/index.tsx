import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { AboutMe } from "@/components/AboutMe";
import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { Project } from "@/types/Project";
import { server } from "../config";
import { DownloadResume } from "@/components/DownloadResume";

const Home: NextPage<{ projects: Project[] }> = ({ projects }) => {
  return (
    <div>
      <Head>
        <title>ringuralte</title>
        <meta name="description" content="ringuralte" />
      </Head>
      <div className="relative mx-auto flex flex-col min-h-screen w-full">
        <div className="flex-grow">
          <div className="flex flex-col mx-auto w-full max-w-screen-lg min-h-screen h-full">
            <div className="h-full min-h-1/5">
              <Header />
            </div>
            <div className="h-full min-h-4/5">
              <AboutMe />
            </div>
          </div>
          <div className="flex flex-col mx-auto w-full max-w-screen-lg min-h-screen h-full">
            <Projects projects={projects} />
          </div>
        </div>
        <DownloadResume />
        <div className="flex-grow h-20" />
        <div className="flex flex-col bg-black items-center mx-auto w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let projects: Project[] = [];
  try {
    const res = await fetch(`${server}/api/projects`, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent": "*",
      },
    });
    projects = await res.json();
  } catch (error) {
    console.log(error);
  }

  return {
    props: { projects },
  };
};
