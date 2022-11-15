import React from "react";
import {render, cleanup, fireEvent} from "@testing-library/react";
import App from "../App.js";

afterEach(cleanup);

describe("WeatherApp", () => {
  it("shows cities list", async () => {
    const screen = render(<App />);
    await expect(screen.findAllByTestId("city_card")).resolves.toHaveLength(5);
  });
  it("shows weather list", async () => {
    const screen = render(<App />);
    const CityElement = await screen.findByText('Berlin')
    
    fireEvent.click(CityElement)
    await expect(screen.findAllByTestId("weather_card")).resolves.toHaveLength(5);
  });
});