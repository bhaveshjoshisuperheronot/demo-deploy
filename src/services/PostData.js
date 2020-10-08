export function PostData(type, userData) {
    let BaseUrl = 'https://bokoo.matrixpanel.in/api/';
    // alert(JSON.stringify(userData))
    return new Promise((resolve, reject) => {
        fetch(BaseUrl+type, {
            method: 'POST',    
            body: JSON.stringify(userData),        
            header: {
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Headers' : "*",
                'Referrer-Policy' : "origin",
                'Accept' :  'application/json',
                'Content-type' :  'application/json'
            }
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