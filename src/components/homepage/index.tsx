"use client";

import { useEffect, useState } from "react";
import "./style.scss";
import dayjs from "dayjs";
import CountdownTimer from "./component/CountdownTimer";
import Couple from "./component/Couple";
import Image from "next/image";

var duration = require("dayjs/plugin/duration");

dayjs.extend(duration);

const sweetsMemoryList = [
  "/assets/images/sweet-memory/sweet_memory1.jpeg",
  "/assets/images/sweet-memory/sweet_memory2.jpeg",
  "/assets/images/sweet-memory/sweet_memory3.jpeg",
  "/assets/images/sweet-memory/sweet_memory4.jpeg",
  "/assets/images/sweet-memory/sweet_memory5.jpeg",
  "/assets/images/sweet-memory/sweet_memory6.jpeg",
];

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
      <div className="max-w-screen-xl mx-auto pt-10 pb-16">
        <div className="pb-10">
          <div className="flex flex-col items-center gap-y-2">
            <img
              src="/assets/images/couple/sec-title-flower.png"
              alt="sec-title-flower"
            />
            <h3 className=" font-allura text-5xl text-black">
              Cô dâu & Chú rể
            </h3>
            <p className=" text-center font-poppins">
              Yêu và được yêu là niềm hạnh phúc lớn lao nhất trong cuộc đời mỗi
              con người, là <br /> món quà quý giá mà cuộc sống đã ban tặng cho
              chúng ta.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-96">
          <div id="couple-husband" className="w-96 h-full"></div>
          <div className=" bg-[#f9f9f9] flex flex-col justify-center px-5 w-96 h-full">
            <h3 className=" font-allura text-4xl text-black">Đức Đạt</h3>
            <p className=" text-xs font-normal">
              Em là động lực để anh viết tiếp những khát khao
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-96">
          <div className=" bg-[#f9f9f9] flex flex-col justify-center px-5 w-96 h-full">
            <h3 className=" font-allura text-4xl text-black">Ngọc Ánh</h3>
            <p className=" text-xs font-normal">
              Con đường em chọn là con đường có anh
            </p>
          </div>
          <div id="couple-wife" className="w-96 h-full"></div>
        </div>
      </div>
      <section id="section-accessibilities" className="w-full">
        <div className="flex item-center justify-center gap-x-4 py-7">
          <div className="bg-[#c89d9c] text-base font-medium font-poppins flex items-center gap-x-1 px-7 py-3 text-white cursor-pointer">
            <Image
              width={20}
              height={20}
              src="/assets/images/icons/wishes.png"
              alt="Icon wishes"
            />
            Gửi lời chúc
          </div>
          <div className="bg-[#c89d9c] text-base font-medium font-poppins flex items-center gap-x-1 px-7 py-3 text-white cursor-pointer">
            <Image
              width={20}
              height={20}
              src="/assets/images/icons/rsvp4.png"
              alt="Icon email"
            />
            Xác nhận tham dự
          </div>
          <div className="bg-[#c89d9c] text-base font-medium font-poppins flex items-center gap-x-1 px-7 py-3 text-white cursor-pointer">
            <Image
              width={20}
              height={20}
              src="/assets/images/icons/money_bag.png"
              alt="Icon money"
            />
            Mừng cưới
          </div>
        </div>
      </section>

      <section className="pt-20 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center gap-y-4">
          <Image
            width={126}
            height={60}
            src="/assets/images/couple/sec-title-flower.png"
            alt="flower"
          />
          <h3 className=" font-allura text-5xl text-black">Chuyện tình yêu</h3>
          <p className=" text-base text-[#444] font-poppins">
            Yêu nhau là sống bên nhau đến trọn đời là cùng chung vui và cùng
            gánh vác.
          </p>
        </div>
        <div className="gap-x-32 mt-12 shadow-2xl py-16 relative">
          <div className="grid grid-cols-11 ">
            <div className="text-end text-4xl font-allura font-semibold mt-40 col-span-5">
              Lần đầu chúng ta gặp nhau
            </div>
            <div className="col-span-1 flex flex-col items-center justify-between">
              <div className="h-6 w-6 rounded-full bg-[#c89d9c] -m-8"></div>
              <div className="h-6 w-6 rounded-full bg-[#c89d9c] -m-8 relative">
                <div className=" border border-dashed border-[#c89d9c] w-28 h-0.5 mt-3 absolute right-11"></div>
                <div className="h-4 w-4 rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"></div>
              </div>
            </div>
            <div className="col-span-5 h-[450px]">
              <Image
                width={450}
                height={450}
                src="/assets/images/couple/couple_husband.jpeg"
                alt="Story image"
                className="object-cover object-top h-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-11 mt-10">
            <div className="col-span-5 h-[450px] flex justify-end">
              <Image
                width={450}
                height={450}
                src="/assets/images/couple/couple_husband.jpeg"
                alt="Story image"
                className="object-cover object-top h-full"
              />
            </div>
            <div className="col-span-1 flex flex-col items-center justify-end">
              <div className="h-6 w-6 rounded-full bg-[#c89d9c] -m-8 relative">
                <div className=" border border-dashed border-[#c89d9c] w-28 h-0.5 mt-3 ml-11 "></div>
                <div className="h-4 w-4 rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"></div>
              </div>
            </div>
            <div className="text-start text-4xl font-allura font-semibold mt-40 col-span-5">
              Ngày cô ấy đồng ý lời tỏ tình
            </div>
          </div>

          <div className="grid grid-cols-11 mt-10">
            <div className="text-end text-4xl font-allura font-semibold mt-40 col-span-5">
              Ngày cô ấy đồng ý lời cầu hôn
            </div>

            <div className="col-span-1 flex flex-col items-center justify-end">
              <div className="h-6 w-6 rounded-full bg-[#c89d9c] -m-8 relative">
                <div className=" border border-dashed border-[#c89d9c] w-28 h-0.5 mt-3 absolute right-11 "></div>
                <div className="h-4 w-4 rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"></div>
              </div>
            </div>
            <div className="col-span-5 h-[450px] flex justify-start">
              <Image
                width={450}
                height={450}
                src="/assets/images/couple/couple_husband.jpeg"
                alt="Story image"
                className="object-cover object-top h-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-11 mt-10">
            <div className="col-span-5 h-[450px] flex justify-end">
              <Image
                width={450}
                height={450}
                src="/assets/images/couple/couple_husband.jpeg"
                alt="Story image"
                className="object-cover object-top h-full"
              />
            </div>
            <div className="col-span-1 flex flex-col items-center justify-end">
              <div className="h-6 w-6 rounded-full bg-[#c89d9c] -m-8 relative"></div>
            </div>
            <div className="text-start text-4xl font-allura font-semibold mt-40 col-span-5">
              Ngày chúng ta bên nhau trọn đời
            </div>
          </div>

          <div className="w-1 absolute top-8 bottom-8 left-1/2 -translate-x-1/2 bg-[#c89d9c]"></div>
        </div>
      </section>

      <section className="mt-40 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center gap-y-4">
          <Image
            width={126}
            height={60}
            src="/assets/images/couple/sec-title-flower.png"
            alt="flower"
          />
          <h3 className=" font-allura text-5xl text-black">Sweets memories</h3>
          <p className=" text-base text-[#444] font-poppins">
            Yêu nhau là sống bên nhau đến trọn đời là cùng chung vui và cùng
            gánh vác.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {sweetsMemoryList.map((item) => {
            return (
              <div key={item} className="w-full h-full overflow-hidden">
                <img
                  src={item}
                  alt="Image sweet memories"
                  className="hover:scale-110 transition-all"
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
