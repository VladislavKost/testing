import { validateCard } from "./CardValidator";
import { checkPaymentSystem } from "./PaymentSystemCheck";

export class CardInputWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.currentSystem = "icon-credit-card";

    this.onSubmit = this.onSubmit.bind(this);
    this.onInput = this.onInput.bind(this);
    this._checkPaymentSystem = this._checkPaymentSystem.bind(this);
    this._addSpaceAfter4Characters = this._addSpaceAfter4Characters.bind(this);
  }

  static get markup() {
    return `
        <form class="input-card-widget">
            <input class="card-number-input icon icon-credit-card " type="text" maxlength="23" placeholder="Card number" />
            <button class="button">Click to Validate</button>
        </form>
        `;
  }

  static get inputSelector() {
    return ".card-number-input";
  }

  static get widgetSelector() {
    return ".input-card-widget";
  }

  addNewIcon(input, value) {
    input.classList.add(value);
  }

  bindToDOM() {
    this.parentEl.innerHTML = CardInputWidget.markup;
    this.widget = this.parentEl.querySelector(CardInputWidget.widgetSelector);
    this.input = this.widget.querySelector(CardInputWidget.inputSelector);

    this.widget.addEventListener("submit", this.onSubmit);
    this.input.addEventListener("input", this.onInput);
  }

  onInput(e) {
    let target = e.target;
    this._checkPaymentSystem(target.value, target);
    this._addSpaceAfter4Characters(target);
    this.input.classList.remove("valid", "invalid");
  }
  onSubmit(e) {
    e.preventDefault();
    const result = validateCard(this.widget);
    const validationClass = result ? "valid" : "invalid";
    this.input.classList.add(validationClass);
  }
  removeOldIcon(input, currentSystem) {
    input.classList.remove(currentSystem);
  }

  _addSpaceAfter4Characters(target) {
    let position = target.selectionEnd,
      length = target.value.length;

    target.value = target.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
    target.selectionEnd = position +=
      target.value.charAt(position - 1) === " " &&
      target.value.charAt(length - 1) === " " &&
      length !== target.value.length
        ? 1
        : 0;
  }

  _checkPaymentSystem(value, target) {
    const paymentSystemResult = checkPaymentSystem(value);
    if (this.currentSystem !== paymentSystemResult) {
      this.removeOldIcon(target, this.currentSystem);
      this.addNewIcon(target, paymentSystemResult);
      this.currentSystem = paymentSystemResult;
    }
  }
}
