import { findAllByRole, findAllByTestId, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { BrowserRouter, MemoryRouter, Routes, Route, Redirect } from "react-router-dom";
import News from "./News";
import newsData from "../../data/newsData.json";
import App from "../../App";
import { renderWithRouter } from "../../test-utils/testUtils";

describe("News", () => {
  test("Renders Loading... text before api loads", () => {
    render(
      <BrowserRouter>
        <News />
      </BrowserRouter>
    );

    const loadingText = screen.getByText(/Loading/i);
    expect(loadingText).toBeInTheDocument();
  });

  test("Renders all lists of 10 news", async () => {
    render(
      <BrowserRouter>
        <News />
      </BrowserRouter>
    );
    render(<News />);

    const newsListItems = await screen.findAllByRole(
      "listitem",
      {},
      {
        timeout: 10000,
      }
    );
    expect(newsListItems).toHaveLength(10);
  });

  newsData.forEach((data) => {
    test(`Navigate to correct NewsDetails page (/news/${data.id} for news item of id ${data.id})`, async () => {
      const { user } = renderWithRouter(<App />, { route: "/news" });
      const newsItem = await screen.findByTestId(data.id);
      await user.click(newsItem);

      const pathName = window.location.pathname;
      // screen.debug();
      expect(pathName).toMatch(`/news/${data.id}`);
    });
  });

  // newsData.forEach((data, i) => {
  //   test(`Navigate to correct NewsDetails page (/news/${data.id} for news item of id ${data.id})`, async () => {

  //     const user = userEvent.setup();
  //     render(
  //       <Router>
  //         <News />
  //       </Router>
  //     );
  //     const newsItem = await screen.findByTestId(data.id);
  //     await user.click(newsItem);

  //     const pathName = window.location.pathname;
  //     //   screen.debug();
  //     expect(pathName).toMatch(`/news/${data.id}`);
  //   });
  // });

  // test("Navigate to correct NewsDetails page", async () => {
  //   const newsListItems = await screen.findAllByRole(
  //     "listitem",
  //     {},
  //     {
  //       timeout: 10000,
  //     }
  //   );
  //   expect(newsListItems).toHaveLength(10);
  // });
});

// describe("TEST", () => {});
