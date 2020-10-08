export function PostData(type, userData) {
    let BaseUrl = 'https://bokoo.matrixpanel.in/api/';
    // alert(JSON.stringify(userData))
    return new Promise((resolve, reject) => {
        fetch(BaseUrl+type, {
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
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