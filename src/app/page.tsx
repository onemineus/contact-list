import { ContactList } from "@/types/contacts";
import RightSide from "@/components/rightSide";
import LeftSide from "@/components/leftSide";
import Navbar from "@/components/navbar";

const getUsersData = async () => {
  //simulating a real world fetch request from DB
  const response = await fetch(`${process.env.NEXT_PUBLIC_WEB_URL}/api/users`, {
    cache: "no-cache",
  });
  const data: ContactList = await response.json();
  return data;
};

export default async function Home() {
  const data = await getUsersData();

  return (
    <main className="relative flex min-h-screen flex-col">
      <Navbar />
      <div className="relative flex w-full">
        <LeftSide data={data} />
        <RightSide />
      </div>
    </main>
  );
}
