const PAYMENTSYSTEMS = {
  2: "icon-mir",
  30: "icon-diners-club",
  36: "icon-diners-club",
  38: "icon-diners-club",
  31: "icon-jcb",
  35: "icon-jcb",
  34: "icon-american-express",
  37: "icon-american-express",
  4: "icon-visa",
  50: "icon-maestro",
  56: "icon-maestro",
  57: "icon-maestro",
  58: "icon-maestro",
  51: "icon-mastercard",
  52: "icon-mastercard",
  53: "icon-mastercard",
  54: "icon-mastercard",
  55: "icon-mastercard",
  60: "icon-discover",
  62: "icon-unionpay",
  63: "icon-maestro",
  67: "icon-maestro",
  other: "icon-credit-card",
};

export const checkPaymentSystem = (value) => {
  const prefix = value.slice(0, 1);
  const prefix2 = value.slice(0, 2);

  let paymentSystem =
    PAYMENTSYSTEMS[prefix] || PAYMENTSYSTEMS[prefix2] || PAYMENTSYSTEMS.other;
  return paymentSystem;
};
