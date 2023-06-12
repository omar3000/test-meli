import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout/RootLayout";
import SearchLayout from "./pages/SearchLayout/SearchLayout";
import SearchResultPage from "./pages/SearchResult/SearchResult";
import { loadSearchItems } from "./services/items";

import "./css/App.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "items",
        element: <SearchLayout />,
        children: [
          {
            index: true,
            element: <SearchResultPage />,
            loader: loadSearchItems,
          }
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
