const fetch = require("node-fetch");
  
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
    getPrice(); 


    async function getInfo() {
      try {
        const response = await fetch(
          `https://www.asos.com/api/fashion/contentapi/v1/components/?country=RU&store=RU&lang=ru-RU&keystoredataversion=j42uv2x-26&context=eyJwcmVtaWVyIjoiRiIsImN1c3RvbWVyU3RhdHVzIjoidW5rbm93biJ9`,
          );
          const data = await response.json();
          console.log( data[0].data.columns);
          console.log(data[1].data.columns);
          
          } catch (e) {
            console.log(e)
          }   
        }
        getInfo(); 
    