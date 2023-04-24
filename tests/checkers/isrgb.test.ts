import { isRGB } from '../../src';

describe("(isObject) check if object", () => {
  test("3 with hash", () => {
    expect(
      isRGB('#000000')
    ).toBeTruthy();
  });
  test("6 with hash", () => {
    expect(
      isRGB('#FFF')
    ).toBeTruthy();
  });
  test("3 without hash", () => {
    expect(
      isRGB('000000')
    ).toBeTruthy();
  });
  test("6 without hash", () => {
    expect(
      isRGB('FFF')
    ).toBeTruthy();
  });
});
