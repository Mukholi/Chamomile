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


for(var productItemsIndex = 0; productItemsIndex < productItems.length; productItemsIndex++){
    productItems[productItemsIndex].addEventListener('click',(e)=>{
        e.preventDefault()
        productPageAnimationIn.restart()
    })
}

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


//LOAD PRODUCTS