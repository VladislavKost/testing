import { checkPaymentSystem } from "../PaymentSystemCheck";

describe("payment system check test", () => {
  it("test mir", () => {
    expect(checkPaymentSystem("2222 2222 2222 2222 222")).toBe("icon-mir");
  });
  it("test visa", () => {
    expect(checkPaymentSystem("4532 1605 2129 9231")).toBe("icon-visa");
  });
  it("test diners-club", () => {
    expect(checkPaymentSystem("36763008531155")).toBe("icon-diners-club");
  });
  it("test jcb", () => {
    expect(checkPaymentSystem("3537176820818593")).toBe("icon-jcb");
  });
  it("test american-express", () => {
    expect(checkPaymentSystem("340225310111416")).toBe("icon-american-express");
  });
  it("test maestro", () => {
    expect(checkPaymentSystem("6761243834114920")).toBe("icon-maestro");
  });
  it("test mastercard", () => {
    expect(checkPaymentSystem("5498982188899147")).toBe("icon-mastercard");
  });
  it("test unionpay", () => {
    expect(checkPaymentSystem("6211243478259906")).toBe("icon-unionpay");
  });
  it("test discover", () => {
    expect(checkPaymentSystem("6011243478259906")).toBe("icon-discover");
  });
});
