// Generate a random number every 2 secs


const generateRandom = () => {
    setInterval(()=>{
        console.log(Math.round(Math.random()*10))
    }, 2000)
}

generateRandom()