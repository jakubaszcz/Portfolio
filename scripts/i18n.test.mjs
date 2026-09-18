import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { test } from "node:test";

const readJson = (path) => JSON.parse(readFileSync(new URL(path, import.meta.url), "utf8"));
const english = readJson("../app/i18n/locales/en.json");
const path = readJson("../app/data/path/path.json");
const projects = readJson("../app/data/projects/projects.json");
const skills = readJson("../app/data/skills/skills.json");

function checkShape(actual, expected, key = "dictionary") {
    if (typeof expected === "string") {
        assert.equal(typeof actual, "string", key);
        assert.ok(actual.trim(), `${key} must not be empty`);
    } else if (Array.isArray(expected)) {
        assert.ok(Array.isArray(actual), key);
        assert.equal(actual.length, expected.length, `${key}: missing paragraphs`);
        expected.forEach((value, index) => checkShape(actual[index], value, `${key}[${index}]`));
    } else {
        assert.deepEqual(Object.keys(actual).sort(), Object.keys(expected).sort(), key);
        Object.entries(expected).forEach(([name, value]) => checkShape(actual[name], value, `${key}.${name}`));
    }
}

for (const file of readdirSync(new URL("../app/i18n/locales/", import.meta.url)).filter((file) => file.endsWith(".json"))) {
    test(`${file}: complete translations and content coverage`, () => {
        const dictionary = readJson(`../app/i18n/locales/${file}`);
        checkShape(dictionary, english);
        assert.deepEqual(Object.keys(dictionary.pathEntries).sort(), path.map((entry) => entry.id).sort());
        assert.deepEqual(Object.keys(dictionary.projectDescriptions).sort(), projects.map((entry) => entry.id).sort());
        assert.deepEqual(Object.keys(dictionary.skillCategories).sort(), skills.map((entry) => entry.id).sort());
        for (const entry of path) {
            assert.ok(dictionary.pathTypes[entry.type], `Missing type: ${entry.type}`);
            assert.ok(dictionary.pathSections[entry.section], `Missing section: ${entry.section}`);
        }
    });
}
