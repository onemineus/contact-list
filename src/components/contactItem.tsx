"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TbClick } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { useAtom } from "jotai";
import { currentAvatar } from "@/jotai/atoms";
import { motion } from "framer-motion";

const ContactItem = ({ key, name }: { key: number; name: string }) => {
  console.log(name)
  const [avatar, setAvatar] = useState("");
  const [curAv, setCurAv] = useAtom(currentAvatar);
  const [isClicked, setIsClicked] = useState(false);
  const setContactAvatar = async () => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        const user = data.results[0];
        const imageUrl = user.picture.large;
        setAvatar(imageUrl);
        setCurAv(imageUrl);
      })
      .catch((error) => {
        console.error("Error fetching random user image", error);
      });
  };

  useEffect(() => {
    setContactAvatar();
  }, []);

  return (
    <motion.div
      animate={{
        backgroundColor: isClicked ? "#fff" : "#FACC15",
      }}
      onClick={() => {
        setIsClicked(!isClicked);
      }}
      key={key}
      className="flex cursor-pointer items-center justify-between rounded-2xl p-4"
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
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <Image
            src={avatar}
            alt="avatar"
            width={100}
            height={100}
            className="h-12 w-12 rounded-full object-cover"
          />
        )}
        <div>{name}</div>
      </div>
      <div>
        <TbClick size={30} />
      </div>
    </motion.div>
  );
};

export default ContactItem;
