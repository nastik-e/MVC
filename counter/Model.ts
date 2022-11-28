class Model {
  private state: number;

  constructor() {
    this.state = 0;
  }
  increase(): void {
    this.state = this.state + 1;
  }
  decrease(): void {
    this.state--;
  }
  asyncIncrease(): void {
    setTimeout(this.increase, 1000);
  }
  asyncDecrease(): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.decrease();
        resolve(this.getState());
      }, 1000);
    });
  }
  getState(): number {
    return this.state;
  }
}

export default Model;
