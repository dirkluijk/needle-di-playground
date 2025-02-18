import { injectable } from "@needle-di/core";

@injectable()
export class Foo {
  private test: string;

  constructor() {
    this.test = "test";
  }
}
