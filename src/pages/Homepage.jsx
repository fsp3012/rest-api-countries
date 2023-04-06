import React from 'react'
import Search from '../components/Search'
import Countries from '../components/Countries'
import { useFetch } from '../hooks/useFetch'

const Homepage = () => {
    const { data, loading } = useFetch("https://restcountries.com/v3.1/all");
    !loading &&
      data.map((datum)=>{
        // console.log(datum.population);
      })
    
  return (
    <div className='bg-dark-blue text-color-white'>
     {loading && <p>Loading</p>}
     {!loading && (
        <div>
           <Search/>
           <Countries countries={data} />
        </div>
     )}
    </div>
  )
}

export default Homepage