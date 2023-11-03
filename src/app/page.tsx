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
    <main className="relative flex flex-col">
      {/* navbar */}
      <div className="h-20 sticky top-0 shrink-0 w-full bg-stone-800 px-4 flex justify-between items-center">
        <div className="text-2xl">Contacts Page</div>
        <div>
          <FiGithub size={30} />
        </div>
      </div>

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
          {data.map((user, index: number) => {
            return <ContactItem key={index} name={user["Display Name"]} />;
          })}
        </div>
        {/* right side */}
        <div className="bg-stone-950 items-center p-4 left-96 right-0 flex justify-center fixed top-20 bottom-0">
          <div className="bg-stone-900 rounded-xl w-full h-full p-4">
            <div className="h-[1200px]">asdasda</div>
          </div>
        </div>
      </div>
    </main>
  );
}
