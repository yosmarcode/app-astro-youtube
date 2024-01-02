export function formatCompact(value: number) {
    const result = new Intl.NumberFormat(
      'en-US',
      { notation: "compact"}
    ).format(value)
    return result;
  }