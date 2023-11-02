import Link from "next/link";
import React from "react";

interface BlogCardMProps {
  classes: string;
  readingTime: string;
  title: string;
  summery: string;
  author: string;
  publish: string;
  avatar: string;
  cover: string;
  info: Boolean;
}

const BlogCardM: React.FC<BlogCardMProps> = (props) => {
  return (
    <>
      <Link className={`${props.classes} w-full`} href={"#"}>
        <div className="rounded-2xl border-[1.5px] border-white-shade-3 hover:shadow-card transition-all duration-300">
          <div
            className="w-full h-80 bg-cover bg-center rounded-t-2xl"
            style={{ backgroundImage: `url(${props.cover})` }}
          ></div>
          <div className="flex flex-col gap-y-4">
            <h1 className="px-6 pt-6  text-black text-xl font-outfit font-semibold lg:max-w-sm">
              {props.title}
            </h1>
              <p className="px-6 py-4 font-opensans text-white-shade-10 font-medium lg:max-w-sm">
                {props.summery}
              </p>
            <hr className="h-[1.5px] bg-white-shade-4 w-full" />
            <div className="px-6 pb-6 flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <img className="w-10" src={props.avatar} alt="" />
                <h1 className="text-black font-semibold font-opensans flex flex-col items-start">
                  {props.author}
                  <span className="font-opensans text-sm text-white-shade-9 font-normal">
                    {props.publish}
                  </span>
                </h1>
              </div>
              <span className="w-[105px] h-8 flex items-center justify-center bg-white-shade-3 text-black font-medium font-opensans text-sm rounded-lg">
                {props.readingTime}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCardM;
