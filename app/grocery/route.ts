// import { saveToDb } from "@/utils";
// import grocery from "@/public/data/grocery.json";
// import { NextResponse } from "next/server";
// import { redirect } from "next/navigation";

// export async function GET(
//   _request: Request,
//   { params }: { params: { id: string } }
// ) {
//   const { id } = params;

//   const item = grocery.items.find((groceries) => groceries.id === id);

//   if (item) {
//     return Response.json(item);
//   }

//   return new NextResponse(JSON.stringify(null), {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     status: 404,
//   });
// }

// export async function PATCH(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//   const body = (await request.json()) as { text: string };
//   const { text } = body;
//   const { id } = params;

//   const itemIndex = grocery.items.findIndex((groceries) => groceries.id === id);

//   if (itemIndex === -1) {
//     return new NextResponse(JSON.stringify(null), {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       status: 404,
//     });
//   }

//   grocery.items[itemIndex] = {
//     ...grocery.items[itemIndex],
//     text
//   };
 
//   saveToDb(grocery);

//   return redirect("/");
// }

// export async function DELETE(
//   _request: Request,
//   { params }: { params: { id: string } }
// ) {
//   const { id } = params;

//   const tasks = grocery.items.filter((groceries) => groceries.id !== id);

//   grocery.items = tasks;

//   saveToDb(grocery);

//   return redirect("/");
// }
import grocery from "@/public/data/grocery.json";

import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { redirect } from "next/navigation";
import { saveToDb } from "@/utils";

export async function GET(request: Request) {
    console.log("url", request.url);
  return NextResponse.json(grocery.items);
}

export async function POST(request: Request) {
  const body = (await request.json()) as { text: string };
  const { text } = body;

  const newGrocery = {
    id: uuidv4(),
    text,
  };

  grocery.items.push(newGrocery);
  saveToDb(grocery);

  return redirect("/");
}

