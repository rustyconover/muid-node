import { expect } from "chai";
import "mocha";
import { MemorableUniqueIdentifier } from "../src";

describe("Memorable Unique Identifiers", () => {
  it("should extract the animal from a known valid key", () => {
    const a = MemorableUniqueIdentifier.animal(
      "1200000000000000000000010c6228c1"
    );
    expect(a).to.not.be.undefined;
    expect(a).to.equal("Gloomless Fly");
  });

  it("should be able to create a short key", () => {
    const result = MemorableUniqueIdentifier.create(6);

    expect(result).to.not.be.undefined;
    expect(MemorableUniqueIdentifier.animal(result.key)).to.not.be.undefined;
  });

  it("should be able to handle the hash", () => {
    const result = MemorableUniqueIdentifier.search(
      "fe3a1eb0bca7542150e37ce4022a366b"
    );
    expect(result).to.not.be.undefined;
    expect(result).to.eq("Female Bobcat");
  });

  it("should be able to validate the hash", () => {
    const result = MemorableUniqueIdentifier.validate(
      "1200000000000000000000010c6228c1"
    );
    expect(result).to.be.true;
  });

  it("should be able to calculate the difficulty", () => {
    const result = MemorableUniqueIdentifier.difficulty(
      "1200000000000000000000010c6228c1"
    );
    expect(result).to.not.be.undefined;
    expect(result).to.be.eq(12);
  });

  it("should be able to mine 3 keys of difficulty=6", () => {
    const keys = MemorableUniqueIdentifier.mine_until(6, 3);
    expect(keys.length).to.equal(3);
  });
});
