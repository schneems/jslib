import { expect } from "chai";
import * as mocha from "mocha";
import { randomInt } from "../../src/math/randomInt";

describe("math/randomInt", () => {
  it("returns the same number if mix and max are the same", () => {
    const a = randomInt(1, 1);
    const b = randomInt(1, 1);

    expect(a).to.not.be.undefined;
    expect(a).to.not.equal(Infinity);
    expect(a).to.not.be.NaN;
    expect(a).to.equal(b);
  });

  it("returns a random number inside range", () => {
    const a = randomInt(0, 999);
    const b = randomInt(0, 999);

    expect(a).to.be.lessThan(999.01);
    expect(a).to.be.greaterThan(-0.01);
    expect(b).to.be.lessThan(999.01);
    expect(b).to.be.greaterThan(-0.01);
    expect(a).to.not.equal(b);
  });
});
