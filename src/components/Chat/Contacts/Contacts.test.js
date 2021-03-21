import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Contacts from "./Contacts";

describe("Contacts", () => {
  it("should render", () => {
    const component = render(
      <Contacts options={[{ name: "Opt 1", id: "123" }]} />
    );
    expect(component.getByTestId("input-search")).toBeTruthy();
  });

  it("should onClick", () => {
    const onClick = jest.fn();

    const component = render(
      <Contacts onClick={onClick} options={[{ name: "Opt 1", id: "123" }]} />
    );

    fireEvent.click(component.getByTestId("option-item-123"));
    expect(onClick).toBeCalledWith({
      id: "123",
      name: "Opt 1"
    });
  });

  it("should onSearch", () => {
    const onSearch = jest.fn();

    const component = render(
      <Contacts onSearch={onSearch} options={[{ name: "Opt 1", id: "123" }]} />
    );

    fireEvent.change(component.getByTestId("input-search"), {
      target: {
        value: "Marlon Conrado"
      }
    });
    expect(onSearch).toBeCalledWith("Marlon Conrado");
  });
});
