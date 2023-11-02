import Link from "next/link";
import React from "react";

interface NewsCardProps {
  readingTime: string;
  title: string;
  summery: string;
  author: string;
  publish: string;
  avatar: string;
  cover: string;
  cm: string;
  like: string;
  url:string
}

const NewsCard: React.FC<NewsCardProps> = (props) => {
  return (
    <>
      <Link
        href={props.url}
        className="w-full lg:w-1/2 group mt-0 lg:hover:-mt-2 transition-all duration-500"
      >
        <div
          className={`flex flex-col lg:flex-row w-full border-[1.5px] p-3 border-white-shade-3 rounded-2xl hover:shadow-card transition-all duration-300 `}
        >
          <div className="w-full lg:w-2/3 flex flex-col gap-y-2 p-5">
            <span className="w-[80px] h-10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300 bg-white-shade-3 text-black font-medium font-opensans text-xs rounded-lg">
              {props.readingTime}
            </span>
            <h1 className="text-black text-xl font-outfit font-semibold lg:max-w-sm lg:text-lg">
              {props.title}
            </h1>
            <p className="font-opensans text-white-shade-11 font-medium text-xs lg:max-w-xs">
              {props.summery}
            </p>
            <div>
              <div className="flex items-center gap-x-5 py-5 lg:py-0 lg:pt-3">
                <div className="flex items-center gap-x-3">
                  <img className="w-10" src={props.avatar} alt="" />
                  <h1 className="text-black text-sm font-semibold font-opensans flex flex-col items-start">
                    {props.author}
                    <span className="font-opensans text-sm text-white-shade-9 font-normal">
                      {props.publish}
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div
            className="lg:block hidden w-full lg:w-1/2 max-h-full lg:max-h-full  bg-cover bg-center rounded-2xl my-3"
            style={{ backgroundImage: `url(${props.cover})` }}
          ></div>
          <div
            className="lg:hidden block w-full lg:w-1/3 h-44 lg:max-h-full  bg-cover bg-center rounded-2xl my-3"
            style={{ backgroundImage: `url(${props.cover})` }}
          ></div>
        </div>
      </Link>
    </>
  );
};

export default NewsCard;
