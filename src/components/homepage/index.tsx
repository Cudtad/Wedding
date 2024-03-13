"use client";

import { useEffect, useState } from "react";
import "./style.scss";
import dayjs from "dayjs";
import CountdownTimer from "./component/CountdownTimer";
import Couple from "./component/Couple";

var duration = require("dayjs/plugin/duration");

dayjs.extend(duration);

/* eslint-disable @next/next/no-img-element */
export default function HomePage() {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const slides = [
    {
      src: "/assets/images/home/bg-home-1.jpg",
      season: "You are getting married",
      title: "New Season",
      button: "Shop now",
    },
    {
      src: "/assets/images/home/bg-home-2.jpg",
      season: "Men New-Season",
      title: "Jackets & Coats",
      button: "Shop now",
    },
    {
      src: "/assets/images/home/bg-home-3.jpg",
      season: "Men Collection 2018",
      title: "New Arrivals",
      button: "Shop now",
    },
  ];

  useEffect(() => {
    const intervalSlide = setInterval(() => {
      setSlideIndex((prev) => (slideIndex + 1) % slides.length);
    }, 10000);
    return () => clearInterval(intervalSlide);
  }, [slides]);

  const previousSlide = () => {
    setSlideIndex((slideIndex + slides.length - 1) % slides.length);
  };

  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % slides.length);
  };

  return (
    <>
      <div className="w-full h-screen relative">
        <div className="my-slider">
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              className={`absolute h-full w-full text-black-text ${
                slideIndex === index ? "block" : "hidden"
              } e-commerce-slider`}
            >
              <img
                src={slide.src}
                alt="bg-home"
                className="object-cover h-full w-full"
              />
              <div className="w-full h-full bg-black absolute top-0 left-0 opacity-40"></div>
            </div>
          ))}
          {/* <button
            onClick={previousSlide}
            className="btn-slider absolute top-1/2 left-0 transform -translate-y-1/2 hidden text-gray-2"
          >
            previous
          </button>
          <button
            onClick={nextSlide}
            className="btn-slider absolute top-1/2 right-0 transform -translate-y-1/2 hidden text-gray-2"
          >
            next
          </button> */}
          <div className=" absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex items-center flex-col justify-center">
            <h1 className="font-allura text-7xl font-semibold text-orange-100">
              Ngọc Ánh & Đức Đạt
            </h1>
            <p className=" font-poppins text-xl text-center font-semibold my-2">
              You are getting married on March 31, 2024
            </p>
            <CountdownTimer targetDate={dayjs("2024-03-31")} />
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto mt-10 flex items-center">
        <img
          src="/assets/images/couple/sec-title-flower.png"
          alt="sec-title-flower"
        />
      </div>
    </>
  );
}
