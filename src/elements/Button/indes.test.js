import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from "./index";

///test untuk disabled button
test("Should not allowed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);
  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});
///test untuk loading button
test("Should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);
  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span")).toBeInTheDocument();
});
//test untuk button render yang external atau keluar
test("Should render <a> tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>);
  expect(container.querySelector("a")).toBeInTheDocument();
});
//test untuk button  link di dalam component
test("Should render <Link> component", () => {
  const { container } = render(
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );
  expect(container.querySelector("a")).toBeInTheDocument();
});
