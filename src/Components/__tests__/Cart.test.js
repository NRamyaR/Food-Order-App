import { act, fireEvent, render } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/mockResMenuData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("Should load Restaurant Menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Biryani (5)");
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  const addBtn = screen.getAllBYRole("button", { name: "Add +" });
  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart - (1 items")).toBeInTheDocument();
  fireEvent.click(addBtn[1]);

  expect(screen.getByText("Cart - (2 items")).toBeInTheDocument();

  expect(screen.getByText("foodItem")).toBe(7);
  fireEvent.click(screen.getBYRole("button", { name: "Clear Cart" }));

  expect(screen.getByText("foodItem")).toBe(5);

  expect(screen.getByText("Cart is Empty")).toBeInTheDocument();
});
