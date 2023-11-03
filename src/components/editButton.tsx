import { useAtom } from "jotai";
import { canEdit, clickedAvatar } from "@/jotai/atoms";
import { AiFillEdit } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

export default function EditButton() {
  const [caEdit, setCaEdit] = useAtom(canEdit);
  return (
    <div
      onClick={() => {
        setCaEdit(!caEdit);
      }}
      className="fixed bottom-8 right-8 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-yellow-400"
    >
      {caEdit ? <RxCross2 size={30} /> : <AiFillEdit size={30} />}
    </div>
  );
}
