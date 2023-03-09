const p=fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum%2Clitecoin%2Ccardano%2Cdogecoin&vs_currencies=usd&include_24hr_change=true')

p.then((res)=>{
    return res.json()}).then(json=>{
    console.log(json)
    const container= document.querySelector('.container')
    const coins= Object.getOwnPropertyNames(json)
 

    for(let coin of coins){
        const coininfo=json[`${coin}`]
        const price=coininfo.usd
        const change=coininfo.usd_24h_change
        container.innerHTML+=`
        
        <div class="coin ${change<0? 'falling' : 'rising'}">
        <div class ="coin-name">
        <h3>${coin}</h3>
        <span>USD</span>
        </div>
        <div class="coin-price">
        <span class="price">${price}</span>
        <span class="change">${change}</span>
        </div>
        `
    }
})
