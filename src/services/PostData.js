export async function PostData(type, userData) {    
     return new Promise(async(resolve, reject) => {
         let FinalUrl = 'https://bokoo.matrixpanel.in/api/' + type;
         var bearer = 'Bearer ';
         if(localStorage.getItem('access_token')){
          bearer = bearer + localStorage.getItem('access_token')
         }
         await fetch(FinalUrl, {
          method: 'POST',
          headers: {
            'Authorization': bearer,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData)
        })
         .then((response) => response.json())
         .then((responseJson) => {
             resolve(responseJson);
         })
        .catch((error) => {
             reject(error);
         })
    })
}