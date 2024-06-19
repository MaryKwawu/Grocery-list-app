

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

