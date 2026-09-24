import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { test } from "node:test";
import { descriptionParagraphs } from "../app/lib/descriptions.ts";

const readJson = (path) => JSON.parse(readFileSync(new URL(path, import.meta.url), "utf8"));
const english = readJson("../app/i18n/locales/en.json");
const path = readJson("../app/data/path/path.json");
const projects = readJson("../app/data/projects/projects.json");
const minecraft = readJson("../app/data/projects/minecraft.json");
const games = readJson("../app/data/projects/games.json");
const websites = readJson("../app/data/projects/websites.json");
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
        assert.deepEqual(Object.keys(dictionary.skillCategories).sort(), skills.map((entry) => entry.id).sort());
        for (const entry of path) {
            assert.ok(dictionary.pathTypes[entry.type], `Missing type: ${entry.type}`);
            assert.ok(dictionary.pathSections[entry.section], `Missing section: ${entry.section}`);
        }
    });
}

test("All collections store descriptions directly in their project data", () => {
    for (const collection of [projects, games, minecraft, websites]) {
        for (const project of collection) {
            assert.ok(Object.hasOwn(project, "description"), `${project.id}: missing description field`);
            for (const locale of ["en", "fr", "de", "pl"]) {
                assert.ok(descriptionParagraphs(project.description, locale).length, `${project.id}: no readable description for ${locale}`);
            }
        }
    }
});

test("Descriptions accept text, paragraphs and translations without crashing", () => {
    assert.deepEqual(descriptionParagraphs("First paragraph.\r\n\r\nSecond paragraph."), ["First paragraph.", "Second paragraph."]);
    assert.deepEqual(descriptionParagraphs({ fr: "Bonjour", en: "Hello" }, "fr"), ["Bonjour"]);
    assert.deepEqual(descriptionParagraphs({ fr: "", en: "Hello" }, "fr"), ["Hello"]);
    assert.deepEqual(descriptionParagraphs({ fr: "Bonjour" }, "pl"), ["Bonjour"]);
    assert.deepEqual(descriptionParagraphs([" One ", "", "Two"]), ["One", "Two"]);
    for (const missing of [undefined, null, "", {}, { fr: 42 }, 42]) {
        assert.deepEqual(descriptionParagraphs(missing), []);
    }
});
