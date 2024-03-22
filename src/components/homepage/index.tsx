"use client";

import { useEffect, useState } from "react";
import "./style.scss";
import dayjs from "dayjs";
import CountdownTimer from "./component/CountdownTimer";
import Couple from "./component/Couple";
import Image from "next/image";
import Modal from "../common/modal";
import ModalConfirmAttendance from "./component/ModalConfirmAttendance";
import useMobile from "@/hooks/useMobile";

var duration = require("dayjs/plugin/duration");

dayjs.extend(duration);

const sweetsMemoryList = [
  "/assets/images/sweet-memory/sweet_memory1.jpeg",
  "/assets/images/sweet-memory/sweet_memory2.jpeg",
  "/assets/images/sweet-memory/sweet_memory3.jpeg",
  "/assets/images/sweet-memory/sweet_memory4.jpg",
  "/assets/images/sweet-memory/sweet_memory5.jpeg",
  "/assets/images/sweet-memory/sweet_memory6.jpeg",
  "/assets/images/sweet-memory/sweet_memory7.jpg",
  "/assets/images/sweet-memory/sweet_memory8.jpg",
  "/assets/images/sweet-memory/sweet_memory9.jpg",
  "/assets/images/sweet-memory/sweet_memory10.jpg",
  "/assets/images/sweet-memory/sweet_memory11.jpg",
  "/assets/images/sweet-memory/sweet_memory12.jpg",
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

  const [indexImage, setIndexImage] = useState<number>(-1);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenModalAttendance, setIsOpenModalAttendance] =
    useState<boolean>(false);

  const isMobile = useMobile();

  useEffect(() => {
    const intervalSlide = setInterval(() => {
      setSlideIndex((prev) => (slideIndex + 1) % slides.length);
    }, 10000);
    return () => clearInterval(intervalSlide);
  }, [slides]);

  const handleImageModal = (index: number) => {
    setIsOpenModal(true);
    setIndexImage(index);
  };

  const handleCloseModalAttendance = () => {
    setIsOpenModalAttendance(false);
  };

  const [showConfirmation, setShowConfirmation] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
      }, 6000); // 3 seconds
    }, 9000); // 9 seconds (6 seconds to show + 3 seconds to hide)

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative">
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
          <div className=" absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex items-center flex-col justify-center">
            <h1 className="font-allura text-3xl md:text-7xl font-semibold text-orange-100">
              Ngọc Ánh & Đức Đạt
            </h1>
            <p className=" font-poppins text-xs md:text-xl text-center font-semibold my-2">
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
              className=" scale-90 md:scale-100"
            />
            <h3 className=" font-allura text-4xl md:text-5xl text-black font-medium">
              Couple
            </h3>
            <p className=" text-center font-poppins text-xs px-2 md:px-0 md:text-base">
              Yêu và được yêu là niềm hạnh phúc lớn lao nhất trong cuộc đời mỗi
              con người, là <br /> món quà quý giá mà cuộc sống đã ban tặng cho
              chúng ta.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center w-full h-[600px] md:h-96">
          <div id="couple-husband" className="w-96 h-full"></div>
          <div className=" bg-[#f9f9f9] flex flex-col justify-start py-20 md:pt-0 md:justify-center px-5 w-96 md:h-full gap-y-2">
            <h3 className=" font-allura text-4xl md:text-5xl text-black">
              Đức Đạt
            </h3>
            <p className=" text-xs md:text-sm font-poppins font-normal">
              Em là động lực để anh viết tiếp những khát khao
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center h-[600px] md:h-96">
          <div className=" bg-[#f9f9f9] flex flex-col items-end justify-start py-20 md:justify-center px-5 w-96 md:h-full gap-y-2">
            <h3 className=" font-allura text-4xl md:text-5xl text-black">
              Ngọc Ánh
            </h3>
            <p className=" text-xs md:text-sm  font-poppins font-normal">
              Con đường em chọn là con đường có anh
            </p>
          </div>
          <div id="couple-wife" className="w-96 h-full"></div>
        </div>
      </div>
      <section id="section-accessibilities" className="w-full">
        <div className="flex item-center justify-center gap-x-4 py-7 px-5 md:px-0">
          <div
            className="bg-[#c89d9c] text-sm md:text-base font-medium font-poppins flex items-center gap-x-1 px-2 py-1 md:px-7 md:py-3 text-white cursor-pointer hover:bg-opacity-90"
            onClick={() => setIsOpenModalAttendance(true)}
          >
            <Image
              width={isMobile ? 16 : 20}
              height={isMobile ? 16 : 20}
              src="/assets/images/icons/rsvp4.png"
              alt="Icon email"
            />
            Xác nhận tham dự
          </div>
          <div
            className="bg-[#c89d9c] text-sm md:text-base font-medium font-poppins flex items-center gap-x-1 px-2 py-1 md:px-7 md:py-3 text-white cursor-pointer hover:bg-opacity-90"
            onClick={() => {
              window.scrollTo({
                top: 8400,
                behavior: "smooth",
              });
            }}
          >
            <Image
              width={isMobile ? 16 : 20}
              height={isMobile ? 16 : 20}
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
            className=" scale-90 md:scale-100"
          />
          <h3 className=" font-allura text-4xl md:text-5xl text-black font-medium">
            Stories
          </h3>
          {!isMobile && (
            <p className=" text-xs md:text-base text-[#444] font-poppins px-4 md:px-0">
              Yêu nhau là sống bên nhau đến trọn đời là cùng chung vui và cùng
              gánh vác.
            </p>
          )}
        </div>
        <div className="gap-x-32 mt-12 shadow-2xl md:py-16 relative">
          <div className="grid grid-cols-1 gap-y-3 md:gap-y-0 px-2 md:px-0 md:grid-cols-11">
            <div className="text-center md:text-end text-3xl md:text-4xl font-allura font-semibold md:mt-40 col-span-5">
              Lần đầu chúng ta gặp nhau
              <p className="font-poppins text-xs md:text-sm font-normal pl-5 mt-2">
                Cái nhìn đầu tiên chứa đựng sự tò mò và kỳ vọng, và từ đó, một
                cuộc trò chuyện bắt đầu, giống như việc mở ra một trang sách mới
                trong cuộc đời.
              </p>
            </div>
            {!isMobile && (
              <div className="col-span-1 flex flex-col items-center justify-between">
                <div className="h-6 w-6 rounded-full bg-[#c89d9c] -m-8"></div>
                <div className="h-6 w-6 rounded-full bg-[#c89d9c] -m-8 relative">
                  <div className=" border border-dashed border-[#c89d9c] w-28 h-0.5 mt-3 absolute right-11"></div>
                  <div className="h-4 w-4 rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"></div>
                </div>
              </div>
            )}

            <div className="col-span-5 h-[450px]">
              <Image
                width={450}
                height={450}
                src="/assets/images/sweet-memory/sweet_memory8.jpg"
                alt="Story image"
                className="object-cover object-center h-full"
              />
            </div>
          </div>

          <div className="md:grid flex flex-col-reverse gap-y-3 md:gap-y-0 px-2 md:px-0 md:grid-cols-11 md:mt-10">
            <div className="col-span-5 h-[450px] flex justify-end">
              <Image
                width={450}
                height={450}
                src="/assets/images/story/story2.jpg"
                alt="Story image"
                className="object-cover object-center h-full"
              />
            </div>
            {!isMobile && (
              <div className="col-span-1 flex flex-col items-center justify-end">
                <div className="h-6 w-6 rounded-full bg-[#c89d9c] -m-8 relative">
                  <div className=" border border-dashed border-[#c89d9c] w-28 h-0.5 mt-3 ml-11 "></div>
                  <div className="h-4 w-4 rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"></div>
                </div>
              </div>
            )}
            <div className="text-center md:text-start text-3xl md:text-4xl font-allura font-semibold mt-12 md:mt-40 col-span-5">
              Ngày cô ấy đồng ý lời tỏ tình
              <p className=" font-poppins text-xs md:text-sm font-normal pr-5 mt-2">
                Một buổi chiều nhẹ nhàng, cùng đi dạo dưới hàng cây đổ bóng, gió
                nhè nhàng thổi qua tóc của cô ấy. Tôi đã nhấp nhổm dũng cảm để
                thổ lộ tình cảm của mình và ánh mắt của cô ấy phản ánh sự ngạc
                nhiên và ấm áp.
              </p>
            </div>
          </div>

          <div className="md:grid flex flex-col gap-y-3 md:gap-y-0 px-2 md:px-0 md:grid-cols-11 md:mt-10">
            <div className="text-center md:text-end text-3xl md:text-4xl font-allura font-semibold mt-12 md:mt-40 col-span-5">
              Ngày cô ấy đồng ý lời cầu hôn
              <p className=" font-poppins text-xs md:text-sm font-normal pl-5 mt-2">
                Tôi đã chuẩn bị kỹ lưỡng cho ngày quan trọng này, từ việc chọn
                lựa đúng đắn chiếc nhẫn đính hôn đến việc lên kế hoạch một bữa
                tối đặc biệt. Dưới ánh đèn lung linh và không khí ấm áp, tôi đã
                quỳ gối và thổ lộ tình cảm của mình, Với một nụ cười hạnh phúc
                và một lời đồng ý ôm trọn niềm vui và hạnh phúc.
              </p>
            </div>

            {!isMobile && (
              <div className="col-span-1 flex flex-col items-center justify-end">
                <div className="h-6 w-6 rounded-full bg-[#c89d9c] -m-8 relative">
                  <div className=" border border-dashed border-[#c89d9c] w-28 h-0.5 mt-3 absolute right-11 "></div>
                  <div className="h-4 w-4 rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"></div>
                </div>
              </div>
            )}
            <div className="col-span-5 h-[450px] flex justify-start">
              <Image
                width={450}
                height={450}
                src="/assets/images/story/story3.jpg"
                alt="Story image"
                className="object-cover object-center h-full"
              />
            </div>
          </div>

          <div className="md:grid flex flex-col-reverse gap-y-3 md:gap-y-0 px-2 md:px-0 md:grid-cols-11 md:mt-10">
            <div className="col-span-5 h-[450px] flex justify-end">
              <Image
                width={450}
                height={450}
                src="/assets/images/story/story4.jpg"
                alt="Story image"
                className="object-cover object-center h-full"
              />
            </div>
            {!isMobile && (
              <div className="col-span-1 flex flex-col items-center justify-end">
                <div className="h-6 w-6 rounded-full bg-[#c89d9c] -m-8 relative"></div>
              </div>
            )}
            <div className="text-center md:text-start text-3xl md:text-4xl font-allura font-semibold mt-12 md:mt-40 col-span-5">
              Ngày chúng ta bên nhau trọn đời
              <p className=" font-poppins text-xs md:text-sm font-normal pl-5 mt-2">
                Tiếng nhạc nhẹ nhàng vang lên trong không gian ấm áp, chiếc váy
                cưới trắng tinh khôi ôm sát với vóc dáng của cô dâu như một nàng
                công chúa trong truyện cổ tích. Chú rể trang trọng trong bộ vest
                lịch lãm. Cuối cùng chúng ta cũng có nhau
              </p>
            </div>
          </div>

          {!isMobile && (
            <div className="w-1 absolute top-8 bottom-8 left-1/2 -translate-x-1/2 bg-[#c89d9c]"></div>
          )}
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
          <h3 className=" font-allura text-4xl md:text-5xl text-black">
            Sweets memories
          </h3>
          <p className=" text-center text-xs md:text-base text-[#444] font-poppins">
            Yêu nhau là sống bên nhau đến trọn đời là cùng chung vui và cùng
            gánh vác.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 px-4 md:px-0">
          {[0, 1, 2, 3].map((row) => (
            <div key={row} className="grid gap-4">
              {[0, 1, 2].map((col) => (
                <div
                  key={col}
                  className=" overflow-hidden"
                  onClick={() => handleImageModal(row * 3 + col)}
                >
                  <img
                    className="max-w-full rounded-md hover:scale-110 transition-all duration-500 hover:cursor-pointer"
                    src={sweetsMemoryList[row * 3 + col]}
                    alt={`Image ${row * 3 + col}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="mt-40 max-w-screen-xl mx-auto mb-40">
        <div className="flex flex-col items-center gap-y-4">
          <img src="/assets/images/couple/sec-title-flower.png" alt="" />
          <h3 className=" font-allura text-5xl font-medium text-black">
            Our Wedding
          </h3>
          <p className=" text-black">Thời gian & Địa điểm</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-14">
          <div className="flex flex-col">
            <div className="overflow-hidden border-4 border-solid border-[#c89d9c] p-10 md:border-b-2 md:border-r-2 relative">
              <img
                src="/assets/images/our-wedding/husband.jpg"
                alt="Image husband"
                className=" blur-sm"
              />
              <div className=" px-8 py-3 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h3 className=" text-4xl font-allura font-medium">
                  Lễ cưới nhà trai
                </h3>
              </div>
            </div>
            <div className="border-4 border-solid border-[#c89d9c] md:border-t-2 p-10 md:border-r-2 md:space-y-2">
              <li>Tiệc độc thân: Thứ 7, 30-03-2024 4:30 PM</li>
              <li>Tiệc cưới: Chủ nhật, 31-03-2024 8:30 AM</li>
              <li>
                Địa chỉ: thôn Bình Đê, xã Gia Khánh, huyện Gia Lộc, tỉnh Hải
                Dương
              </li>
              <li>SDT chú rể: 0987505697</li>
              <a
                href="https://www.google.com/maps/place/Qu%E1%BA%A7y+thu%E1%BB%91c+Gia+Kh%C3%A1nh/@20.8625698,106.3181437,19.99z/data=!4m6!3m5!1s0x313591ce4539ec4f:0xd05f7904411f34b1!8m2!3d20.8626853!4d106.3182734!16s%2Fg%2F11t9r3glt4?entry=ttu"
                target="_blank"
                className="block mt-5 underline text-[#c89d9c]"
              >
                Google Map
              </a>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-col">
            <div className="border-4 border-solid border-[#c89d9c] p-10 md:border-b-2 md:border-l-2 md:space-y-2">
              <li>Tiệc độc thân: Thứ 7, 30-03-2024 4:30 PM</li>
              <li>Tiệc cưới: Chủ nhật, 31-03-2024 7:00 AM</li>
              <li>
                Địa chỉ: Khu trung tâm xã Hùng Dũng, huyện Hưng Hà, tỉnh Thái
                Bình
              </li>
              <li>SDT cô dâu: 0984053166</li>
              <a
                href="https://www.google.com/maps/place/UBND+X%C3%A3+H%C3%B9ng+D%C5%A9ng/@20.6311276,106.2456058,19.69z/data=!4m6!3m5!1s0x3135eb8855555555:0x7284c81ccd462e42!8m2!3d20.6315098!4d106.2457039!16s%2Fg%2F1tfjybdy?entry=ttu"
                target="_blank"
                className="block mt-5 underline text-[#c89d9c]"
              >
                Google Map
              </a>
            </div>
            <div className="overflow-hidden border-4 border-solid border-[#c89d9c] p-10 md:border-t-2 md:border-l-2 relative">
              <img
                src="/assets/images/our-wedding/wife.jpg"
                alt="Image husband"
                className=" blur-sm"
              />
              <div className=" px-8 py-3 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h3 className=" text-4xl font-allura font-medium">
                  Lễ cưới nhà gái
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 bg-[#F2EDED]">
        <div className="bg-[#F2EDED] max-w-screen-md mx-auto pb-20 flex flex-col items-center">
          <img
            src="/assets/images/couple/sec-title-flower.png"
            alt=""
            className="mt-10"
          />
          <h3 className="text-center pt-5 pb-10 font-allura text-4xl md:text-5xl font-medium">
            Hộp mừng cưới
          </h3>
          <div className="flex flex-col md:flex-row mb:justify-between items-center mt-5">
            <div className="border-2 border-solid border-[#c89d9c] rounded-md p-10 bg-white">
              <h3 className="text-center">Mừng cưới chú rể</h3>
              <div className="mt-5  flex justify-center">
                <img
                  src="/assets/images/donate/qr_code_husband.jpg"
                  alt="Image QR Code"
                  className="w-40 h-40 border-2 border-solid rounded-sm"
                />
              </div>
              <div className="mt-5 flex flex-col justify-center items-center gap-y-2">
                <p>Ngân hàng: BIDV</p>
                <p>Tên tài khoản: Nguyễn Đức Đạt</p>
                <p>Số tài khoản: 2171029104</p>
                <p>Chi nhánh: BIDV-CN TU LIEM</p>
              </div>
            </div>
            <div>
              <img
                className="w-28 h-28"
                src="/assets/images/donate/pig_bank.png"
                alt="Pig Bank"
              />
            </div>
            <div className="border-2 border-solid border-[#c89d9c] rounded-md p-10 bg-white">
              <h3 className="text-center">Mừng cưới cô dâu</h3>
              <div className="mt-5  flex justify-center">
                <img
                  src="/assets/images/donate/qr_code_wife.jpg"
                  alt="Image QR Code"
                  className="w-40 h-40 border-2 border-solid rounded-sm"
                />
              </div>
              <div className="mt-5 flex flex-col justify-center items-center gap-y-2">
                <p>Ngân hàng: Vietcombank</p>
                <p>Tên tài khoản: Pham Ngọc Ánh</p>
                <p>Số tài khoản: 1041267657</p>
                <p>Chi nhánh: Trụ sở CN Tây Hà Nội</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="w-12 h-12 flex items-center justify-center fixed bottom-20 right-10 z-50 bg-[#f38d8d] rounded-full hover:cursor-pointer"
        onClick={() => setIsOpenModalAttendance(true)}
      >
        <img
          src="/assets/images/icons/rsvp4.png"
          alt="rsvp4"
          className="w-8 h-8"
        />
        {showConfirmation && (
          <div id="attendance" className="fixed bottom-25 right-24 z-50 ">
            <p className="bg-white p-2 rounded-md shadow-md">
              Xác nhận tham gia
            </p>
          </div>
        )}
      </div>
      <ModalConfirmAttendance
        isOpen={isOpenModalAttendance}
        handleClose={handleCloseModalAttendance}
      />
      <Modal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <img
          src={sweetsMemoryList[indexImage]}
          alt="Modal Image"
          className=" object-cover"
        />
      </Modal>
    </div>
  );
}
