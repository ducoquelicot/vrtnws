const search = async q => {
    const myInit = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-shared-secret': process.env.REACT_APP_SECRET
        }
      }

    const query = encodeURIComponent(q)
    let myRequest = new Request(`${process.env.REACT_APP_API}/api/search_dataset?query=${query}`);

    const res = await fetch(myRequest, myInit);

    const json = await res.json()

    return json
}

export default search