export function getSortedItems(items: any[]) {
  return items.slice().sort((x, y) => {
    return x.order > y.order ? 1 : -1;
  });
}
