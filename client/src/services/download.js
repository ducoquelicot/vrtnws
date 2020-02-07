const download = async id => {
    const myInit = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-shared-secret': process.env.REACT_APP_SECRET
        }
    }

    let myRequest = new Request(`${process.env.REACT_APP_API}/api/download/dataset/${id}`);
    const res = await fetch(myRequest, myInit);
    return res

}

export default download