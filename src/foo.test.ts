import { bootstrap } from "@needle-di/core";
import { describe, test } from "@vitest/runner";
import { expect } from "vitest";

import { Foo } from "./foo";

describe("Needle DI", () => {
  test("Foo", () => {
    expect(bootstrap(Foo)).toBeInstanceOf(Foo);
  });
});
