/**
 * Truncates a string to a specified maximum length and appends an ellipsis (...) to indicate that the text has been shortened.
 *
 * @param {string} text The text to be truncated.
 * @param {number} maxLength The maximum length of the truncated text.
 * @returns {string} The truncated text with ellipsis if the text exceeds the maximum length, or the original text if it is shorter than or equal to the maximum length.
 *
 * @example
 * ```javascript
 * const truncatedText = truncateText("This is an example of slightly longer text.", 10);
 * console.log(truncatedText); // Output: "This is an example..."
 * ```
 */
export default function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text
  }

  const truncatedText = text.substring(0, maxLength)
  const lastSpaceIndex = truncatedText.lastIndexOf(' ')

  return `${
    lastSpaceIndex === -1
    ? truncatedText
    : truncatedText.substring(0, lastSpaceIndex + 1)
  }...`
}
