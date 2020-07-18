/*const fetch = require('node-fetch');
  
  async function getPrice() {
    try {
      const response = await fetch(
        `https://www.asos.com/api/product/catalogue/v3/stockprice?productIds=10264367&store=RU&currency=RUB&keyStoreDataversion=j42uv2x-26`,
      );
      const data = await response.json();
      console.log('Current price', data[0].productPrice.current.value);
      console.log('Full price', data[0].productPrice. previous.value);
      
      } catch (e) {
        console.log(e)
      }   
    }
    getPrice(); */


    async function getInfo() {
      try {
        const SCRAP_API = `http://api.scraperapi.com?api_key=757c1d4481ae11fdee47aebd4b5573aa&url=`;

        const html = await (await fetch(`${SCRAP_API}https://www.asos.com/ru/asos-tall/chernye-dzhinsy-s-zavyshennoj-taliej-asos-design-tall/prd/10264367?clr=odnotonnyj-chernyj&colourwayid=15106387&SearchQuery=&cid=3630`)).text();

       const document = new DOMParser().parseFromString(html, 'text/html');
           
      console.log(document.body);
      
      console.log('Заголовок:', document.querySelector('.product-hero').querySelector('h1').innerHTML);
      console.log( 'Картинка товара:', document.querySelector('#product-gallery').childNodes[1].getAttribute('src'));
      
          } catch (e) {
            console.log(e)
          }   
        }
        getInfo(); 
       
        