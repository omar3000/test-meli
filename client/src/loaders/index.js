import { json } from "react-router-dom";

export const loadSearchItems = async ({ request }) => {
  const baseUrl = new URL(request.url);
  const query = baseUrl.searchParams.get("search");

  const response = await fetch(`http://localhost:3000/items?search=${query}`);
  const data = await response.json();

  if (!response.ok) throw json(data);

  return data;
};
