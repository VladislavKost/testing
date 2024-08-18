import { CardInputWidget } from "./CardWidget";

const container = document.querySelector(".container");
const cardInputWidget = new CardInputWidget(container);

cardInputWidget.bindToDOM();
