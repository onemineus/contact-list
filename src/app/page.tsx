"use client";

import { ContactList } from "@/types/contacts";
import { getUsersData } from "@/utility/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<ContactList>([]);

  const setContactsData = async () => {
    const data = await getUsersData();
    setData(data);
  };

  useEffect(() => {
    setContactsData();
  }, []);

  return (
    <main className="h-screen grid grid-flow-col grid-cols-4">
      <div className="bg-pink-900 w-full h-full col-span-1">
        <div className=""> 

        </div>
      </div>
      <div className="bg-orange-900 w-full h-full col-span-3"></div>
    </main>
  );
}
