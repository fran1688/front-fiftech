const baseUrl = 'https://rickandmortyapi.com'

export async function getCartoons () {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const response = await fetch(`${baseUrl}/api/character/`, requestOptions);
    const responseJson = await response.json();
    return responseJson
}

export async function getCartoonsBySearch (q) {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    const response = await fetch(`${baseUrl}/api/character/?name=${q}`, requestOptions);
    const responseJson = await response.json();
    return responseJson
}

export default {
    getCartoons,
    getCartoonsBySearch
}
