import { cardNumberValidation } from "../CardValidator";

describe("cardNumberValidation test", () => {
  it("test validateCard valid", () => {
    expect(cardNumberValidation("4532 1605 2129 9231")).toBe(true);
  });

  it("test validateCard invalid", () => {
    expect(cardNumberValidation("2222 2222 2222 2222 222")).toBe(false);
  });
});
