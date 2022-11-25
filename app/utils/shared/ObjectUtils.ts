export function updateItem(items: any[], setItems: any, id: string, itemAttributes: any, idProp = "id") {
  const index = items.findIndex((x) => x[idProp] === id);
  if (index !== -1) {
    setItems([...items.slice(0, index), Object.assign({}, items[index], itemAttributes), ...items.slice(index + 1)]);
  }
}

export function updateItemByIdx(items: any[], setItems: any, index: number, itemAttributes: any) {
  if (index !== -1) {
    setItems([...items.slice(0, index), Object.assign({}, items[index], itemAttributes), ...items.slice(index + 1)]);
  }
}
