import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";

const OrderPlacedModel = ({
  isAdmin = false,
  price = "20000",
  show,
  onCancel1,
}) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-900 dark:bg-white dark:bg-opacity-20 bg-opacity-30 md:p-4">
      <div className="bg-white dark:bg-slate-900 dark:text-white p-6 w-full h-full md:h-[70%] md:w-1/3  flex flex-col items-center justify-center rounded-lg shadow-lg relative">
        <ImCross
          className="absolute top-4 right-4 cursor-pointer"
          onClick={onCancel1}
        />
        <div className="text-center mb-16 flex flex-col items-center">
          <img
            className="w-28 h-28"
            src="https://img.freepik.com/free-vector/circle-tick-check-mark-paint-brush-stroke_78370-645.jpg?t=st=1728538747~exp=1728542347~hmac=e77d684e37295445c06bc03cd33eef328670b0707709f0e323e6926f194b3c08&w=740"
            alt="Pic"
          />
          <h1 className="w-[22vw] font-bold tracking-tight text-3xl text-center text-primary-red">
            Your Order has been placed
          </h1>
        </div>
        {isAdmin ? (
          <div className="flex flex-col justify-center items-center gap-2">
            <span>
              <h1 className="font-bold tracking-tight text-[2vw] text-centre text-black">
                The estimated Price is
              </h1>
            </span>
            <span className="text-center border-2 border-primary-red px-8 py-2 rounded-full bg-primary-red text-white">
              Rs. {price}
            </span>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default OrderPlacedModel;
