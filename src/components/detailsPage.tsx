"use client";

import { canEdit, clickedAvatar, clickedContact } from "@/jotai/atoms";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const DetailsPage = () => {
  const [cliAvatar, setCliAvatar] = useAtom(clickedAvatar);
  const [cliContact, setCliContact] = useAtom(clickedContact);
  const [caEdit, setCaEdit] = useAtom(canEdit);
  const [data, setData] = useState(cliContact);
  useEffect(() => {
    setData(cliContact);
    console.log(cliContact);
  }, [cliContact]);
  useEffect(() => {}, [cliAvatar]);
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
      <div className="mt-8 flex w-full flex-col items-center space-y-4">
        {/* name */}
        <div className="flex space-x-4">
          <div className="flex flex-col space-y-1">
            <div className="">First name</div>
            <div
              contentEditable={caEdit}
              className="flex h-10 w-[11.5rem] items-center overflow-hidden rounded-xl bg-stone-50 px-3 focus:outline-none"
            >
              {data?.["First Name"]}
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="">Last name</div>
            <div
              contentEditable={caEdit}
              className="flex h-10 w-[11.5rem] items-center overflow-hidden rounded-xl bg-stone-50 px-3 focus:outline-none"
            >
              {data?.["Last Name"]}
            </div>
          </div>
        </div>
        {/* home info */}
        <div className="w-96 text-xl font-bold">Home Section</div>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <div className="">Home Street</div>
            <div
              contentEditable={caEdit}
              className="flex h-10 w-96 items-center overflow-hidden rounded-xl bg-stone-50 px-3 focus:outline-none"
            >
              {data?.["Home Street"]}
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="">Home Address 2</div>
            <div
              contentEditable={caEdit}
              className="flex h-10 w-96 items-center overflow-hidden rounded-xl bg-stone-50 px-3 focus:outline-none"
            >
              {data?.["Home Address 2"]}
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="">Home City</div>
            <div
              contentEditable={caEdit}
              className="flex h-10 w-96 items-center overflow-hidden rounded-xl bg-stone-50 px-3 focus:outline-none"
            >
              {data?.["Home City"]}
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="">Home State</div>
            <div
              contentEditable={caEdit}
              className="flex h-10 w-96 items-center overflow-hidden rounded-xl bg-stone-50 px-3 focus:outline-none"
            >
              {data?.["Home State"]}
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="">Home Country</div>
            <div
              contentEditable={caEdit}
              className="flex h-10 w-96 items-center overflow-hidden rounded-xl bg-stone-50 px-3 focus:outline-none"
            >
              {data?.["Home Country"]}
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="">Home Postal Code</div>
            <div
              contentEditable={caEdit}
              className="flex h-10 w-96 items-center overflow-hidden rounded-xl bg-stone-50 px-3 focus:outline-none"
            >
              {data?.["Home Postal Code"]}
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="">Home Phone Number</div>
            <div
              contentEditable={caEdit}
              className="flex h-10 w-96 items-center overflow-hidden rounded-xl bg-stone-50 px-3 focus:outline-none"
            >
              {data?.["Home Phone"]}
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="">Home Fax</div>
            <div
              contentEditable={caEdit}
              className="flex h-10 w-96 items-center overflow-hidden rounded-xl bg-stone-50 px-3 focus:outline-none"
            >
              {data?.["Home Fax"]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
