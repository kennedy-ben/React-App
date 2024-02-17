import React from "react";
import { render } from "@testing-library/react";
import { HashRouter } from "react-router-dom";

const AllTheProviders = ({ children }) => {
  return <HashRouter>{children}</HashRouter>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
