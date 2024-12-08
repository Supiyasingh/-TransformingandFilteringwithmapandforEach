function processProducts(products) {
    // Step 1: Use map() to extract the product names
    const productNames = products.map(product => product.name);

    // Step 2: Use forEach() to log messages based on the product price
    products.forEach(product => {
        const message = product.price > 50
            ? `${product.name} is above $50`
            : `${product.name} is below $50`;
        console.log(message);
    });

    // Return the array of product names
    return productNames;
}

// Example usage
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 }
];

const names = processProducts(products);
console.log("Product Names:", names);
