"use client";
import { IGrocery } from "@/types/grocery";
import { FormEventHandler, useEffect, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Modal from "../../components/Modal";

interface GroceryProps {
  grocery: IGrocery;
}

const Grocery: React.FC<GroceryProps> = ({ grocery }) => {
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);

  const [groceryToEdit, setGroceryToEdit] = useState<string>();

  useEffect(() => {
    setGroceryToEdit(grocery.text);
  }, []);

  const handleSubmitEditGrocery: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    await fetch(`/grocery/${grocery.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        text: groceryToEdit,
      }),
      cache: "no-cache",
    });

    setOpenModalEdit(false);
  };

  const handleDeleteGrocery = async (id: string) => {
    await fetch(`/grocery/${id}`, {
      method: "DELETE",
      cache: "no-cache",
    });
    setOpenModalDeleted(false);
  };

  return (
    <tr key={grocery.id}>
      <td className="w-full">{grocery.text}</td>
      <td className="flex gap-5">
        <FiEdit
          onClick={() => setOpenModalEdit(true)}
          cursor="pointer"
          className="text-blue-500"
          size={25}
        />

        <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEditGrocery}>
            <h3 className="font-bold text-lg"> grocery</h3>
            <div className="modal-action">
              <input
                value={groceryToEdit}
                onChange={(e) => setGroceryToEdit(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash2
          onClick={() => setOpenModalDeleted(true)}
          cursor="pointer"
          className="text-red-500"
          size={25}
        />
        <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}>
          <h3>Are sure you want this grocery to be deleted</h3>
          <div className="modal-action">
            <button
              onClick={() => handleDeleteGrocery(grocery.id)}
              className="btn"
            >
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Grocery;
