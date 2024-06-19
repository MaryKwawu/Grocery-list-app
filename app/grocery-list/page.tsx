import React from "react";
import Grocery from "../grocery-item/[id]/page";
import { IGrocery } from "@/types/grocery";
import { BASE_URL } from "@/constants";

const GroceryList = async () => {
  let response;
  try {
    response = await fetch(`${BASE_URL}/grocery`, {
      cache: "no-cache",
    });
  } catch (error) {
    console.log(error);
  }

  let grocery: IGrocery[] = [];
  if (response) {
    console.log("RESSSS", response);
    grocery = await response.json();
  }

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Grocery</th>

            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {grocery.map((grocery) => (
            <Grocery key={grocery.id} grocery={grocery} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroceryList;
