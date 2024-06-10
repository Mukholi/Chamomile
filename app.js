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


//Product Page Animation
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
        let _productDescription = productItems[productItemsIndex].querySelector(".app-product-card-details-info").textContent
        let _productPrice = productItems[productItemsIndex].querySelector(".app-product-card-details-price").getAttribute("productPrice")
        _productMinimumQuantity = productItems[productItemsIndex].querySelector(".app-product-card-details-price").getAttribute("productMinimumQuantity")
        _productMaximumQuantity = productItems[productItemsIndex].querySelector(".app-product-card-details-price").getAttribute("productMaximumQuantity")
        _productQuantityDelta = productItems[productItemsIndex].querySelector(".app-product-card-details-price").getAttribute("productQuantityDelta")
        _productUnit = productItems[productItemsIndex].getAttribute("productUnit")
        _productUnitPrural = productItems[productItemsIndex].getAttribute("productUnitPrural")

        //Update Product Details
        document.getElementsByClassName("app-page-product-form-title")[0].textContent = _productName
        document.getElementsByClassName("app-page-product-carousel-img")[0].setAttribute("src", _productImage)
        document.getElementsByClassName("app-page-product-form-id")[0].textContent = "(" + _productEmoji + " - #" + _productID + ")"
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
    if(_productMaximumQuantity == 0){document.getElementsByClassName("app-page-product-form-counter-input-label-number")[0].textContent = parseFloat(document.getElementsByClassName("app-page-product-form-counter-input-label-number")[0].textContent)+parseFloat(_productQuantityDelta)}
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