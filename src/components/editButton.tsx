import { useAtom } from "jotai";
import { canEdit, clickedAvatar } from "@/jotai/atoms";
import { AiFillEdit } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

export default function EditButton() {
  const [caEdit, setCaEdit] = useAtom(canEdit);
  return (
    <div className="fixed left-0 top-0 flex h-screen w-full items-end justify-end p-8">
      <div
        onClick={() => {
          setCaEdit(!caEdit);
        }}
        className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-yellow-400"
      >
        {caEdit ? <RxCross2 size={30} /> : <AiFillEdit size={30} />}
      </div>
    </div>
  );
}
