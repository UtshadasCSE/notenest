import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="bg-yellow-200 p-2 my-2 rounded-md flex justify-between">
          <Link href={"/"} className="p-3 font-bold uppercase">
            Notenest.
          </Link>
          <Link
            href={"/addnote"}
            className="p-3 font-semibold bg-white text-black rounded-lg"
          >
            Add Note
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
