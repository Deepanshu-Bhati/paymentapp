"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick:()=>void
}

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button onClick={onClick} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-3 me-2 mb-2 mt-3 mr-12 ">
      {children}
    </button>

  );
};
