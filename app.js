//Add to URL
const APP_URL = window.location.href;

function addToUrl(item,value){
    window.location.href = APP_URL+"#?"+item+"="+value
}

function getFromUrl() {
    const regex = /#\?(.*)/;
    const url = window.location.href
    const match = url.match(regex);
    
    if (match) {
      console.log(match[1]);
      const params = match[1].split('&');
      const keyValuePairs = [];

      for (const param of params) {
        const [key, value] = param.split('=');
        keyValuePairs.push([key, value]);
      }

      console.log(keyValuePairs);

      return keyValuePairs;
      
    }

}

let productPageItem = document.getElementsByClassName('product-page')
let productPage = false

let productImageAnimationOpen = gsap.timeline({})
productImageAnimationOpen.pause()
productImageAnimationOpen.set(".app-page-product",{display:"block"})
productImageAnimationOpen.to(".app-page-product",{height:"100vh"})

if(productPageItem){
    for(let counter = 0; counter < productPageItem.length; counter++){
        productPageItem[counter].addEventListener('click',(event)=>{
            event.preventDefault()
            addToUrl('product','name')
            productPageOpen = true
            productImageAnimationOpen.restart()
        })
    }
}


window.addEventListener('popstate', function(event) {
    event.preventDefault(); // This line prevents the default back navigation behavior
    // Optionally, you can perform actions here like showing a confirmation dialog
    console.log('Back button pressed! (Navigation prevented)');
    getFromUrl()
    productImageAnimationOpen.reverse()
});