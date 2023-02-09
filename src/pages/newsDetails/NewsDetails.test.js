import { render, waitFor, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import NewsDetails from "./NewsDetails";
import newsData from "../../data/newsData.json";
import App from "../../App";
import { renderWithRouter } from "../../test-utils/testUtils";
import { act } from "react-dom/test-utils";

describe("News details", () => {
  newsData.forEach((data) => {
    test(`Renders Loading... text before api loads for /news/${data.id}`, () => {
      const { user } = renderWithRouter(<App />, { route: `/news/${data.id}` });

      const loadingText = screen.getByText(/Loading.../i);
      expect(loadingText).toBeInTheDocument();
    });

    test(`/news/${data.id} showing correct data`, async () => {
      const { user } = renderWithRouter(<App />, { route: `/news/${data.id}` });

      const idText = await screen.findByText(data.id);
      const titleText = await screen.findByText(data.title);
      expect(idText).toBeInTheDocument();
      expect(titleText).toBeInTheDocument();
    });
  });
});

describe("News details error handling", () => {
  test(`Shows "Cannot found data" text for route /news/${181201}`, async () => {
    const { user } = renderWithRouter(<App />, { route: `/news/181201` });

    const notFoundText = await screen.findByText(
      /cannot found data/i,
      {},
      {
        timeout: 5000,
      }
    );
    expect(notFoundText).toBeInTheDocument();
    // const loadingText = screen.getByText(/Loading.../i);
    // expect(loadingText).toBeInTheDocument();
    // const notFoundText = await screen.findByText(
    //   /cannot found data/i,
    //   {},
    //   {
    //     timeout: 1000,
    //   }
    // );

    // expect(notFoundText).toBeInTheDocument();
  });
});
