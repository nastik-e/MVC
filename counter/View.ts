import Controller from "./Controller";

class View {
  private viewState: number;
  private root: HTMLDivElement;
  private controller: Controller;
  private counterValue: HTMLDivElement;
  private containerButtons: HTMLDivElement;
  private incrementButton: HTMLButtonElement;
  private decrementButton: HTMLButtonElement;
  private asyncIncrementButton: HTMLButtonElement;
  private asyncDecrementButton: HTMLButtonElement;
  constructor(root: HTMLDivElement, controller: Controller) {
    this.controller = controller;

    this.root = root;
    this.viewState = this.controller.getState();
    this.mountCounter();
  }

  mountCounter() {
    this.counterValue = document.createElement("div");
    this.containerButtons = document.createElement("div");
    this.incrementButton = document.createElement("button");
    this.incrementButton.innerText = "increase";
    this.incrementButton.addEventListener("click", this.handleIncrement);
    this.decrementButton = document.createElement("button");
    this.decrementButton.innerText = "decrease";
    this.decrementButton.addEventListener("click", this.handleDecrement);

    this.asyncIncrementButton = document.createElement("button");
    this.asyncIncrementButton.innerText = "increase in 1 second";
    this.asyncIncrementButton.addEventListener(
      "click",
      this.handleAsyncIncrease
    );
    this.asyncDecrementButton = document.createElement("button");
    this.asyncDecrementButton.innerText = "decrease in 1 second";
    this.asyncDecrementButton.addEventListener(
      "click",
      this.handleAsyncDecrease
    );

    this.containerButtons.appendChild(this.incrementButton);
    this.containerButtons.appendChild(this.decrementButton);
    this.containerButtons.appendChild(this.asyncIncrementButton);
    this.containerButtons.appendChild(this.asyncDecrementButton);
    this.root.appendChild(this.counterValue);
    this.root.appendChild(this.containerButtons);
    this.updateCounter();
  }
  handleIncrement = () => {
    this.viewState = this.controller.increase();

    this.updateCounter();
  };
  handleDecrement = () => {
    this.viewState = this.controller.decrease();
    this.updateCounter();
  };
  handleAsyncIncrease = () => {
    this.controller.asyncIncrease().then(() => {
      this.viewState = this.controller.getState();
      this.updateCounter();
    });
  };
  handleAsyncDecrease = (): void => {
    this.controller.asyncDecrease().then((value) => {
      this.viewState = value;
      this.updateCounter();
    });
  };

  updateCounter() {
    this.counterValue.innerText = `${this.viewState}`;
  }
}
export default View;
