import Model from "./Model";

class Controller {
  private model: Model;
  constructor(model: Model) {
    this.model = model;
  }
  getState(): number {
    return this.model.getState();
  }
  increase(): number {
    this.model.increase();
    return this.getState();
  }
  decrease(): number {
    this.model.decrease();
    return this.getState();
  }
  asyncIncrease(): Promise<number> {
    return new Promise(() => {
      this.model.asyncIncrease();
    });
  }
  asyncDecrease(): Promise<number> {
    return this.model.asyncDecrease();
  }
}

export default Controller;
