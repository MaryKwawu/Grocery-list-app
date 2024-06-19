import { IGrocery } from "@/types/grocery";
import Link from "next/link";
import { Children } from "react";
import { RiAddBoxLine } from "react-icons/ri";
import Grocery from "./grocery-item/[id]/page";

export default function Home() {
  const placeholder = Array.from({ length: 10 }).map(
    (_, i) => ({ id: i.toString(), text: "Random" } as IGrocery)
  );
  return (
    <main className="flex flex-col gap-16 p-7">
      <div className="flex mt-5 justify-between">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs pb-2"
        />
        <Link href="/add-grocery">
          <RiAddBoxLine className="" size={40} />
        </Link>
        <Link href="/grocery-item"></Link>
      </div>
      <div className="flex flex-row gap-5 flex-wrap">
        {Children.toArray(
          placeholder.map((grocery) => <Grocery grocery={grocery} />)
        )}
      </div>
    </main>
  );
}

export const dynamic = "force-dynamic";
