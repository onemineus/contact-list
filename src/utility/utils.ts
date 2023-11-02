export const getUsersData = async () => {
  //simulating a real world fetch request from DB
  const response = await fetch("/api/users");
  const data = await response.json();
  return data;
};
