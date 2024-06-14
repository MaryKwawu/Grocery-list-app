import { RiAddBoxLine } from "react-icons/ri";
import Link from "next/link";
import { RiArrowGoBackFill } from "react-icons/ri";

export default function Home() {
  return (
    <main>
      <div className="flex mt-5 justify-between p-7">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs pb-2"
        />
        <Link href="/add-grocery">
          <RiAddBoxLine className="" size={40} />
        </Link>
      </div>
    </main>
  );
}

export const dynamic = "force-dynamic";
