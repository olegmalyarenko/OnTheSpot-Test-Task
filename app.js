
  const SCRAP_API = `http://api.scraperapi.com?api_key=757c1d4481ae11fdee47aebd4b5573aa&url=`;
  let galleryArr = [];

  async function getPrice() {
    try {
      const response = await fetch(
        `${SCRAP_API}https://www.asos.com/api/product/catalogue/v3/stockprice?productIds=10264367&store=RU&currency=RUB&keyStoreDataversion=j42uv2x-26`,
      );
      const data = await response.json();
      console.log('Актуальная цена:', data[0].productPrice.current.value);
      console.log('Полная цена:', data[0].productPrice. previous.value);
      
    } catch (e) {
        console.log(e)
      }   
    }
  
  async function getInfo() {
    try {
      const html = await (await fetch(`${SCRAP_API}https://www.asos.com/ru/asos-tall/chernye-dzhinsy-s-zavyshennoj-taliej-asos-design-tall/prd/10264367?clr=odnotonnyj-chernyj&colourwayid=15106387&SearchQuery=&cid=3630`)).text();
      const document = new DOMParser().parseFromString(html, 'text/html');
      
      console.log('Заголовок:', document.querySelector('.product-hero').querySelector('h1').innerHTML);
      const mainImg = document.querySelector('#product-gallery').childNodes[1].getAttribute('src');
      console.log('Картинка товара:', mainImg);
      galleryArr.push(mainImg);

    } catch (e) {
      console.log(e)
      }   
  }

  async function getImages() {
    try {
      for (let i=2; i<=4; i++ ){
      const response = await fetch(
        `https://images.asos-media.com/products/chernye-dzhinsy-s-zavyshennoj-taliej-asos-design-tall/10264367-${i}?$XXL$&wid=513&fit=constrain`,
      )
      .then(res => galleryArr.push(res.url))
    }
    
      console.log('Галлерея:',galleryArr)
          
      
    } catch (e) {
        console.log(e)
      }   
    }
   
    
  
  getInfo(); 

  getPrice();

  getImages();
       
        

  