"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TbClick } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";

const ContactItem = ({ key, name }: { key: number; name: string }) => {
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
    <div
      key={key}
      className="bg-yellow-400 cursor-pointer rounded-2xl p-4 flex items-center justify-between"
    >
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
        <div>{name}</div>
      </div>
      <div>
        <TbClick size={30} />
      </div>
    </div>
  );
};

export default ContactItem;
