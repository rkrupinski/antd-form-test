import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { mount } from "enzyme";
import { AntForm } from "./AntForm";

describe("AntForm", () => {
  describe("testing-library", () => {
    it("should let one handle submission", () => {
      const submitSpy = jest.fn();
      const { getByTestId } = render(<AntForm onSubmit={submitSpy} />);

      fireEvent.change(getByTestId("input"), { target: { value: "bar" } });
      fireEvent.submit(getByTestId("form"));

      expect(submitSpy).toHaveBeenCalledWith({ foo: "bar" });
    });
  });

  describe("enzyme", () => {
    it("should let one handle submission", () => {
      const submitSpy = jest.fn();
      const wrapper = mount(<AntForm onSubmit={submitSpy} />);

      wrapper.find("input").simulate("change", {
        target: {
          value: "bar",
        },
      });

      wrapper.find("form").simulate("submit");

      expect(submitSpy).toHaveBeenCalledWith({ foo: "bar" });
    });
  });
});
