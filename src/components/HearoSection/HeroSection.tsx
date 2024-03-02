import React, { FC, useContext } from "react";
import { routes } from "../../../constants/routes";
import languagesImg from "../../../assets/images/languages.png";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../utils/context/GlobalProvider";
import Link from "next/link";

export const HeroSection: FC = () => {
  const [{ baseUser }] = useContext(GlobalContext);
  const { asPath } = useRouter();
  return (
    <>
      <section
        className={`bg-gray-900 ${
          !asPath.includes("company") ? "py-[11rem]" : " py-24"
        }`}
      >
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              {asPath.includes("company")
                ? "Tired of traditional selling/buying sites?"
                : "Find your dream Pets with A&B Mart"}
            </h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
              Discover your perfect companions with A&B Mart's Dream Pets collection! Whether you're seeking a loyal canine companion, a graceful feline friend, or perhaps something more exotic, we have a diverse array of pets to suit every preference and lifestyle. Our dedicated team ensures that each animal receives the utmost care and attention
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-900"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            {!baseUser?.uid && (
              <Link
                href={
                  asPath.includes("company")
                    ? routes.company.signUp
                    : routes.user.signUp
                }
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
              >
                {baseUser?.uid
                  ? asPath.includes("company")
                    ? "Hire Dev"
                    : "Find Job"
                  : "Sign up"}
              </Link>
            )}{" "}
            {baseUser?.uid && (
              <Link
                href={
                  asPath.includes("company")
                    ? routes.company.users
                    : routes.user.jobs
                }
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
              >
                {baseUser?.uid
                  ? asPath.includes("company")
                    ? "Hire Dev"
                    : "Find Job"
                  : "Sign up"}
              </Link>
            )}
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              className="rounded-3xl"
              src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnEPOIUVbJezPn77_vk1oeGwL3-FBEUo0ZlSfSk46j2R_itXiM'}
              alt="mockup"
            />
          </div>
        </div>
      </section>
    </>
  );
};
