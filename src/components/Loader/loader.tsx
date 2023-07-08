import { useEffect, useState } from "react";

export const Loader = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading && (
        <div className="bg-white fixed w-screen h-screen flex items-center justify-center opacity-100">
          <div className="flex justify-center items-center flex-col">
            <p className="font-bold text-2xl py-2">Code Hire</p>
            <div className="lds-dual-ring"></div>
          </div>
        </div>
      )}
    </>
  );
};
