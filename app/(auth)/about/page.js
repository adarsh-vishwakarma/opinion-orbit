import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About",
};

const Article1 = () => {
  return (
    <div className="w-full">
      <section className="py-5 sm:py-5 lg:py-5">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto xl:max-w-4xl">
            <p className="text-2xl font-bold tracking-widest uppercase text-center sm:text-left">
              About Page
            </p>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-7 text-center sm:text-left">
              What is Opinion Orbit?
            </h1>
            <p className="text-sm font-normal mt-5 text-center sm:text-left">
              {new Date().toLocaleString("default", { month: "long" })},{" "}
              {new Date().getFullYear()}
            </p>

            <div className="mt-10">
              <p className="text-base sm:text-lg font-normal leading-7">
                Welcome to Opinion Orbit, your go-to solution for effortless and
                efficient feedback collection...
              </p>

              <Image
                src={'/demo.gif'}
                className="w-96 h-auto mx-auto my-8 rounded-md"
                alt="About Hero"
                width={1000}
                height={500}
                loading="lazy"
              />

              <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-center sm:text-left">
                Our Technology
              </h2>
              <p className="mt-6 text-base font-normal leading-7">
                Our platform is built with a modern and robust tech stack to
                ensure a seamless and reliable experience:
              </p>
              <ul className="pl-5 mt-6 space-y-2 text-base font-normal leading-7 list-disc">
                <li>
                  <span className="font-bold ">React.js:</span> Dynamic and responsive UI.
                </li>
                <li>
                  <span className="font-bold ">Next.js:</span> Server-side rendering and static site generation.
                </li>
                <li>
                  <span className="font-bold ">TypeScript:</span> Ensuring type safety.
                </li>
                <li>
                  <span className="font-bold ">PostgreSQL:</span> Scalable database for efficient data handling.
                </li>
              </ul>

              <h2 className="mt-12 text-2xl sm:text-3xl font-bold text-center sm:text-left">
                Our Mission
              </h2>
              <p className="mt-6 text-base font-normal leading-7">
                At Opinion Orbit, we aim to help businesses harness the power of user feedback...
              </p>

              <blockquote className="pl-5 mt-8 border-l-2 border-white">
                <p className="text-lg italic font-medium text-center sm:text-left">
                  Join the Opinion Orbit community today and discover how we turn feedback into success strategies.
                </p>
              </blockquote>

              <h2 className="mt-16 text-2xl sm:text-3xl font-bold text-center sm:text-left">
                Still Have Questions?
              </h2>
              <p className="mt-6 text-base font-normal leading-7 ">
                If you have any questions, suggestions, or need further assistance, don’t hesitate to reach out...
              </p>

              <blockquote className="pl-5 mt-8 border-l-2 border-white">
                <p className="text-lg italic font-medium text-white/70 text-center sm:text-left">
                  Let’s{" "}
                  <Link
                    className="hover:underline"
                    href={""}
                    target="_"
                  >
                    connect
                  </Link>{" "}
                  and enhance your feedback journey with Opinion Orbit.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article1;
