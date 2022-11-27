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
 async asyncDecrease() {
   await new Promise((resolve) => {
      setTimeout(() => {
        this.decrease();
        resolve('1');
      }, 1000);
    });
  }
  getState(): number {
    return this.state;
  }
}

export default Model;
