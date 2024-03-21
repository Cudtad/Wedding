import React, { useRef, useState } from "react";
import Modal from "@/components/common/modal";

type Props = {
  handleClose: () => void;
  isOpen: boolean;
};

export default function ModalConfirmAttendance({ handleClose, isOpen }: Props) {
  // State để lưu trữ dữ liệu của form
  const [formData, setFormData] = useState({
    name: "",
    guestOf: "husband",
    numberOfPeople: 0,
    attending: true,
  });

  const formRef = useRef<HTMLFormElement>(null);

  // Hàm xử lý khi thay đổi giá trị của các trường input
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Hàm xử lý khi người dùng nhấn nút submit
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!formRef.current) {
      console.error("Form reference is null.");
      return;
    }
    const formData = new FormData(formRef.current);
    fetch(
      "https://script.google.com/macros/s/AKfycbwY3E3spph5VO36MlEbhR20OScJmQX_kFut9IBr_7voTvwBXmv-wqtplHIzxbQM2IAqmg/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div>
        <h3 className="text-center text-2xl font-semibold">Xác nhận tham dự</h3>
        <form
          className="flex flex-col gap-y-5 mt-10"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-y-1">
            <label>Tên bạn là gì: </label>
            <div className="border border-solid rounded flex-1 pl-2">
              <input
                type="text"
                name="Name"
                // value={formData.name}
                // onChange={handleInputChange}
                className="w-full outline-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-x-8">
            <label>Khách mời của: </label>
            <select
              name="Guest"
              //   value={formData.guestOf}
              //   onChange={handleInputChange}
              className="border p-1 rounded w-40"
            >
              <option value="husband">Chú rể</option>
              <option value="wife">Cô dâu</option>
            </select>
          </div>
          <div className="flex flex-col gap-y-1">
            <label>Bạn đi mấy người: </label>
            <div className="border border-solid rounded flex-1 pl-2">
              <input
                type="number"
                name="Number"
                // value={formData.numberOfPeople}
                // onChange={handleInputChange}
                className="w-full outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label>Bạn có đến tham dự được không?</label>
            <div className="flex items-center gap-x-5">
              <div className="flex items-center gap-x-1">
                <label>Có</label>
                <input
                  type="radio"
                  name="Attendance"
                  value="true"
                  //   checked={formData.attending}
                  //   onChange={handleInputChange}
                />
              </div>
              <div className="flex items-center gap-x-1">
                <label>Không</label>
                <input
                  type="radio"
                  name="Attendance"
                  value="false"
                  //   checked={!formData.attending}
                  //   onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="text-end space-x-2">
            <button
              className="border border-solid rounded px-4 py-1 bg-gray-200 hover:bg-opacity-85"
              onClick={handleClose}
            >
              Huỷ
            </button>
            <button
              className="border border-solid rounded px-4 py-1 bg-[#c89d9c] hover:bg-opacity-85"
              type="submit"
            >
              Xác nhận
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
