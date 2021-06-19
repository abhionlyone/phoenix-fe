import React, { useEffect, useState } from "react";
import axios from "axios";
import './styles/app.css'

function App() {
  const [companies, setCompanies] = useState([])
  const [pageInfo, setPageInfo] = useState({})
  const [page, setPage] = useState(1)

  useEffect(() => {
    axios.get(`http://127.0.0.1:3000/companies?page=${page}`).then((res) => {
      console.log(res.data)
      setCompanies(res.data.companies)
      setPageInfo(res.data.pagination)
    })
  }, [page])

  function nextPage(){
    if (pageInfo.pages > page){
      setPage(page + 1)
    }else{
      alert("You've reached the end");
    }  
  }

  function prevPage(){
    if ( 1 < page){
      setPage(page - 1)
    }else{
      alert("You're on the first page");
    }  
  }

  function firstPage(){
    setPage(1)
  }

  function lastPage(){
    setPage(pageInfo.pages)
  }

  return (
    <div className="App">
      <h1>You're viewing page: {page}</h1>
      <button onClick={() => prevPage()}>Prev Page</button>
      <button onClick={() => nextPage()}>Next Page</button>
      <button onClick={() => firstPage()}>First Page</button>
      <button onClick={() => lastPage()}>Last Page</button>
      <h2>Companies: </h2>
      {companies.map((company) => {
        return <p key={company.id}>{company.company_name}</p>
      })}
    </div>
  );
}

export default App;
