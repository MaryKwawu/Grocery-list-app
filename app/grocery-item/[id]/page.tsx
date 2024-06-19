"use client";
import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "../../../components/Modal";
import { MdArrowBackIosNew } from "react-icons/md";
import testImage from "@/images/grocery.jpg";

const Grocery = () => {
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);

  const [groceryToEdit, setGroceryToEdit] = useState<string>();

  return (
    <div className="w-1/2 mx-auto">
      <div className="border border-blue-500 p-3 w-fit rounded my-10">
        <MdArrowBackIosNew className="" size={25} />
      </div>
      <div className="flex justify-between">
        {" "}
        <div>
          <img src={testImage.src} alt="" className="h-48" />
        </div>
        <div>
          <div className="mb-10">
            <h1>Name</h1>
          </div>
          <div>
            <p>Description</p>
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <FiEdit
              onClick={() => setOpenModalDeleted(true)}
              cursor="pointer"
              className="text-blue-500"
              size={25}
            />
          </div>
          <div>
            <FiTrash2
              onClick={() => setOpenModalDeleted(true)}
              cursor="pointer"
              className="text-red-500"
              size={25}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grocery;
