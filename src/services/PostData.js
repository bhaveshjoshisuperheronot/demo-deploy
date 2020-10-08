export function PostData(type, userData) {
    let FinalUrl = 'https://bokoo.matrixpanel.in/api/' + type;
    // alert(JSON.stringify(userData))
    return new Promise((resolve, reject) => {
        fetch(FinalUrl, {
            method: 'POST',
            header: {
                "Access-Control-Origin": "*",
                "Accept": "application/json",
                "Content-Type": "application/json"
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