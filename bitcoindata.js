var bitcoinData = [
{
    "date": "2015-04-28",
    "txVolume(USD)": 266033727.778,
    "txCount": 113638,
    "marketcap(USD)": 3228470000,
    "price(USD)": 228.97,
    "exchangeVolume(USD)": 21469200,
    "generatedCoins": 3750,
    "fees": 16.03122042,
    "activeAddresses": null
  },
  {
    "date": "2015-04-29",
    "txVolume(USD)": 264200418.561,
    "txCount": 118296,
    "marketcap(USD)": 3181700000,
    "price(USD)": 225.59,
    "exchangeVolume(USD)": 18936500,
    "generatedCoins": 3350,
    "fees": 17.36232648,
    "activeAddresses": null
  },
  {
    "date": "2015-04-30",
    "txVolume(USD)": 239909582.364,
    "txCount": 111099,
    "marketcap(USD)": 3183860000,
    "price(USD)": 225.69,
    "exchangeVolume(USD)": 33818600,
    "generatedCoins": 3200,
    "fees": 16.08550077,
    "activeAddresses": null
  }
  ]
  
  // const result = bitcoinData.filter(newData => newData.date === "2013-05-01")
  
  // console.log(result)
  //1. create an array containing only the date and price of 
  //each day. Use the built-in map method to create an array containing that information
  
  const newArray = bitcoinData.map(currentObject => {
     const newObject = {}; 
     newObject.date = currentObject.date,
     newObject["price(USD)"] = currentObject["price(USD)"];
     return newObject;
   });
                                    
   console.log(newArray)    
  //2. Let’s create an array that only includes days when exchange volume was not 0. 
  //Which method should we use?
  const exchangeVolume = bitcoinData.filter(elem => elem["exchangeVolume(USD)"]!==0);
  console.log(exchangeVolume)
  
  
  //3. Everyday, new Bitcoins are generated. If we want to find out how many were generated all together during the time that’s provided in the dataset, 
  //can you figure out how to calculate it using reduce?
  const allCoins = bitcoinData.map(element => {
       let data;
       data = element.generatedCoins
   	  return data
  });
  
  console.log(allCoins)
  
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  console.log(allCoins.reduce(reducer));
  
  
  // const fluctuation = bitcoinData.filter(daysOver100 => daysOver100["price(USD)"] > 100);
  // //console.log (fluctuation);
  // console.log (fluctuation.length);
  
  // const transactionFees = bitcoinData.map(element => {
  //   	return element.fees
  // });
  // //console.log(transactionFees)
  
  // const reducer = (accumulator, currentValue) => accumulator + currentValue;
  // //console.log(transactionFees.reduce(reducer));
  
  // const totalFees = transactionFees.reduce(reducer);
  // const avgFees = totalFees/transactionFees.length
  
  // console.log(Math.floor(avgFees));
  