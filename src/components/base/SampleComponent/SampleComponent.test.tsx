import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import SampleComponent from "./SampleComponent";
import { mockData } from "./SampleComponent.mock";

describe("SampleComponent", () => {
  it("renders the SampleComponent correctly", () => {
    render(<SampleComponent title={mockData.title} />);
    expect(screen.getByText("SampleComponent component")).toBeInTheDocument();
  });
});
