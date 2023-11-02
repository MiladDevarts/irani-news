import React from "react";

import { ActiveBlogger, Tag } from "@/components/Sidebar";
import { NewsCardFullWidth, NewsCard } from "@/components/Blog";

import OverlayMenu from "@/components/Overlay";
import { Metadata } from "next";
import Link from "next/link";
import BlogCardM from "@/components/Blog/BlogCardM";

export const metadata: Metadata = {
  title: "invest time in the Irani.World platform",
  description: "",
};

const page = () => {
  return (
    <>
      <OverlayMenu />
      <main className="container flex flex-col lg:flex-row">
        <div className="w-full lg:w-4/5 pt-16">
          <div className="w-full flex flex-col items-center mb-10">
            <h1 className="text-black font-outfit text-3xl font-semibold text-center max-w-xl">
              Why should you use and invest time in the Irani.World platform?
            </h1>
            <div className="flex items-center gap-x-6 mt-6  text-white-shade-8 font-medium">
              <div className="flex items-center gap-x-2 text-sm">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.1318 13C16.6841 13 17.1318 12.5523 17.1318 12C17.1318 11.4477 16.6841 11 16.1318 11C15.5796 11 15.1318 11.4477 15.1318 12C15.1318 12.5523 15.5796 13 16.1318 13Z"
                    fill="#A6A6A6"
                  />
                  <path
                    d="M16.1318 17C16.6841 17 17.1318 16.5523 17.1318 16C17.1318 15.4477 16.6841 15 16.1318 15C15.5796 15 15.1318 15.4477 15.1318 16C15.1318 16.5523 15.5796 17 16.1318 17Z"
                    fill="#A6A6A6"
                  />
                  <path
                    d="M12.1318 12C12.1318 12.5523 11.6841 13 11.1318 13C10.5796 13 10.1318 12.5523 10.1318 12C10.1318 11.4477 10.5796 11 11.1318 11C11.6841 11 12.1318 11.4477 12.1318 12Z"
                    fill="#A6A6A6"
                  />
                  <path
                    d="M12.1318 16C12.1318 16.5523 11.6841 17 11.1318 17C10.5796 17 10.1318 16.5523 10.1318 16C10.1318 15.4477 10.5796 15 11.1318 15C11.6841 15 12.1318 15.4477 12.1318 16Z"
                    fill="#A6A6A6"
                  />
                  <path
                    d="M6.13184 13C6.68412 13 7.13184 12.5523 7.13184 12C7.13184 11.4477 6.68412 11 6.13184 11C5.57955 11 5.13184 11.4477 5.13184 12C5.13184 12.5523 5.57955 13 6.13184 13Z"
                    fill="#A6A6A6"
                  />
                  <path
                    d="M6.13184 17C6.68412 17 7.13184 16.5523 7.13184 16C7.13184 15.4477 6.68412 15 6.13184 15C5.57955 15 5.13184 15.4477 5.13184 16C5.13184 16.5523 5.57955 17 6.13184 17Z"
                    fill="#A6A6A6"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.13184 0.75C6.54605 0.75 6.88184 1.08579 6.88184 1.5V2.26272C7.54383 2.24999 8.27316 2.24999 9.07529 2.25H13.1883C13.9904 2.24999 14.7198 2.24999 15.3818 2.26272V1.5C15.3818 1.08579 15.7176 0.75 16.1318 0.75C16.5461 0.75 16.8818 1.08579 16.8818 1.5V2.32709C17.1418 2.34691 17.3879 2.37182 17.6209 2.40313C18.7933 2.56076 19.7422 2.89288 20.4906 3.64124C21.239 4.38961 21.5711 5.33855 21.7287 6.51098C21.8819 7.65018 21.8819 9.1058 21.8818 10.9435V13.0564C21.8819 14.8941 21.8819 16.3498 21.7287 17.489C21.5711 18.6614 21.239 19.6104 20.4906 20.3588C19.7422 21.1071 18.7933 21.4392 17.6209 21.5969C16.4817 21.75 15.026 21.75 13.1883 21.75H9.07543C7.23769 21.75 5.78202 21.75 4.64281 21.5969C3.47039 21.4392 2.52144 21.1071 1.77308 20.3588C1.02472 19.6104 0.692599 18.6614 0.534971 17.489C0.381808 16.3498 0.381821 14.8942 0.381836 13.0564V10.9436C0.381821 9.10582 0.381808 7.65019 0.534971 6.51098C0.692599 5.33855 1.02472 4.38961 1.77308 3.64124C2.52144 2.89288 3.47039 2.56076 4.64281 2.40313C4.87574 2.37182 5.12189 2.34691 5.38184 2.32709V1.5C5.38184 1.08579 5.71762 0.75 6.13184 0.75ZM4.84269 3.88976C3.8366 4.02502 3.25695 4.27869 2.83374 4.7019C2.41053 5.12511 2.15686 5.70476 2.0216 6.71085C1.99869 6.88123 1.97953 7.06061 1.96352 7.25H20.3002C20.2841 7.06061 20.265 6.88124 20.2421 6.71085C20.1068 5.70476 19.8531 5.12511 19.4299 4.7019C19.0067 4.27869 18.4271 4.02502 17.421 3.88976C16.3933 3.75159 15.0387 3.75 13.1318 3.75H9.13184C7.22502 3.75 5.87035 3.75159 4.84269 3.88976ZM1.88184 11C1.88184 10.146 1.88216 9.40273 1.89492 8.75H20.3688C20.3815 9.40273 20.3818 10.146 20.3818 11V13C20.3818 14.9068 20.3802 16.2615 20.2421 17.2892C20.1068 18.2952 19.8531 18.8749 19.4299 19.2981C19.0067 19.7213 18.4271 19.975 17.421 20.1102C16.3933 20.2484 15.0387 20.25 13.1318 20.25H9.13184C7.22502 20.25 5.87035 20.2484 4.84268 20.1102C3.8366 19.975 3.25695 19.7213 2.83374 19.2981C2.41053 18.8749 2.15686 18.2952 2.0216 17.2892C1.88343 16.2615 1.88184 14.9068 1.88184 13V11Z"
                    fill="#A6A6A6"
                  />
                </svg>
                September 4, 2020
              </div>
              <div className="flex items-center gap-x-3">
                <img className="w-8" src="/images/avatar/1.png" alt="" />
                <h1 className="text-sm font-semibold font-opensans flex flex-col items-start">
                  By Irani World Board
                </h1>
              </div>
            </div>
          </div>
          <div
            className="w-full h-[400px] rounded-3xl bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/thumbnails/iw-inside-4.jpg')`,
            }}
          ></div>
          <div className="w-full flex gap-x-14 my-10">
            <div className="flex flex-col gap-y-3">
              <span className="text-white-shade-10">Socials</span>
              <Link
                href={"/"}
                className="p-3 border border-white-shade-4 rounded-2xl flex items-center justify-center"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.0002 4.66675C14.9977 4.66675 16.0208 4.69241 17.0125 4.73441L18.1838 4.79041L19.305 4.85691L20.355 4.92808L21.314 5.00275C22.3547 5.08241 23.334 5.52652 24.0796 6.25696C24.8252 6.9874 25.2893 7.95738 25.3903 8.99625L25.437 9.49208L25.5245 10.5537C25.6062 11.6539 25.6668 12.8532 25.6668 14.0001C25.6668 15.1469 25.6062 16.3462 25.5245 17.4464L25.437 18.5081C25.4218 18.6784 25.4067 18.8429 25.3903 19.0039C25.2893 20.043 24.825 21.0131 24.0792 21.7436C23.3333 22.474 22.3538 22.918 21.3128 22.9974L20.3562 23.0709L19.3062 23.1432L18.1838 23.2097L17.0125 23.2657C16.009 23.3094 15.0046 23.3319 14.0002 23.3334C12.9957 23.3319 11.9914 23.3094 10.9878 23.2657L9.8165 23.2097L8.69533 23.1432L7.64533 23.0709L6.68633 22.9974C5.64561 22.9178 4.66631 22.4736 3.92071 21.7432C3.17512 21.0128 2.711 20.0428 2.61 19.0039L2.56333 18.5081L2.47583 17.4464C2.38662 16.2997 2.33915 15.1502 2.3335 14.0001C2.3335 12.8532 2.39416 11.6539 2.47583 10.5537L2.56333 9.49208C2.5785 9.32175 2.59366 9.15725 2.61 8.99625C2.71096 7.95756 3.17492 6.98773 3.92027 6.25732C4.66562 5.5269 5.64465 5.08267 6.68516 5.00275L7.643 4.92808L8.693 4.85691L9.81533 4.79041L10.9867 4.73441C11.9906 4.69082 12.9953 4.66826 14.0002 4.66675ZM11.6668 11.1709V16.8292C11.6668 17.3682 12.2502 17.7042 12.7168 17.4359L17.6168 14.6067C17.7235 14.5454 17.812 14.457 17.8736 14.3505C17.9352 14.244 17.9676 14.1231 17.9676 14.0001C17.9676 13.8771 17.9352 13.7562 17.8736 13.6497C17.812 13.5432 17.7235 13.4548 17.6168 13.3934L12.7168 10.5654C12.6104 10.504 12.4896 10.4716 12.3667 10.4716C12.2438 10.4717 12.1231 10.504 12.0166 10.5655C11.9102 10.627 11.8218 10.7154 11.7604 10.8219C11.699 10.9284 11.6668 11.0492 11.6668 11.1721V11.1709Z"
                    fill="#B3B3B3"
                  />
                </svg>
              </Link>
              <Link
                href={"/"}
                className="p-3 border border-white-shade-4 rounded-2xl flex items-center justify-center"
              >
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1493 0H20.4742L13.212 8.35593L21.7867 19.6867H15.0494L9.79963 12.8183L3.76236 19.6867H0.437483L8.22469 10.7621L0 0H6.91224L11.6808 6.29976L17.1493 0ZM15.9681 17.6743H17.8056L5.90602 1.88118H3.8936L15.9681 17.6743Z"
                    fill="#A6A6A6"
                  />
                </svg>
              </Link>
              <Link
                href={"/"}
                className="p-3 border border-white-shade-4 rounded-2xl flex items-center justify-center"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM12 15.88C9.86 15.88 8.12 14.14 8.12 12C8.12 9.86 9.86 8.12 12 8.12C14.14 8.12 15.88 9.86 15.88 12C15.88 14.14 14.14 15.88 12 15.88ZM17.92 6.88C17.87 7 17.8 7.11 17.71 7.21C17.61 7.3 17.5 7.37 17.38 7.42C17.26 7.47 17.13 7.5 17 7.5C16.73 7.5 16.48 7.4 16.29 7.21C16.2 7.11 16.13 7 16.08 6.88C16.03 6.76 16 6.63 16 6.5C16 6.37 16.03 6.24 16.08 6.12C16.13 5.99 16.2 5.89 16.29 5.79C16.52 5.56 16.87 5.45 17.19 5.52C17.26 5.53 17.32 5.55 17.38 5.58C17.44 5.6 17.5 5.63 17.56 5.67C17.61 5.7 17.66 5.75 17.71 5.79C17.8 5.89 17.87 5.99 17.92 6.12C17.97 6.24 18 6.37 18 6.5C18 6.63 17.97 6.76 17.92 6.88Z"
                    fill="#A6A6A6"
                  />
                </svg>
              </Link>
              <Link
                href={"/"}
                className="p-3 border border-white-shade-4 rounded-2xl flex items-center justify-center"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 16.19C22 19.83 19.83 22 16.19 22H15C14.45 22 14 21.55 14 21V15.23C14 14.96 14.22 14.73 14.49 14.73L16.25 14.7C16.39 14.69 16.51 14.59 16.54 14.45L16.89 12.54C16.92 12.36 16.78 12.19 16.59 12.19L14.46 12.22C14.18 12.22 13.96 12 13.95 11.73L13.91 9.28C13.91 9.12 14.04 8.98001 14.21 8.98001L16.61 8.94C16.78 8.94 16.91 8.81001 16.91 8.64001L16.87 6.23999C16.87 6.06999 16.74 5.94 16.57 5.94L13.87 5.98001C12.21 6.01001 10.89 7.37 10.92 9.03L10.97 11.78C10.98 12.06 10.76 12.28 10.48 12.29L9.28 12.31C9.11 12.31 8.98001 12.44 8.98001 12.61L9.01001 14.51C9.01001 14.68 9.14 14.81 9.31 14.81L10.51 14.79C10.79 14.79 11.01 15.01 11.02 15.28L11.11 20.98C11.12 21.54 10.67 22 10.11 22H7.81C4.17 22 2 19.83 2 16.18V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81V16.19Z"
                    fill="#A6A6A6"
                  />
                </svg>
              </Link>
            </div>
            <div className="flex flex-col gap-y-12">
              <p className="text-white-shade-10 text-xl leading-8">
                Bringing Iranian businesses and professionals together has
                valuable positive impact both for the individual Iranian as well
                as the community as a whole. At minimum, community solidarity
                will help Iranian businesses survive hard times. In good times,
                community solidarity is a business bonus that can go to planning
                future growth, sustainability, or innovation.
                <br />
                <br />
                The traditional hubs for Iranian ex-pats are today some of the
                most expensive places to live in the world. Often second and
                third generation Iranians move farther and farther away from
                these hubs. By connecting through interaction in the Irani.World
                platform, generations of Iranians can form new hubs to support
                one another and attract and assist new ex-pats in their
                transition from Iran.
              </p>
            </div>
          </div>
          <div
            className="w-full h-[400px] rounded-3xl bg-cover bg-center mb-10"
            style={{
              backgroundImage: `url('/images/thumbnails/iw-inside-3.jpg')`,
            }}
          ></div>
          <div className="w-full flex flex-col gap-x-14 my-10 pb-24 border-b border-white-shade-4">
            <div className="flex gap-x-10 mb-10">
              <div className="flex flex-col gap-y-3">
                <svg
                  width="54"
                  height="201"
                  viewBox="0 0 54 201"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24.2614 18.7355C23.2079 18.7355 22.3801 19.5455 22.3801 20.5136C22.3801 21.4818 23.2079 22.2918 24.2614 22.2918C25.315 22.2918 26.1427 21.4818 26.1427 20.5136C26.1427 19.5455 25.315 18.7355 24.2614 18.7355ZM19.5404 20.5136C19.5404 18.0069 21.6686 16 24.2614 16C26.8543 16 28.9824 18.0069 28.9824 20.5136C28.9824 23.0204 26.8543 25.0273 24.2614 25.0273C21.6686 25.0273 19.5404 23.0204 19.5404 20.5136ZM32.7976 23.3365C33.9868 21.8759 34.8166 20.1744 35.2247 18.3602L38 18.9395C37.501 21.158 36.4862 23.2386 35.032 25.0247C33.5778 26.8109 31.722 28.256 29.6042 29.2515C28.2765 29.8756 26.8675 30.3128 25.4204 30.5533L27.4979 38.0223C27.7463 38.9156 28.6994 39.4456 29.6266 39.2063C30.5539 38.967 31.1041 38.0488 30.8557 37.1556L30.186 34.7479C30.1848 34.7482 30.1836 34.7485 30.1824 34.7488L30.1012 34.443L29.6138 32.691L29.6345 32.6857L29.4786 32.0986C31.3748 31.6313 33.1339 30.7495 34.6192 29.5215L36.4686 31.5974C35.3776 32.4993 34.1659 33.2485 32.8697 33.8269L33.5986 36.4476C34.253 38.8001 32.8037 41.2183 30.3616 41.8486C27.9195 42.479 25.4093 41.0829 24.7549 38.7304L22.5408 30.7703C20.2751 30.7381 18.0428 30.2303 16 29.281L17.2338 26.8171C18.9694 27.6237 20.8723 28.0405 22.7993 28.0364C24.7262 28.0322 26.6271 27.6071 28.3589 26.793C30.0907 25.979 31.6083 24.7972 32.7976 23.3365Z"
                    fill="black"
                  />
                  <path
                    d="M27 58.5V182.5L33.5 176"
                    stroke="black"
                    stroke-linecap="round"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="53"
                    height="200"
                    rx="15.5"
                    stroke="#E6E6E6"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-y-12">
                <p className="text-white-shade-10 text-xl leading-8">
                  As the Iranian business and professional community becomes
                  more interconnected there is potential to foster the growth of
                  other aspects of our culture such as language, literature,
                  art, and music. Artists can use the I.W platform to plan tours
                  to areas with a thriving Iranian community. Events and artists
                  can be marketed on a platform that is exclusively catered to
                  their main audience. Because of this symbiosis, I.W serves as
                  a perfect platform for traditional cultural specialists like
                  traditional Iranian wedding planners, Iranian bands and DJs,
                  Persian language tutors, Persian restaurants or markets,
                  Persian speaking attorneys, Persian speaking psychologists,
                  and more.
                  <br />
                  As the Iranian business and professional community becomes
                  more interconnected there is potential to foster the growth of
                  other aspects of our culture such as language, literature,
                  art, and music. Artists can use the I.W platform to plan tours
                  to areas with a thriving Iranian community. Events and artists
                  can be marketed on a platform that is exclusively catered to
                  their main audience. Because of this symbiosis, I.W serves as
                  a perfect platform for traditional cultural specialists like
                  traditional Iranian wedding planners, Iranian bands and DJs,
                  Persian language tutors, Persian restaurants or markets,
                  Persian speaking attorneys, Persian speaking psychologists,
                  and more.
                </p>
              </div>
            </div>
            <div className="ml-24 flex gap-x-5 items-center">
              <div className="flex gap-x-3 items-center text-black">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.85574 10.3906L6.58653 10.5592V10.5592L5.85574 10.3906ZM10.3906 5.85574L10.5592 6.58653L10.3906 5.85574ZM9.55812 20.9665L10.0885 20.4362V20.4362L9.55812 20.9665ZM15.2623 25V25.75V25ZM20.9665 9.55812L21.4969 9.02779L20.9665 9.55812ZM25 15.2623H25.75H25ZM19.1369 7.72848L18.6066 8.25881L19.1369 7.72848ZM11.6188 5.57231L11.4501 4.84152V4.84152L11.6188 5.57231ZM7.72848 19.1369L7.19815 19.6672L7.19815 19.6672L7.72848 19.1369ZM5.57231 11.6188L4.84152 11.4501L4.84152 11.4501L5.57231 11.6188ZM14.0114 20.9694C13.7185 21.2623 13.7185 21.7372 14.0114 22.0301C14.3043 22.323 14.7792 22.323 15.0721 22.0301L14.0114 20.9694ZM22.0511 15.0508C22.344 14.7579 22.344 14.2831 22.0511 13.9902C21.7582 13.6973 21.2833 13.6973 20.9904 13.9902L22.0511 15.0508ZM18.6066 8.25881L20.4362 10.0885L21.4969 9.02779L19.6672 7.19815L18.6066 8.25881ZM10.0885 20.4362L8.25881 18.6066L7.19815 19.6672L9.02779 21.4969L10.0885 20.4362ZM6.30311 11.7874L6.58653 10.5592L5.12495 10.2219L4.84152 11.4501L6.30311 11.7874ZM10.5592 6.58653L11.7874 6.30311L11.4501 4.84152L10.2219 5.12495L10.5592 6.58653ZM6.58653 10.5592C6.79677 9.6482 6.94251 9.02081 7.10698 8.54162C7.26575 8.07899 7.42228 7.81727 7.61977 7.61977L6.55911 6.55911C6.14313 6.9751 5.88955 7.46806 5.68821 8.05468C5.49256 8.62474 5.3282 9.34118 5.12495 10.2219L6.58653 10.5592ZM10.2219 5.12495C9.34118 5.3282 8.62474 5.49256 8.05468 5.68821C7.46806 5.88955 6.9751 6.14313 6.55911 6.55911L7.61977 7.61977C7.81727 7.42228 8.07899 7.26575 8.54162 7.10698C9.02081 6.94251 9.6482 6.79677 10.5592 6.58653L10.2219 5.12495ZM20.4362 20.4362C19.0767 21.7957 18.1093 22.7608 17.2776 23.3954C16.4633 24.0167 15.8678 24.25 15.2623 24.25V25.75C16.3276 25.75 17.2397 25.311 18.1875 24.5879C19.118 23.878 20.1674 22.8264 21.4969 21.4969L20.4362 20.4362ZM9.02779 21.4969C10.3573 22.8264 11.4066 23.878 12.3371 24.5879C13.2849 25.311 14.197 25.75 15.2623 25.75V24.25C14.6569 24.25 14.0614 24.0167 13.247 23.3954C12.4153 22.7608 11.4479 21.7957 10.0885 20.4362L9.02779 21.4969ZM20.4362 10.0885C21.7957 11.4479 22.7608 12.4153 23.3954 13.247C24.0167 14.0614 24.25 14.6569 24.25 15.2623H25.75C25.75 14.197 25.311 13.2849 24.5879 12.3371C23.878 11.4066 22.8264 10.3573 21.4969 9.02779L20.4362 10.0885ZM21.4969 21.4969C22.8264 20.1674 23.878 19.118 24.5879 18.1875C25.311 17.2397 25.75 16.3276 25.75 15.2623H24.25C24.25 15.8678 24.0167 16.4633 23.3954 17.2776C22.7608 18.1093 21.7957 19.0767 20.4362 20.4362L21.4969 21.4969ZM19.6672 7.19815C18.9044 6.43537 18.296 5.82577 17.7502 5.37538C17.1922 4.91481 16.6574 4.58372 16.0227 4.4017L15.6092 5.84358C15.9772 5.9491 16.3301 6.14816 16.7954 6.53225C17.2731 6.92651 17.8238 7.47607 18.6066 8.25881L19.6672 7.19815ZM11.7874 6.30311C12.866 6.05419 13.6243 5.88003 14.2383 5.79888C14.8365 5.71982 15.2413 5.73805 15.6092 5.84358L16.0227 4.4017C15.3881 4.21969 14.7591 4.21701 14.0418 4.31181C13.3403 4.40451 12.5012 4.59895 11.4501 4.84152L11.7874 6.30311ZM8.25881 18.6066C7.47607 17.8238 6.92651 17.2731 6.53225 16.7954C6.14816 16.3301 5.9491 15.9772 5.84358 15.6092L4.4017 16.0227C4.58372 16.6574 4.91481 17.1922 5.37538 17.7502C5.82577 18.296 6.43537 18.9044 7.19815 19.6672L8.25881 18.6066ZM4.84152 11.4501C4.59895 12.5012 4.40451 13.3403 4.31181 14.0418C4.21701 14.7591 4.21969 15.3881 4.4017 16.0227L5.84358 15.6092C5.73805 15.2413 5.71982 14.8365 5.79888 14.2383C5.88003 13.6243 6.05419 12.866 6.30311 11.7874L4.84152 11.4501ZM12.4909 10.9951C12.9791 11.4833 12.9791 12.2748 12.4909 12.7629L13.5516 13.8236C14.6255 12.7496 14.6255 11.0084 13.5516 9.93448L12.4909 10.9951ZM12.4909 12.7629C12.0028 13.2511 11.2113 13.2511 10.7232 12.7629L9.66251 13.8236C10.7365 14.8975 12.4777 14.8975 13.5516 13.8236L12.4909 12.7629ZM10.7232 12.7629C10.235 12.2748 10.235 11.4833 10.7232 10.9951L9.66251 9.93448C8.58857 11.0084 8.58857 12.7496 9.66251 13.8236L10.7232 12.7629ZM10.7232 10.9951C11.2113 10.507 12.0028 10.507 12.4909 10.9951L13.5516 9.93448C12.4777 8.86054 10.7365 8.86054 9.66251 9.93448L10.7232 10.9951ZM15.0721 22.0301L22.0511 15.0508L20.9904 13.9902L14.0114 20.9694L15.0721 22.0301Z"
                    fill="black"
                  />
                </svg>
                Tags
              </div>
              <div className="flex gap-x-2 items-center">
                <Tag title={"Platform"} />
                <Tag title={"Launch"} />
                <Tag title={"Iran"} />
                <Tag title={"Community"} />
                <Tag title={"Iranian"} />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col mt-20 mb-2">
            <div className="w-full flex gap-x-4">
              <BlogCardM
                classes={"lg:my-10 lg:w-1/2"}
                readingTime={"6 min read"}
                title={"What is the Irani.World platform"}
                summery={
                  "All people who have some connection to Iranian culture or ethnicity, are welcome to this platform. "
                }
                author={"Irani World"}
                publish={"Posted just now"}
                avatar={"/images/bloggers/irani-world.png"}
                cover={"/images/thumbnails/iw-1-cover.jpg"}
                info={false}
              />
              <BlogCardM
                classes={"lg:my-10 lg:w-1/2"}
                readingTime={"3 min read"}
                title={"Crafting the Vision of Irani USA from Idea to Reality"}
                summery={
                  "In the world of web design and development, there are  ... "
                }
                author={"Riv Design"}
                publish={"Posted just now"}
                avatar={"/images/bloggers/riv.png"}
                cover={"/images/thumbnails/riv-cover.jpg"}
                info={false}
              />
            </div>
          </div>
        </div>
        <div className="lg:relative w-full lg:w-1/5 lg:h-screen">
          <div className="lg:fixed w-full h-full pt-16">
            <div className="flex flex-col mx-12">
              <h3 className="text-2xl font-outfit font-semibold text-black mb-10">
                Most active bloggers
              </h3>
              <div className="flex flex-col gap-y-5">
                <ActiveBlogger
                  icon={"/images/bloggers/irani-world.png"}
                  title={"Irani World"}
                  role={"Main"}
                />
                <ActiveBlogger
                  icon={"/images/bloggers/irani-usa.png"}
                  title={"Irani World"}
                  role={"USA Platform"}
                />
                <ActiveBlogger
                  icon={"/images/bloggers/wsa.png"}
                  title={"WSA"}
                  role={"Company"}
                />
                <ActiveBlogger
                  icon={"/images/bloggers/riv.png"}
                  title={"Riv Design"}
                  role={"Company"}
                />
                <ActiveBlogger
                  icon={"/images/bloggers/wps.png"}
                  title={"WPS"}
                  role={"Community"}
                />
              </div>
            </div>
            <div className="flex flex-col mx-12 mt-10">
              <h3 className="text-2xl font-outfit font-semibold text-black mb-10">
                Tags
              </h3>
              <div className="max-w-sm flex items-center flex-wrap gap-x-2 gap-y-3">
                <Tag title={"Platform"} />
                <Tag title={"Launch"} />
                <Tag title={"Iran"} />
                <Tag title={"Community"} />
                <Tag title={"Iranian"} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
