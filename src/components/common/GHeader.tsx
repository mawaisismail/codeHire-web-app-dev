import React, { FC } from "react";

interface IGHeader {
  title: string;
  subtitle: string;
}

export const GHeader: FC<IGHeader> = ({ subtitle, title }) => {
  return (
    <div
      className="flex flex-col items-center max-w-2xl m-auto
    "
    >
      <h1 className="mb-4 text-gray-900 text-4xl font-extrabold tracking-tight leading-none">
        {title}
      </h1>
      <p className="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        {subtitle}
      </p>
    </div>
  );
};
