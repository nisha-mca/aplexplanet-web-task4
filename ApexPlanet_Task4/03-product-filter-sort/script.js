const products = [
    { name: 'Rose Bouquet', category: 'Flowers', price: 499, rating: 4.8, icon: '🌹' },
    { name: 'Sunflower Bouquet', category: 'Flowers', price: 399, rating: 4.5, icon: '🌻' },
    { name: 'Gift Box', category: 'Gifts', price: 699, rating: 4.7, icon: '🎁' },
    { name: 'Chocolate Gift', category: 'Gifts', price: 299, rating: 4.2, icon: '🍫' },
    { name: 'Money Plant', category: 'Plants', price: 249, rating: 4.6, icon: '🪴' },
    { name: 'Jasmine Plant', category: 'Plants', price: 349, rating: 4.4, icon: '🌱' },
    { name: 'Lily Bouquet', category: 'Flowers', price: 599, rating: 4.9, icon: '💐' },
    { name: 'Cute Plant Pot', category: 'Plants', price: 199, rating: 4.1, icon: '🌿' }
];
const category = document.getElementById('category'),
    maxPrice = document.getElementById('maxPrice'),
    sort = document.getElementById('sort'),
    container = document.getElementById('products'),
    result = document.getElementById('result');
function render() {
    let data = products.filter(p => (category.value === 'all' || p.category === category.value) && (!maxPrice.value || p.price <= Number(maxPrice.value)));
    if (sort.value === 'priceLow') data.sort((a, b) => a.price - b.price);
    if (sort.value === 'priceHigh') data.sort((a, b) => b.price - a.price);
    if (sort.value === 'rating') data.sort((a, b) => b.rating - a.rating);
    container.innerHTML = data.map(p => `<article class="product">
            <div class="emoji">
            ${p.icon}</div><h3>
            ${p.name}</h3>
            <p>${p.category}</p>
            <p class="price">₹${p.price}</p>
            <p class="rating">★ ${p.rating}</p></article>`).join('');
    result.textContent = `Showing ${data.length} product(s)`;
    if (!data.length) container.innerHTML = '<p>No products found.</p>'
}
[category, maxPrice, sort].forEach(el => el.addEventListener('input', render)); render();
