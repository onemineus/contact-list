"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TbClick } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { useAtom } from "jotai";
import { clickedAvatar, clickedContact, clickedUserIndex } from "@/jotai/atoms";
import { motion } from "framer-motion";
import { Contact } from "@/types/contacts";

const ContactItem = ({
  index,
  contact,
}: {
  index: number;
  contact: Contact;
}) => {
  const [avatar, setAvatar] = useState("");
  const [_, setCliAvatar] = useAtom(clickedAvatar);
  const [cliUser, setCliUser] = useAtom(clickedUserIndex);
  const [__, setCliContact] = useAtom(clickedContact);
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

  useEffect(() => {}, []);

  return (
    <motion.div
      style={{}}
      animate={{
        backgroundColor: cliUser === index ? "#F5F5F4" : "#FACC15",
        color: cliUser === index ? "#0C0A09" : "#F5F5F4",
        outlineStyle: cliUser === index ? "solid" : "none",
        outlineWidth: cliUser === index ? "1px" : "0px",
        outlineColor: "#facc15",
      }}
      transition={{
        duration: 0.6,
      }}
      onClick={() => {
        setCliUser(index);
        setCliAvatar(avatar);
        setCliContact(contact);
      }}
      key={index}
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
        <div>{contact["Display Name"]}</div>
      </div>
      <div>
        <TbClick size={30} />
      </div>
    </motion.div>
  );
};

export default ContactItem;
