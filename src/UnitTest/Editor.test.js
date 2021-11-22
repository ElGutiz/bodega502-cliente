import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import Editor from "../Editor";

describe("Start App", () => {
  let editorId;
  beforeAll(() => {
    render(<Editor />);
    editorId = screen.getByTestId("existe1");
  });

  afterAll(cleanup);
});