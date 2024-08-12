import { test, expect } from "@jest/globals";
import { normalizeURL } from "./crawl.js";

test("check for URLs with trailing slashes", () => {
    const input = "http://blog.boot.dev/path/";
    const expected = "blog.boot.dev/path";

    expect(normalizeURL(input)).toBe(expected);
});

test("check for URLs with http prefix", () => {
    const input = "http://blog.boot.dev/path";
    const expected = "blog.boot.dev/path";

    expect(normalizeURL(input)).toBe(expected);
});

test('normalizeURL capitals', () => {
    const input = 'https://BLOG.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
  });



