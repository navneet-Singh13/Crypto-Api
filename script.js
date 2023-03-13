const container = document.querySelector('.container');
 
const set_card_property = function (coin ) {
     const html = `<div class="card">
     <div class ="header">
     <img src="${coin.iconUrl}" alt="" class ="coin-img">
     <span class ="coin-name" > ${(coin.name).split(' ').slice(0 , 1)}  </span>
     </div>
    
     <div class="content">
     <h3 >Price : $${Math.round(coin.price).toFixed(2)}   </h3>
     <p>Symbol : ${coin.symbol}   </p>
     <p>Rank : ${coin.rank} </p>
     
     <p>24hr Volume  : ${coin['24'+ 'hVolume']} </p>
    <a href ="${coin.coinrankingUrl}" > Learn More </a>
     </div>
     </div>`; 
    container.insertAdjacentHTML('beforeend' , html) ;
    
}
const GetCoins = async function ( ){ 
    const res = await fetch('https://api.coinranking.com/v2/coins')  
    const json_data = await res.json( ); 
    const coins = json_data.data.coins;
    console.log( coins ); 
    coins.forEach(coin => {
        set_card_property(coin ) ;
    });
    
     
}
GetCoins( ); 