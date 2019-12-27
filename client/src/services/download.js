const download = async id => {
    const myInit = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    let myRequest = new Request(`http://localhost:8000/api/download/dataset/${id}`);
    const res = await fetch(myRequest, myInit);
    return res

}

export default download