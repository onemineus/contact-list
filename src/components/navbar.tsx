import React from 'react'
import { FiGithub } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-20 flex h-20 w-full shrink-0 items-center justify-between bg-yellow-400 px-4">
      <div className="text-2xl font-bold text-stone-950">Contacts Page</div>
      <div>
        <FiGithub size={30} />
      </div>
    </div>
  );
}

export default Navbar