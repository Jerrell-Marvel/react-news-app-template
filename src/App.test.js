import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import React from "react";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

import App from "./App";
import News from "./pages/news/News";
import NewsDetails from "./pages/newsDetails/NewsDetails";
import { renderWithRouter } from "./test-utils/testUtils";

describe("Routing system", () => {
  test("Navigate to /news page when clicking find news link", async () => {
    // const history = createMemoryHistory();
    // render(
    //   <Router
    //     location={history.location}
    //     navigator={history}
    //   >
    //     <App />
    //   </Router>
    // );
    // const user = userEvent.setup();

    const { user } = renderWithRouter(<App />);
    const link = screen.getByText(/find news/i);
    await user.click(link);
    const newsText = screen.getByText(/test/i);
    expect(newsText).toBeInTheDocument();
  });

  // test("Navigate to correct news id", async () => {
  // await screen.findByRole("heading");
  // expect(screen.getByRole("heading")).toHaveTextContent(FAKE_EVENT.id);
  // const user = userEvent.setup();
  // const history = createMemoryHistory({ initialEntries: ["/news"] });
  // render(
  //   <Router
  //     location={history.location}
  //     navigator={history}
  //   >
  //     <App />
  //   </Router>
  // );
  //   for (let i = 0; i < newsData.length; i++) {
  //     const newsItem = screen.getByTestId(newsData[i].id);
  //     await user.click(newsItem);
  //     const newsDetailsText = screen.getByRole("heading", {
  //       name: String(newsData[i].id),
  //     });
  //     expect(newsDetailsText).toBeInTheDocument();
  //     history.push("/news");
  //   }
  // const newsItem = screen.getByText("O");
  // await user.click(newsItem);
  // screen.debug();
  // console.log(history.index);
  // expect(history.location.pathname).toBe("/news/1");
  //   history.push("/news/1");
  //   const newsDetailsText = screen.getByRole("heading", {
  //     name: "1",
  //   });
  //   expect(newsDetailsText).toBeInTheDocument();
  //   screen.debug();
  // });
  // });
});
