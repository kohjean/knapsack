import { knapsack } from "./src/main";

const testItems = [
  { weight: 125, value: 409 },
  { weight: 839, value: 934 },
  { weight: 253, value: 323 },
  { weight: 1, value: 314 },
  { weight: 859, value: 483 },
  { weight: 846, value: 150 },
  { weight: 524, value: 452 },
  { weight: 955, value: 148 },
  { weight: 805, value: 942 },
  { weight: 303, value: 839 },
  { weight: 1, value: 686 },
  { weight: 611, value: 764 },
  { weight: 96, value: 448 },
  { weight: 1, value: 91 },
  { weight: 128, value: 351 },
  { weight: 80, value: 204 },
  { weight: 541, value: 1 },
  { weight: 806, value: 155 },
  { weight: 859, value: 462 },
  { weight: 799, value: 466 },
];
test("CASE: You have full knapsack", () =>
  expect(knapsack(testItems.length, 0, testItems)).toBe(0));
test("CASE: most valuable in weight 1", () =>
  expect(knapsack(testItems.length, 1, testItems)).toBe(686));
test("CASE: normal use case", () =>
  // 314 + 686 + 91 + 448 + 839 + 204 = 2582
  // 1   + 1   + 1  + 96  + 303 + 80  = 482
  expect(knapsack(testItems.length, 500, testItems)).toBe(2582));
test("CASE: You have big shoulder", () =>
  expect(knapsack(testItems.length, 100000, testItems)).toBe(
    testItems.reduce((acc, el) => acc + el.value, 0)
  ));
