"use client";
import DetailsPage from "./detailsPage";
import { useAtom } from "jotai";
import { canEdit, clickedAvatar } from "@/jotai/atoms";
import { AiFillEdit } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import EditButton from "./editButton";

const RightSide = () => {
  const [cliAvatar, setCliAvatar] = useAtom(clickedAvatar);

  return (
    <div className="sticky top-20 h-screen w-full overflow-y-auto bg-stone-200 p-4 pb-24 text-stone-950">
      {cliAvatar === "" ? (
        <div className="flex h-full w-full items-center justify-center">
          Tap on a Contact
        </div>
      ) : (
        <>
          <DetailsPage />
          <EditButton />
        </>
      )}
    </div>
  );
};

export default RightSide;


