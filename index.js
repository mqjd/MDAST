import fs from 'node:fs/promises';
import * as acorn from 'acorn';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { toMarkdown } from 'mdast-util-to-markdown';
import { mdxJsx } from 'micromark-extension-mdx-jsx';
import { mdxJsxFromMarkdown, mdxJsxToMarkdown } from 'mdast-util-mdx-jsx';

const doc = `
import deckTheme from './deck-theme'

export const theme = deckTheme
<MyComponent theme = {} />`;

const tree = fromMarkdown(doc, {
  extensions: [mdxJsx({ acorn: acorn, addResult: true })],
  mdastExtensions: [mdxJsxFromMarkdown()],
});

console.log(JSON.stringify(tree, null, 2));
