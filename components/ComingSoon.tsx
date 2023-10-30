import React from "react";

const ComingSoon = () => {
  return (
    <div
      className="w-full bg-cover"
      style={{ backgroundImage: `url('/images/general/bg.png')` }}
    >
      <main className="w-full h-[92vh] container flex flex-col items-center justify-center lg:flex-row overflow-hidden">
        <video autoPlay muted loop className="w-96">
          <source src="/video/soon.mov" />
        </video>
      </main>
    </div>
  );
};

export default ComingSoon;
