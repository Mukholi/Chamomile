var currentPage = 1

//Product Item Animation
var productItems = document.getElementsByClassName('product-item')
var productPageAnimationIn = gsap.timeline()
productPageAnimationIn.pause()
productPageAnimationIn.set('.app-page-product',{display:"block"})
productPageAnimationIn.to('.app-page-product',{top:"0%", duration:.5})
productPageAnimationIn.set('.app-page-product',{overflowY:"scroll"})
productPageAnimationIn.set('body',{overflowY:"hidden"})
//Shimmer Elements
var productPage = document.getElementsByClassName('app-page-product-container')[0]
var shimmerContainer = document.getElementsByClassName('shimmer-container')
var shimmerElement = document.getElementsByClassName('shimmer-element')
var shimmerChildren = document.getElementsByClassName('shimmer-child')
productPageAnimationIn.to(shimmerElement,{opacity:0, duration:0.1, delay:1})
productPageAnimationIn.to(shimmerChildren,{opacity:1, duration:0.25})
productPageAnimationIn.set(shimmerElement,{display:'none'})


//Load JSON Data
document.addEventListener('DOMContentLoaded', function() {
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            displayProducts(data.products)
        })
        .catch(error => console.error('Error fetching the JSON:', error));
});

let shimmerAnimationHomePage = gsap.timeline()
shimmerAnimationHomePage.pause()
let homePage = document.getElementsByClassName("app-page-home")[0]
let homePageShimmerElements = homePage.querySelectorAll(".shimmer-element")
let homePageShimmerChildren = homePage.querySelectorAll(".shimmer-child")

shimmerAnimationHomePage.set(homePageShimmerElements,{opacity:0})
shimmerAnimationHomePage.set(homePageShimmerElements,{display:"none"})
shimmerAnimationHomePage.set(homePageShimmerChildren,{opacity:1},"-=0.75")

function displayProducts(products) {
    gsap.to(".app-splash-screen",{opacity:0, duration:1})
    gsap.set(".app-splash-screen",{display:"none", delay:1})
    setTimeout(()=>{shimmerAnimationHomePage.restart()},1000)

    products.forEach(category => {
        category.forEach(product => {
            console.log(product.productName);
        });
    });
}

//Create Product Item
let newProductCard = (__productID, __productEmoji)=>{




    function createProductCard(data) {
        // Create the main container
        const productCard = document.createElement('div');
        productCard.classList.add('app-product-card');
      
        // Create the product link
        const productLink = document.createElement('div');
        productLink.classList.add('app-product-card-link', 'product-item');
        productLink.setAttribute('productID', data.productID);
        productLink.setAttribute('productEmoji', data.productEmoji);
        productLink.setAttribute('productUnit', data.productUnit);
        productLink.setAttribute('productUnitPrural', data.productUnitPrural);
        productLink.setAttribute('productStatus', data.productStatus);
      
        // Create left and right sections
        const productLeft = document.createElement('div');
        productLeft.classList.add('app-product-card-left');
        const productRight = document.createElement('div');
        productRight.classList.add('app-product-card-right');
      
        // Create left image container
        const leftImageCont = document.createElement('div');
        leftImageCont.classList.add('app-product-card-left-image-cont');
      
        // Create shimmer container and element for image loading effect
        const shimmerContainer = document.createElement('div');
        shimmerContainer.classList.add('shimmer-container');
        const shimmerElement = document.createElement('div');
        shimmerElement.classList.add('shimmer-element');
        shimmerElement.innerHTML = '<div class="shimmer"></div>';
        shimmerContainer.appendChild(shimmerElement);
      
        // Create image element
        const productImage = document.createElement('img');
        productImage.classList.add('app-product-card-left-image', 'shimmer-child');
        productImage.setAttribute('src', data.imageUrl || './assets/image/product01.jpg'); // Set default image if imageUrl is not provided
      
        // Append image and shimmer to container
        shimmerContainer.appendChild(productImage);
        leftImageCont.appendChild(shimmerContainer);
      
        // Create details section
        const productDetails = document.createElement('div');
        productDetails.classList.add('app-product-card-details');
      
        // Create another shimmer container for title loading effect
        const detailsShimmer = document.createElement('div');
        detailsShimmer.classList.add('shimmer-container');
        detailsShimmer.innerHTML = '<div class="shimmer-element"><div class="shimmer"></div></div><div class="shimmer-element"><div class="shimmer"></div></div>';
      
        // Create title element
        const productTitle = document.createElement('p');
        productTitle.classList.add('app-product-card-details-title', 'shimmer-child');
        productTitle.textContent = data.productTitle;
      
        // Append title and shimmer to details container
        detailsShimmer.appendChild(productTitle);
        productDetails.appendChild(detailsShimmer);
      
        // Create another shimmer container for price loading effect
        const priceShimmer = document.createElement('div');
        priceShimmer.classList.add('shimmer-container');
        priceShimmer.innerHTML = '<div class="shimmer-element"><div class="shimmer"></div></div>';
      
        // Create price element with product attributes
        const productPrice = document.createElement('p');
        productPrice.classList.add('app-product-card-details-price', 'shimmer-child');
        productPrice.setAttribute('productMinimumQuantity', data.productMinimumQuantity);
        productPrice.setAttribute('productMaximumQuantity', data.productMaximumQuantity);
        productPrice.setAttribute('productQuantityDelta', data.productQuantityDelta);
        productPrice.textContent = `UGX <span class="math-inline">\{data\.productPrice\} /</span>{data.productUnit}`;
      
        // Append price and shimmer to details container
        priceShimmer.appendChild(productPrice);
        productDetails.appendChild(priceShimmer);
      
        // Add product description
        const productInfo = document.createElement('p');
        productInfo.classList.add('app-product-card-details-info');
        productInfo.textContent = data.productInfo;
        productDetails.appendChild(productInfo);
      
        // Append details and left section to product link
        productLink.appendChild(productLeft);
        productLink.appendChild(productRight);
        productLeft.appendChild(leftImageCont);
        productRight.appendChild(detailsShimmer);
        productRight.appendChild(detailsShimmer);
        productCard.appendChild(productLink)
        return(productCard)
}


//Product Page Animation
let _productPrice = 1
let _productMinimumQuantity = 1
let _productMaximumQuantity = 0
let _productQuantityDelta = 1
let _productUnit = ""
let _productUnitPrural = ""

for(let productItemsIndex = 0; productItemsIndex < productItems.length; productItemsIndex++){
    productItems[productItemsIndex].addEventListener('click',(e)=>{
        e.preventDefault()
        //Get Product Details
        let _productID = productItems[productItemsIndex].getAttribute("productID")
        let _productEmoji = productItems[productItemsIndex].getAttribute("productEmoji")
        let _productName = productItems[productItemsIndex].querySelector(".app-product-card-details-title").textContent
        let _productImage = productItems[productItemsIndex].querySelector(".app-product-card-left-image").getAttribute("src")
        let _productStatus = productItems[productItemsIndex].getAttribute("productStatus")
        let _productDescription = productItems[productItemsIndex].querySelector(".app-product-card-details-info").textContent
        _productPrice = productItems[productItemsIndex].querySelector(".app-product-card-details-price").getAttribute("productPrice")
        _productMinimumQuantity = productItems[productItemsIndex].querySelector(".app-product-card-details-price").getAttribute("productMinimumQuantity")
        _productMaximumQuantity = productItems[productItemsIndex].querySelector(".app-product-card-details-price").getAttribute("productMaximumQuantity")
        _productQuantityDelta = productItems[productItemsIndex].querySelector(".app-product-card-details-price").getAttribute("productQuantityDelta")
        _productUnit = productItems[productItemsIndex].getAttribute("productUnit")
        _productUnitPrural = productItems[productItemsIndex].getAttribute("productUnitPrural")

        //Update Product Details
        document.getElementsByClassName("app-page-product-form-title")[0].textContent = _productName
        document.getElementsByClassName("app-page-product-carousel-img")[0].setAttribute("src", _productImage)
        document.getElementsByClassName("app-page-product-form-id")[0].textContent = "(" + _productEmoji + " - #" + _productID + ")"
        document.getElementsByClassName("app-page-product-form-status")[0].textContent = _productStatus
        document.getElementsByClassName("app-page-product-form-price-figure")[0].textContent = _productPrice
        if(_productMinimumQuantity <= 1) {document.getElementsByClassName("app-page-product-form-counter-input-label-unit")[0].textContent = _productUnit}
        else{document.getElementsByClassName("app-page-product-form-counter-input-label-unit")[0].textContent = _productUnitPrural}
        document.getElementsByClassName("app-page-product-form-counter-input-label-number")[0].textContent = _productMinimumQuantity
        document.getElementsByClassName("app-page-product-form-paragraph")[0].textContent = _productDescription

        //Start Product Page Animation
        productPageAnimationIn.restart()
    })
}

//Product Page Input Controll
let productPageInputBtn = document.getElementsByClassName("app-page-product-form-counter-btn")
//Adding
productPageInputBtn[0].addEventListener("click",()=>{
    if(_productMaximumQuantity <= 0){
        document.getElementsByClassName("app-page-product-form-counter-input-label-number")[0].textContent = parseFloat(document.getElementsByClassName("app-page-product-form-counter-input-label-number")[0].textContent)+parseFloat(_productQuantityDelta)
    }
    else{
        if(parseFloat(document.getElementsByClassName("app-page-product-form-counter-input-label-number")[0].textContent)+parseFloat(_productQuantityDelta) <= _productMaximumQuantity){
            document.getElementsByClassName("app-page-product-form-counter-input-label-number")[0].textContent = parseFloat(document.getElementsByClassName("app-page-product-form-counter-input-label-number")[0].textContent)+parseFloat(_productQuantityDelta)
        }
    }

    if(parseFloat(document.getElementsByClassName("app-page-product-form-counter-input-label-number")[0].textContent) <= 1){
        document.getElementsByClassName("app-page-product-form-counter-input-label-unit")[0].textContent = _productUnit
    }
    else{
        document.getElementsByClassName("app-page-product-form-counter-input-label-unit")[0].textContent = _productUnitPrural
    }

    document.getElementsByClassName("app-page-product-form-price-figure")[0].textContent = parseFloat(_productPrice) * parseFloat( document.getElementsByClassName("app-page-product-form-counter-input-label-number")[0].textContent)

})

//Subtracting
productPageInputBtn[1].addEventListener("click",()=>{
    if(parseFloat(document.getElementsByClassName("app-page-product-form-counter-input-label-number")[0].textContent)-parseFloat(_productQuantityDelta) >= _productMinimumQuantity){
        document.getElementsByClassName("app-page-product-form-counter-input-label-number")[0].textContent = parseFloat(document.getElementsByClassName("app-page-product-form-counter-input-label-number")[0].textContent)-parseFloat(_productQuantityDelta)
    }

    if(parseFloat(document.getElementsByClassName("app-page-product-form-counter-input-label-number")[0].textContent) <= 1){
        document.getElementsByClassName("app-page-product-form-counter-input-label-unit")[0].textContent = _productUnit
    }
    else{
        document.getElementsByClassName("app-page-product-form-counter-input-label-unit")[0].textContent = _productUnitPrural
    }

    document.getElementsByClassName("app-page-product-form-price-figure")[0].textContent = parseFloat(_productPrice) * parseFloat( document.getElementsByClassName("app-page-product-form-counter-input-label-number")[0].textContent)
    
})


//Product Animation Reverse
var productPageBackBtn = document.getElementsByClassName("app-page-back-btn-cont")[0]
productPageBackBtn.addEventListener('click',()=>{
    productPageAnimationIn.reverse({duration:0})
})

//App Navigation

let navigationItems = document.getElementsByClassName("app-navigation-item")
let page1Animation = gsap.timeline()
page1Animation.pause()
page1Animation.to("#page1",{y:"-150%"})
let page2Animation = gsap.timeline()
page2Animation.pause()
page2Animation.to("#page2",{y:"0vh"})

navigationItems[0].addEventListener("click",()=>{
    switch(currentPage){
        case 1:{
            break
        }
        case 2:{
            page1Animation.reverse()
            page2Animation.reverse()
            break
        }
        
    }
    currentPage = 1

})
navigationItems[1].addEventListener("click",()=>{
    switch(currentPage){
        case 1:{
            page1Animation.restart()
            page2Animation.restart()
            break
        }
        case 2:{
            break
        }
        
    }
    currentPage = 2
    
})


//Shimmer element Animation