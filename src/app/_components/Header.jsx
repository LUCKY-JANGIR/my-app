import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <>
      <div className="flex justify-between px-3 py-2">
        <Link
          href="/"
          className="text-red-900 font-extrabold italic font-serif"
        >
          Rose-Fizz
        </Link>
        <div>
          <ul className="flex text-red-900">
            <li>
              <Link
                href="/about"
                className=" p-2 mx1 opacity-80 hover:opacity-100"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/restaurant"
                className=" p-2 mx1 opacity-80 hover:opacity-100"
              >
                Restaurent
              </Link>
            </li>
            <li>
              <Link
                href="/brands"
                className=" p-2 mx1 opacity-80 hover:opacity-100"
              >
                Brands
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
