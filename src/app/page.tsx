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
    <main className="h-screen flex flex-col">
      <div className="h-20">asdsd</div>
      <div className="flex h-full w-full">
        <div className="bg-zinc-900 h-full w-96 p-4">
          <ContactItem />
        </div>
        <div></div>
      </div>
    </main>
  );
}

const ContactItem = () => {
  const [avatar, setAvatar] = useState("");
  const setContactAvatar = async () => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        const user = data.results[0];
        const imageUrl = user.picture.large;
        setAvatar(imageUrl);
      })
      .catch((error) => {
        console.error("Error fetching random user image", error);
      });
  };

  useEffect(() => {
    setContactAvatar();
  }, []);

  return (
    <div className="bg-red-950 p-4 flex">
      {avatar === "" ? (
        <div>loading.. </div>
      ) : (
        <Image
          src={avatar}
          alt="avatar"
          width={500}
          height={500}
          className="object-cover h-12 w-12 rounded-full"
        />
      )}
    </div>
  );
};
