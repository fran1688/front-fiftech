const baseUrl = 'http://localhost:3800'

export async function getUserBySearch (data) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(data);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    const response = await fetch(`${baseUrl}/api/systemuser`, requestOptions);
    const responseJson = await response.json();
    return responseJson
}

export default {
    getUserBySearch
}
