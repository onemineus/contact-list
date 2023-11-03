"use client";

import { clickedAvatar, clickedContact } from "@/jotai/atoms";
import { useAtom } from "jotai";
import React from "react";
import Image from "next/image";

const DetailsPage = () => {
  const [cliAvatar, setCliAvatar] = useAtom(clickedAvatar);
  const [cliContact, setCliContact] = useAtom(clickedContact);

  return (
    <div className="flex flex-col items-center p-4">
      <Image
        src={cliAvatar}
        alt=""
        width={1000}
        height={1000}
        className="h-96 w-96 rounded-full"
      />
      <div className="mt-8 text-center text-3xl font-bold">
        {cliContact?.["Display Name"]}
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default DetailsPage;
