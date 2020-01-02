const upload = async data => {
    const formData = new FormData();

    for (const name in data) {
        formData.append(name, data[name]);
    }

    const myInit = {
        method: 'POST',
        body: formData
    }

    let myRequest = new Request('http://localhost:8000/api/add_dataset');

    const res = await fetch(myRequest, myInit);
    const json = await res.json()

    return json
}

export default upload