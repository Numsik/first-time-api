
/*let p = new Promise((resolve, reject) =>{
    let a = 1 + 2
    if ( a === 2){
        resolve('sucess')
    }else{
        reject('failed')
    }
})


p.then((message) =>{
    console.log('this is the then ' + message)
}).catch((message) =>{
    console.log('this is the catch' + message)
});
*/


async function getTime() {
    try{
        let response = await fetch("https://timeapi.io/api/Time/current/zone?timeZone=Europe/Prague")
        let data = await response.json();
        console.log(data)
        const hour = document.querySelector('.Hours');
        const minutes = document.querySelector('.Minutes');
        const seconds = document.querySelector('.Seconds');
        hour.innerHTML = data.hour
        minutes.innerHTML = data.minute
        seconds.textContent = data.seconds
    }catch(error){
        console.error("error", error)
    }
    
    
}
getTime();
setInterval(getTime, 1000);