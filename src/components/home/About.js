import React from "react";
import Accordion from "./Accordion";

export default function About() {
  return (
    <div className=" bg-[#d1d1c7] ">
      <div className="bg-black h-screen text-white rounded-t-[80px] p-[60px] grid grid-cols-2 gap-20  ">
        {/* part-1 */}
        <div className="space-y-6">
          <p className="animate two text-8xl  font-bold text-[#d1d1c7]">
            <span>A</span>
            <span>B</span>
            <span>O</span>
            <span>U</span>
            <span>T</span> &nbsp;
            <span>M</span>
            <span>E</span>
          </p>
          <p className="text-[32px] font-medium text-[#a29e9a]">
            I focus on all things digital and web related. With each of my
            services, my goal is to deliver an experience that serves a great
            purpose.
          </p>
        </div>
        {/* part-2 */}
        <div className="">
          <Accordion className="border-b-2 " title="Web Development">
            <p className="text-neutral-600 mt-3  group-open:animate-fadeIn sm:text-sm md:text-lg transition-transform delay-150 ">
              The potential side effects of a medication can vary depending on
              the drug. It's important to read the drug label and ask your
              healthcare provider or pharmacist about any possible side effects.
            </p>
          </Accordion>
          <Accordion className="border-b-2 " title="Web Design">
            <p className="text-neutral-600 mt-3  group-open:animate-fadeIn sm:text-sm md:text-lg transition-transform delay-150 ">
              The potential side effects of a medication can vary depending on
              the drug. It's important to read the drug label and ask your
              healthcare provider or pharmacist about any possible side effects.
            </p>
          </Accordion>
          <Accordion className="border-b-2 " title="SEO">
            <p className="text-neutral-600 mt-3  group-open:animate-fadeIn sm:text-sm md:text-lg transition-transform delay-150 ">
              The potential side effects of a medication can vary depending on
              the drug. It's important to read the drug label and ask your
              healthcare provider or pharmacist about any possible side effects.
            </p>
          </Accordion>
          <Accordion className="border-b-2 " title="Branding">
            <p className="text-neutral-600 mt-3  group-open:animate-fadeIn sm:text-sm md:text-lg transition-transform delay-150 ">
              The potential side effects of a medication can vary depending on
              the drug. It's important to read the drug label and ask your
              healthcare provider or pharmacist about any possible side effects.
            </p>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
