// Utility function to trim spaces in template strings
export function tl(strings: TemplateStringsArray, ...values: any[]) {
  let output = ''
  for (let i = 0; i < values.length; i += 1) {
    output += strings[i] + values[i]
  }
  output += strings[values.length]

  return output
    .split(/(?:\r\n|\n|\r)/)
    .map((line) => line.replace(/^\s+/gm, ''))
    .join(' ')
    .trim()
}
