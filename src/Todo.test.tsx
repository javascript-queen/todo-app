import { render, screen } from "@testing-library/react";
import SearchInput from "./components/SearchInput";
import { SetStateAction, FormEvent } from "react";

describe("when rendered with a `todo` prop", () => {
  it("should render a typed todo", () => {
    render(<SearchInput todo="Test todo" setTodo={function (value: SetStateAction<string>): void {
      throw new Error("Function not implemented.");
    } } handleAdding={function (e: FormEvent<Element>): void {
      throw new Error("Function not implemented.");
    } }></SearchInput>);
    expect(
      screen.getByText(/Test todo/)
    ).toBeInTheDocument();
  })
})