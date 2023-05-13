import { mdxjs } from 'micromark-extension-mdxjs';
import { mdxFromMarkdown, mdxToMarkdown } from 'mdast-util-mdx';

export function remarkMdx(options = {}) {
  const data = this.data();
  console.log(data);

  add('micromarkExtensions', mdxjs(options));
  add('fromMarkdownExtensions', mdxFromMarkdown);
  // add('toMarkdownExtensions', mdxToMarkdown);

  console.log(data);

  /**
   * @param {string} field
   * @param {unknown} value
   */
  function add(field, value) {
    const list =
      // Other extensions
      /* c8 ignore next 2 */
      data[field] ? data[field] : (data[field] = []);

    list.push(value);
  }
}
