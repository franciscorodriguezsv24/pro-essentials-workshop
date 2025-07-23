type ShoppingCartType = {
  items: string[]
}

const shoppingCart: ShoppingCartType = {
  items: [],
};

console.log(shoppingCart.items);

shoppingCart.items.push("Apple");
shoppingCart.items.push("Banana");
