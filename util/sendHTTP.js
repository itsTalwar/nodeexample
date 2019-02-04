const request = require('request');


const sendRequest = (url,type)=> {
    if(type == 'GET'){
        return new Promise((resolve,reject) => {
            request.get(url , (err,res,body)=> {
                if(err)
                    reject(err);
                else
                    resolve(JSON.parse(body))
            })
        }) 
    }
}

module.exports ={
    sendRequest
}
