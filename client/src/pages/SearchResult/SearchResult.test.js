import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

import SearchLayout from "../SearchLayout/SearchLayout";
import SearchResult from "../SearchResult/SearchResult";

const getRouter = (data) => {
  const routes = [
    {
      path: "/items",
      element: <SearchLayout />,
      children: [
        { index: true, element: <SearchResult />, loader: () => data }
      ],
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/items?search=PRODUCT"],
  });

  return router;
};

describe("SearchResult Page", () => {
  it("renders page if data object is set", async () => {
    const DUMMY_DATA = {
      author: {
        name: "",
        lastname: "",
      },
      categories: ["", ""],
      items: [
        {
          id: "id1",
          title: "",
          price: {
            currency: "ARS",
            amount: 100,
            decimals: "00",
          },
          picture: "",
          condition: "",
          free_shipping: false,
        },
        {
          id: "id2",
          title: "Product Name",
          price: {
            currency: "ARS",
            amount: 100,
            decimals: "00",
          },
          picture: "",
          condition: "",
          free_shipping: false,
        },
      ],
    };
    const router = getRouter(DUMMY_DATA);
    render(<RouterProvider router={router} />);

    const ProductName = await waitFor(() => screen.findByText("Product Name"));
    expect(ProductName).toBeInTheDocument();
  });

  it("renders feedback msg if data object is empty", async () => {
    const DUMMY_DATA = [];
    const router = getRouter(DUMMY_DATA);
    render(<RouterProvider router={router} />);

    const feedback = await screen.findByText("No se encontraron productos");
    expect(feedback).toBeInTheDocument();
  });

  it("renders feedback msg if data object is null", async () => {
    const DUMMY_DATA = null;
    const router = getRouter(DUMMY_DATA);
    render(<RouterProvider router={router} />);

    const feedback = await screen.findByText("No se encontraron productos");
    expect(feedback).toBeInTheDocument();
  });
});