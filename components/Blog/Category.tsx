import Link from "next/link";
import React from "react";

interface CategoryProps {
  classes: string;
  content: string;
  onClick(): any;
}

const Category: React.FC<CategoryProps> = (props) => {
  return (
    <>
      <Link onClick={props.onClick} href={"#"} className="">
        <div className="py-6 border-b-[1.5px] pl-8 text-white-shade-9  border-white-shade-3 hover:scale-105 hover:text-black hover:font-semibold transition-all duration-500">
          <span className="flex items-center  justify-between font-opensans ">
            {props.content}
          </span>
        </div>
      </Link>
    </>
  );
};

export default Category;
