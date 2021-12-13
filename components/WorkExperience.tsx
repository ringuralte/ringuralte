import React from "react";

export const WorkExperience: React.FC = () => {
  return (
    <>
      <h2 className="px-12 text-4xl font-bold text-crimson font-title">
        <span className="border-b-4 border-black">Work Experience</span>
      </h2>

      <div className="px-12 mt-8 text-2xl font-semibold font-title">
        Frontend Developer
      </div>
      <div className="px-12 text-xl">
        <span className="text-sm">for</span> Makkati
        <span className="px-4 text-sm italic">07/2020 - Present</span>
      </div>
      <ul className="flex flex-col gap-y-4 px-16 mt-4 list-disc">
        <li>Documenting code written in php and laravel framework</li>
        <li>
          Succesfully implemented the frontend for newspaper company Vanglaini
          at{" "}
          <a
            className="hover:underline"
            target="_blank"
            href="https://vanglaini.org"
            rel="noreferrer noopener"
          >
            vanglaini.org
          </a>{" "}
          using React and Nextjs framework
        </li>
        <li>
          Created frontend for an Archival System used by the Synod Council,
          Mizoram using Vue and Nuxt
        </li>
      </ul>

      <div className="px-12 mt-8 text-2xl font-semibold font-title">
        Freelance Work
      </div>
      <ul className="flex flex-col gap-y-4 px-16 mt-4 list-disc">
        <li>
          Developed website for architect firm lbassociates at{" "}
          <a
            className="hover:underline"
            target="_blank"
            href="https://lbassociates.in"
            rel="noreferrer noopener"
          >
            lbassociates.in
          </a>{" "}
          using nextjs on the frontend and prismic.io as a headless backend/cms
          and hosted on netlify.
        </li>
        <li>
          Website for Nursing College BNCollege of Nursing at{" "}
          <a
            className="hover:underline"
            target="_blank"
            href="https://bncollegeofnursingmizoram.com"
            rel="noreferrer noopener"
          >
            bncollegeofnursingmizoram.com
          </a>{" "}
          using nextjs and netlifycms as the cms, hosted on netlify.
        </li>
      </ul>
    </>
  );
};
