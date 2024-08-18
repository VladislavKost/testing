import { validateCard } from "../CardValidator";
import { CardInputWidget } from "../CardWidget";

describe("widgetTest", () => {
  beforeEach(() => {
    const container = document.querySelector(".container");
    const cardWidget = new CardInputWidget(container);
    cardWidget.bindToDOM();
  });

  it("test validateCard", async () => {
    expect(hasGoblin).toBe(true);

    jest.useRealTimers();
  });
});
