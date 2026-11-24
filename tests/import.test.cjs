const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { test } = require("node:test");
const onig = require("vscode-oniguruma");
const { Registry, parseRawGrammar } = require("vscode-textmate");

test("the Vedic 3 import keyword matches only as a whole token", async () => {
    await onig.loadWASM(readFileSync(require.resolve("vscode-oniguruma/release/onig.wasm")));
    const path = "syntaxes/vedic.tmLanguage.json";
    const registry = new Registry({
        onigLib: Promise.resolve(onig),
        loadGrammar: async () => parseRawGrammar(readFileSync(path, "utf8"), path),
    });
    const grammar = await registry.loadGrammar("source.vedic");
    for (const [word, scope] of [
        ["आवाहन", "keyword.vedic"], ["अवहन", "variable.vedic"],
        ["आवाहनम्", "variable.vedic"], ["उपआवाहन", "variable.vedic"],
    ]) {
        const line = word + ' "./आवाहन.ved"; # आवाहन';
        const { tokens } = grammar.tokenizeLine(line);
        assert.equal(tokens[0].endIndex, word.length);
        assert.equal(tokens[0].scopes.at(-1), scope, word);
        assert(tokens.some(token => token.scopes.includes("string.vedic") &&
            line.slice(token.startIndex, token.endIndex).includes("आवाहन")));
        assert.equal(tokens.at(-1).scopes.at(-1), "comment.vedic");
    }
    registry.dispose();
});
