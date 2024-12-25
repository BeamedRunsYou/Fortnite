document.addEventListener('DOMContentLoaded', function () {
    const itemShopSection = document.getElementById('item-shop');

    fetch('https://fortnite-api.com/v2/shop/br')
        .then(response => response.json())
        .then(data => {
            const items = data.data.daily.entries;
            let html = '<ul>';
            items.forEach(item => {
                html += `<li>${item.items[0].name} - ${item.items[0].finalPrice} V-Bucks</li>`;
            });
            html += '</ul>';
            itemShopSection.innerHTML += html;
        })
        .catch(error => {
            console.error('Error fetching item shop data:', error);
            itemShopSection.innerHTML += '<p>Failed to load item shop data.</p>';
        });
});
