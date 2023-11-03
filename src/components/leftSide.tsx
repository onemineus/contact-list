"use client";

import { ContactList } from "@/types/contacts";
import React, { useState } from "react";
import ContactItem from "./contactItem";

const LeftSide = ({ data }: { data: ContactList }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [serchItem, setSerchItem] = useState("");
  return (
    <div className="z-10 w-96 shrink-0 space-y-4 bg-stone-100 p-4">
      <div className="flex flex-col space-y-2">
        <div className="text-xl capitalize text-stone-950">search contacts</div>
        <input
          type="text"
          name="contact"
          onChange={(v) => {
            const { value } = v.target;
            setSerchItem(value);
            const filtered = data.filter((item) => {
              return Object.values(item).some((attr) =>
                attr.toLowerCase().includes(value.toLowerCase()),
              );
            });
            setFilteredData(filtered);
          }}
          value={serchItem}
          placeholder="Search for anything"
          className="h-10 w-full rounded-xl bg-stone-200 px-3 text-stone-950 placeholder:text-sm focus:outline-none"
        />
      </div>
      {filteredData.map((user, index) => {
        return <ContactItem key={index} index={index} contact={user} />;
      })}
    </div>
  );
};

export default LeftSide;
