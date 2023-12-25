const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "head" }, "I'm h1 Tag")
  )
);
//if sibling
const parent2 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "head" }, "I'm h1 Tag"),
    React.createElement("h2", { id: "head2" }, "I'm h2 Tag"),
  ])
);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyx: "abc" },
//   "Hello world from React"
// );

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
