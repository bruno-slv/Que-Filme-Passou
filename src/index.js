const axios = require('axios');

axios.get("https://api.jsonbin.io/b/5fbbfcaf04be4f05c9295ec8")
    .then(response =>{
        console.log(response.data["1974"])
    });