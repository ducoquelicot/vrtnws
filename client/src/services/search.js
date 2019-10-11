const search = async q => {
    const myInit = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }

    const query = encodeURIComponent(q)
    let myRequest = new Request(`http://localhost:5000/api/search_dataset?query=${query}`);

    const res = await fetch(myRequest, myInit);

    const json = await res.json()

    return json
}

export default search