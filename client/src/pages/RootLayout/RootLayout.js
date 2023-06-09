import { Outlet } from "react-router-dom";

import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";

const RootLayout = () => {
  return (
    <>
      <Header>
        <SearchBar />
      </Header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
