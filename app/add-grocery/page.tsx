"use client";
import { AiOutlinePlus } from "react-icons/ai";
import { FormEventHandler, useState } from "react";

function AddGrocery() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskvalue] = useState<string>("");

  const handleSubmitnewGrocery: FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    await fetch("/grocery", {
      method: "POST",
      body: JSON.stringify({
        text: newTaskValue,
      }),
      cache: "no-cache",
    });
    setNewTaskvalue("");
    setModalOpen(false);
  };

  return (
    <div className="w-1/3 mx-auto pt-10">
      <h3 className="font-bold text-lg text-center mb-10">Add new grocery</h3>
      <form onSubmit={handleSubmitnewGrocery} className="space-y-5">
        <div className="flex items-center">
          <button className="btn btn-primary w-15 rounded-full mr-10">
            <AiOutlinePlus className="" size={18} />
          </button>
          <div className="space-y-5">
            <input
              value={newTaskValue}
              onChange={(e) => setNewTaskvalue(e.target.value)}
              type="text"
              placeholder="Name"
              className="input input-bordered  w-full"
            />

            <textarea
              name="description"
              id=""
              className="input input-bordered w-full"
              placeholder="description "
            ></textarea>
            <button className="btn btn-primary">submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddGrocery;
