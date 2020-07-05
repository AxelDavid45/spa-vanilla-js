const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
    const APIURL = id ? `${API}${id}` : API;
    try {
        const data = await fetch(APIURL);
        return  await data.json();
    } catch(error) {
        console.log('Error', error.message);
    }
}

export default getData;
