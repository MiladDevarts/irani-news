import Link from "next/link";
import React from "react";

interface TageBlogger {
  title: string;
}

const Tag: React.FC<TageBlogger> = (props) => {
  return (
    <Link className="py-2" href={"#"}>
      <span className="bg-white-shade-3 px-4 py-2 text-black rounded-full font-opensans text-sm font-medium hover:bg-black hover:text-white duration-300 transition-all">
        {props.title}
      </span>
    </Link>
  );
};

export default Tag;
