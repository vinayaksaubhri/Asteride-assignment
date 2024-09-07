export function generateDelay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
