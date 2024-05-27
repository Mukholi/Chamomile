// //Add to URL
// const APP_URL = window.location.href;

// function addToUrl(screen,value,productName,productId){
//     window.location.href = APP_URL+"#?"+screen+"="+value+"?"+productName+"="+productId
// }

// function getFromUrl() {
//     const regex = /#\?(.*)/;
//     const url = window.location.href
//     const match = url.match(regex);
    
//     if (match) {
//     //   console.log(match[1]);
//       var params = match[1].split('&');
//       params = params[0].split('?')
//       return params;
      
//     }

// }

// let productPageItem = document.getElementsByClassName('product-page')

// let productImageAnimationOpen = gsap.timeline({})
// productImageAnimationOpen.pause()
// productImageAnimationOpen.set(".app-page-product",{display:"block"})
// productImageAnimationOpen.to(".app-page-product",{height:"100vh"})

// if(productPageItem){
//     for(let counter = 0; counter < productPageItem.length; counter++){
//         productPageItem[counter].addEventListener('click',(event)=>{
//             event.preventDefault()
//             addToUrl('product','page','extra','data')
//             productPage = true
//             productImageAnimationOpen.restart()
//         })
//     }
// }


// window.addEventListener('popstate', function(event) {
//     event.preventDefault();
//     var appNavigationData = getFromUrl()
//     productImageAnimationOpen.reverse()
//     console.log(appNavigationData)
// });

//Product Item Widget
let productItem = document.getElementsByClassName('product-item')


for (let productIndex = 0; productIndex < productItem.length; productIndex++){
    productItem[productIndex].addEventListener('click',(event)=>{
        event.preventDefault()
        var productItemAnimationOpen = gsap.timeline()
        productItemAnimationOpen.pause()

        var currenProductItemCard = document.getElementsByClassName("app-product-card")[productIndex]
        var currenProductItemLink = document.getElementsByClassName("app-product-card-link")[productIndex]
        var currenProductItemCardTop = document.getElementsByClassName("app-product-card-left")[productIndex]
        var currenProductItemCardTopImageContainer = document.getElementsByClassName("app-product-card-left-image-cont")[productIndex]
        var currenProductItemCardBottom = document.getElementsByClassName("app-product-card-right")[productIndex]
        var currenProductItemCardTitle = document.getElementsByClassName("app-product-card-details-title")[productIndex]


        productItemAnimationOpen.set(currenProductItemLink,{flexDirection:"column"})
        productItemAnimationOpen.set(currenProductItemCardBottom,{alignItems:"flex-start", paddingTop:"0.5cm"})

        productItemAnimationOpen.to(currenProductItemCard,{height:"15cm", duration:1})
        productItemAnimationOpen.to(currenProductItemCardTop,{width:"100%",height:"12cm", duration:1},"=-1")
        productItemAnimationOpen.to(currenProductItemCardTopImageContainer,{width:"100%",height:"100%", duration:1},"=-1")
        
        productItemAnimationOpen.to(currenProductItemCardTitle,{fontSize:"1.25em", fontWeight:"800"},"=-1")



        productItemAnimationOpen.restart()
    })
}