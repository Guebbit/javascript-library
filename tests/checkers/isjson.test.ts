import { isJSON } from '../../src';

describe("(isJSON) check if JSON is valid", () => {
	test("Empty string", () => {
		expect(
			isJSON('')
		).toBeFalsy();
	});
	test("Empty JSON array", () => {
		expect(
			isJSON('[]')
		).toBeTruthy();
	});
	test("Empty JSON object", () => {
		expect(
			isJSON('{}')
		).toBeTruthy();
	});
	test("Empty JSON array", () => {
		expect(
			isJSON('["lorem", "ipsum"]')
		).toBeTruthy();
	});
	test("Empty JSON object", () => {
		expect(
			isJSON('{"lorem": "ipsum"}')
		).toBeTruthy();
	});
});
