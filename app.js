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

