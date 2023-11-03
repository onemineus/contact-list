"use client";

import { ContactList } from "@/types/contacts";
import { getUsersData } from "@/utility/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TbClick } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
export default function Home() {
  const [data, setData] = useState<ContactList>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentAvatar, setCurrentAvatar] = useState("")
  const setContactsData = async () => {
    setIsLoading(true);
    const data = await getUsersData();
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    setContactsData();
  }, []);

  return (
    <main className="relative flex flex-col">
      {/* navbar */}
      <div className="h-20 sticky top-0 shrink-0 w-full bg-stone-800 px-4 flex justify-between items-center">
        <div className="text-2xl">Contacts Page</div>
        <div>
          <FiGithub size={30} />
        </div>
      </div>
      {isLoading ? (
        <div className="absolute flex h-screen w-full justify-center items-center">
          loading users
        </div>
      ) : (
        <div className="flex w-full h-full">
          {/* left side */}
          <div className="bg-stone-900 shrink-0 space-y-4 h-full w-96 p-4">
            <div className="flex flex-col space-y-2">
              <div className="capitalize text-xl">search contacts</div>
              <input
                type="text"
                name="contact"
                placeholder="Search for anything"
                className="rounded-xl placeholder:text-sm focus:outline-none text-stone-950 px-3 bg-stone-200 h-10 w-full"
              />
              {/* <div className="w-min px-4 py-2 bg-stone-800 rounded-xl text-center">Search</div> */}
            </div>
            {data.map((user, index) => {
              return <ContactItem />;
            })}
          </div>
          {/* right side */}
          <div className="bg-stone-950 items-center p-4 left-96 right-0 flex justify-center fixed top-20 bottom-0">
            <div className="bg-stone-900 rounded-xl w-full h-full p-4">
              <div>asdasd</div>
            </div>
          </div>
        </div>
      )}
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
    <div className="bg-stone-800 cursor-pointer rounded-2xl p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {avatar === "" ? (
          <Image
            src={
              "https://www.testhouse.net/wp-content/uploads/2021/11/default-avatar.jpg"
            }
            alt="avatar"
            width={500}
            height={500}
            className="object-cover h-12 w-12 rounded-full"
          />
        ) : (
          <Image
            src={avatar}
            alt="avatar"
            width={100}
            height={100}
            className="object-cover h-12 w-12 rounded-full"
          />
        )}
        <div>{"Sangeet Banerjee"}</div>
      </div>
      <div>
        <TbClick size={30} />
      </div>
    </div>
  );
};
