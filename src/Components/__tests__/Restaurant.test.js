import RestoCard from "../RestoCard";
const { render, screen } = require("@testing-library/react");
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
// import { withpromotedLabel } from "../RestoCard";

it("Should render Restaurant Component with props Data", () => {
  render(<RestoCard resData={MOCK_DATA} />);
  const name = screen.getByText("Asha tiffins");
  expect(name).toBeInTheDocument();
});

// it("should render RestaurantCard component with PromotedLabel", () => {
//   //Home work -Test Higher order Component -withPromotedLabel()
//   render(<withPromotedLabel />);
//   // screen.getByRole("Promo");
// });
