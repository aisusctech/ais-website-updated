export function validateRegex(pattern: RegExp, value: string): boolean {
  return new RegExp(pattern).test(value)
}