const axios = require('axios')

//add other data routes here that you might need
module.exports = (app)=>{
    app.post('/api/news', async({body},res)=>{
    try{
       const {city, date} = body;
    console.log(city,date)
    const {data} = await axios.get(`https://newsapi.org/v2/everything?qInTitle=${city}&from=${date||"2020-5-25"}&sortBy=publishedAt&apiKey=1c73269edb4c41b7be5ddcf1fde33a80`);
    res.json(data); 
    }catch(err){console.log(err)}
})
}

