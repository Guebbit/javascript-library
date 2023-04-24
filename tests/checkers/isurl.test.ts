import { isURL } from '../../src';

describe("(isObject) check if object", () => {
	test("Empty string", () => {
		expect(
			isURL('')
		).toBeFalsy();
	});
	test("Some string", () => {
		expect(
			isURL('lorem ipsum')
		).toBeFalsy();
	});

	test("Email", () => {
		expect(
			isURL('lorem@ipsum.it')
		).toBeFalsy();
	});
	test("Url but not quite 1 (return true)", () => {
		expect(
			isURL('lorem.ipsum')
		).toBeTruthy();
	});
	test("Url but not quite 2 (return false)", () => {
		expect(
			isURL('lorem.ipsum:')
		).toBeFalsy();
	});
	test("Real URL", () => {
		expect(
			isURL('https://lodash.com/')
		).toBeTruthy();
	});
});
