import { FiGithub } from "react-icons/fi";
import ContactItem from "@/components/contactItem";
import { ContactList } from "@/types/contacts";

export const getUsersData = async () => {
  //simulating a real world fetch request from DB
  const response = await fetch("http://127.0.0.1:3000/api/users");
  const data: ContactList = await response.json();
  return data;
};

export default async function Home() {
  const data = await getUsersData();

  return (
    <main className="relative flex min-h-screen flex-col">
      {/* navbar */}
      <div className="sticky top-0 z-10 flex h-20 w-full shrink-0 items-center justify-between bg-yellow-400 px-4">
        <div className="text-2xl font-bold text-stone-950">Contacts Page</div>
        <div>
          <FiGithub size={30} />
        </div>
      </div>

      <div className="relative flex w-full">
        {/* left side */}
        <div className="w-96 shrink-0 space-y-4 bg-stone-100 p-4">
          <div className="flex flex-col space-y-2">
            <div className="text-xl capitalize text-stone-950">
              search contacts
            </div>
            <input
              type="text"
              name="contact"
              placeholder="Search for anything"
              className="h-10 w-full rounded-xl bg-stone-200 px-3 text-stone-950 placeholder:text-sm focus:outline-none"
            />
            {/* <div className="w-min px-4 py-2 bg-stone-800 rounded-xl text-center">Search</div> */}
          </div>
          {data.map((user, index: number) => {
            return <ContactItem key={index} name={user["Display Name"]} />;
          })}
        </div>
        {/* right side */}
        <div className="sticky top-20 overflow-y-auto h-screen w-full bg-stone-200 p-4 pb-24 text-stone-950">
          <div className="h-[2000px]">asdasda</div>
        </div>
      </div>
    </main>
  );
}
