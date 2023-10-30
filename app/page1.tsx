"use client";

import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import OverlayMenu from "@/components/Overlay";

import ComingSoon from "@/components/ComingSoon";

export default function Home() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 10,
    });
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, []);

  return (
    <>
      <OverlayMenu />
      {/* <ComingSoon/> */}
    </>
  );
}
