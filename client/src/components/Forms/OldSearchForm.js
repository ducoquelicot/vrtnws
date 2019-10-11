import React, { useState, useEffect } from 'react';
import Button from "../Button";

function SearchForm() {
    const [search, setSearch] = useState("");
    const [sending, setSending] = useState(false);
    const [result, setResult] = useState({});
    const [error, setError] = useState(false);
  
    useEffect(() => {
      if(sending) {
  
        const myInit = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        }
  
        const query = encodeURIComponent(search)
        let myRequest = new Request(`http://localhost:5000/api/search_dataset?query=${query}`);
  
        async function fetchData() {
          const res = await fetch(myRequest, myInit);
          res
            .json()
            .then(res => setResult(res))
            .catch(err => setError(err));
        }
  
        fetchData();
        setSending(false);
        console.log(result);
      }
    }, [sending, search, result])
  
    function handleSubmit(event) {
      event.preventDefault();
      setSending(true);
      console.log(search);
    }
  
    function changeSearch(event) {
      setSearch(event.target.value)
    }
  
    return (
      <form className="SearchForm" onSubmit={handleSubmit}>
        <input
        type="text"
        name="search"
        className="input"
        onChange={changeSearch}
        />
        <Button
        type="submit"
        handleClick={handleSubmit}
        label="Zoek"
        />
      </form>
    )
  }

  export default SearchForm