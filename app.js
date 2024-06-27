// Function to create a product card
function createProductCard(product) {
    const statusHtml = product.productStatus !== "" 
        ? `<div class="app-product-card-details-badge-cont">
             <p class="app-product-card-details-badge">${product.productStatus}</p>
           </div>`
        : '';

    return `
    <div class="app-product-card">
        <div class="app-product-card-link product-item" 
             productID="${product.productID}" 
             productEmoji="${product.productEmoji}" 
             productUnit="${product.productUnit}" 
             productUnitPrural="${product.productUnitPlural}" 
             productStatus="${product.productStatus}">
            <div class="app-product-card-left">
                <div class="app-product-card-left-image-cont">
                        <div class="shimmer-container">
                            <div class="shimmer-element"><div class="shimmer"></div></div>
                            <img class="app-product-card-left-image shimmer-child" src="./assets/image/product01.jpg" alt="${product.productName}">
                        </div>
                </div>
            </div>
            <div class="app-product-card-right">
                <div class="app-product-card-details">
                    ${statusHtml}
                    <div class="shimmer-container">
                        <div class="shimmer-element"><div class="shimmer"></div></div>
                        <div class="shimmer-element"><div class="shimmer"></div></div>
                        <p class="app-product-card-details-title shimmer-child">${product.productName}</p>
                    </div>
                    <div class="shimmer-container">
                        <div class="shimmer-element"><div class="shimmer"></div></div>
                        <p class="app-product-card-details-price shimmer-child" 
                        productMinimumQuantity="${product.productMinimumQuantity}" 
                        productMaximumQuantity="${product.productMaximumQuantity}" 
                        productQuantityDelta="${product.productQuantityDelta}" 
                        productPrice="${product.productPrice}">
                        UGX ${product.productPrice} /${product.productUnit}
                        </p>
                    </div>
                    <p class="app-product-card-details-info">${product.productDescription}</p>
                </div>
            </div>
        </div>
    </div>
    `;
}

// Function to display all products in the inventory tab
function displayInventory() {
    const inventoryArea = document.getElementById('app-page-inventory-area');
    inventoryArea.innerHTML = ''; // Clear existing content

    products.forEach(product => {
        inventoryArea.innerHTML += createProductCard(product);
    });
}

// Function to filter products based on search input
function filterProducts(searchTerm) {
    return products.filter(product => 
        product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.productDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.productCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.productID.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.productEmoji.includes(searchTerm.toLowerCase()) 
    );
}

// Event listener for search input
document.querySelector('.app-inventory-search-form-input').addEventListener('input', function(e) {
    const searchTerm = e.target.value;
    const filteredProducts = filterProducts(searchTerm);
    const inventoryArea = document.getElementById('app-page-inventory-area');
    inventoryArea.innerHTML = ''; // Clear existing content

    filteredProducts.forEach(product => {
        inventoryArea.innerHTML += createProductCard(product);
    });
});

// Call displayInventory when the page loads
document.addEventListener('DOMContentLoaded', displayInventory);

// Display ProductPage

function pushProductPage(__productItem){
    let _productID = __productItem.getAttribute("productID")
    let _productEmoji = __productItem.getAttribute("productEmoji")
    let _productName = __productItem.querySelector(".app-product-card-details-title").textContent
    let _productImage = __productItem.querySelector(".app-product-card-left-image").getAttribute("src")
    let _productStatus = __productItem.getAttribute("productStatus")
    let _productDescription = __productItem.querySelector(".app-product-card-details-info").textContent
    _productPrice = __productItem.querySelector(".app-product-card-details-price").getAttribute("productPrice")
    _productMinimumQuantity = __productItem.querySelector(".app-product-card-details-price").getAttribute("productMinimumQuantity")
    _productMaximumQuantity = __productItem.querySelector(".app-product-card-details-price").getAttribute("productMaximumQuantity")
    _productQuantityDelta = __productItem.querySelector(".app-product-card-details-price").getAttribute("productQuantityDelta")
    _productUnit = __productItem.getAttribute("productUnit")
    _productUnitPrural = __productItem.getAttribute("productUnitPrural")

    //Update Product Details
    document.getElementsByClassName("app-page-product-form-title")[0].textContent = _productName
    document.getElementsByClassName("app-page-product-carousel-img")[0].setAttribute("src", _productImage)
    document.getElementsByClassName("app-page-product-form-id")[0].textContent = "(" + _productEmoji + " - " + _productID + ")"
    document.getElementsByClassName("app-page-product-form-status")[0].textContent = _productStatus
    document.getElementsByClassName("app-page-product-form-price-figure")[0].textContent = _productPrice
    if(_productMinimumQuantity <= 1) {document.getElementsByClassName("app-page-product-form-counter-input-label-unit")[0].textContent = _productUnit}
    else{document.getElementsByClassName("app-page-product-form-counter-input-label-unit")[0].textContent = _productUnitPrural}
    document.getElementsByClassName("app-page-product-form-counter-input-label-number")[0].textContent = _productMinimumQuantity
    document.getElementsByClassName("app-page-product-form-paragraph")[0].textContent = _productDescription

    //Start Product Page Animation
    productPageAnimationIn.restart()
}

// Event delegation for product item clicks
document.getElementById('app-page-inventory-area').addEventListener('click', function(e) {
    const productItem = e.target.closest('.product-item');
    if (productItem) {
       pushProductPage(productItem)
    }
});