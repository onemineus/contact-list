import { Contact } from "@/types/contacts";
import { atom } from "jotai";

export const clickedAvatar = atom<string>("");

export const clickedUserIndex = atom<number>(-1);

export const clickedContact = atom<Contact | null>(null);

export const canEdit = atom<boolean>(false);
