const upload = async data => {
    const formData = new FormData();

    for (const name in data) {
        formData.append(name, data[name]);
    }

    const myInit = {
        method: 'POST',
        headers: {
            'X-shared-secret': process.env.REACT_APP_SECRET
        },
        body: formData
    }

    let myRequest = new Request(`${process.env.REACT_APP_API}/api/add_dataset`);

    const res = await fetch(myRequest, myInit);
    const json = await res.json()

    return json
}

export default upload