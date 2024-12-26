 
 // Fetch data from API
 let egyimg = document.getElementById("egyimg")
 let countryname =document.getElementById("countryname");
 let regionname =document.getElementById("regionname");
 let population=document.getElementById("population");
 let languages=document.getElementById("language");
 let currency =document.getElementById("currency");
 async function fetchData() {
    const response = await fetch("https://restcountries.com/v2/name/Egypt");
    const data = await response.json();
    
    //get the flag image URL and display it on the webpage
    egyimg.src = data[0].flags.png;
    //get the country name
    countryname.textContent =data[0].name;
    //get region name
    regionname.textContent = data[0].region;
    //get population
    population.textContent ="Population: " + data[0].population;
    //get languages
    languages.textContent ="Languages: " + data[0].languages[0].name;
    //get currency
   currency.textContent = "Currency: " + data[0].currencies[0].name;
  }
  fetchData();
  
  //libya 
  let lybimg = document.getElementById("lybimg")
 let counlyb =document.getElementById("counlyb");
 let lybreg =document.getElementById("lybreg");
 let lybpop=document.getElementById("lybpop");
 let lyblang=document.getElementById("lyblang");
 let lybcurr =document.getElementById("lybcurr");
 async function fetchlybdata() {
    const response = await fetch("https://restcountries.com/v2/name/Libya");
    const data = await response.json();
        //get the flag image URL and display it on the webpage
    lybimg.src = data[0].flags.png;
    //get the country name
    counlyb.textContent =data[0].name;
    //get region name
    lybreg.textContent = data[0].region;
    //get population
    lybpop.textContent ="Population: " + data[0].population;
    //get languages
    lyblang.textContent ="Languages: " + data[0].languages[0].name;
    //get currency
    lybcurr.textContent = "Currency: " + data[0].currencies[0].name;
  }
  fetchlybdata();
  
