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

    await fetch(myRequest, myInit);
}

export default upload