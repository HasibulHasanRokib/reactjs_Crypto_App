import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Details = () => {
  const params=useParams()
const[data,setData]=useState({})
const handleId=async()=>{
    try {
        let url=`https://api.coingecko.com/api/v3/coins/${params.coinId}`
        let res=await fetch(url)
        let data=await res.json();
        setData(data)   
    } catch (error) {
      console.log(error)  
    }
  
}
useEffect(()=>{
    handleId();
},[])


  return (
    <section>
     <div className="detail__body">
      <div className="content">
        <h1 className="title">{data.id}</h1>
      </div>
      <div className="content">
        <p className="rank">Rank # {data.market_cap_rank}</p>
        <div className="title-two">
        <div>
        {data.image ? <img src={data.image.small} className="m-2" alt="" srcSet="" /> :null }
        
        <samp className="name">{data.name}</samp>
          <samp className="m-4">{data.symbol}/USD</samp>
        </div>
        {data.market_data ?.current_price ? <p>${data.market_data.current_price.usd}</p> :null }
        
        </div>
      </div>
      <div className="content">
      <div className="status">
      <div className="left">
        <div className="row">
         <h4>24 Hour Low</h4>
         <p>{data.market_data?.low_24h.usd.toLocaleString()}</p>
        </div>
        <div className="row">
         <h4>24 Hour High</h4>
         <p>{data.market_data?.high_24h.usd.toLocaleString()}</p>

        </div>
        </div>
        <div className="right">
        <div className="row">
         <h4>Market Cap</h4>
         <p>{data.market_data?.market_cap.usd.toLocaleString()}</p>

        </div>
        <div className="row">
         <h4>Circulating Supply</h4>
         <p>{data.market_data ?.circulating_supply.toLocaleString()}</p>

        </div>
        </div>
      </div>

      
      </div>
      <div className="content">
        <table className="table table-dark  ">
          <thead>
            <tr>
              <th>1h</th>
              <th>24h</th>
              <th>7d</th>
              <th>14d</th>
              <th>30d</th>
              <th>1yr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>{data.market_data ?.price_change_percentage_1h_in_currency ? <p>{data.market_data.price_change_percentage_1h_in_currency.usd}%</p>:null}</td>
            <td>{data.market_data ?.price_change_percentage_24h_in_currency ? <p>{data.market_data.price_change_percentage_24h_in_currency.usd}%</p>:null}</td>
            <td>{data.market_data ?.price_change_percentage_7d_in_currency ? <p>{data.market_data.price_change_percentage_7d_in_currency.usd}%</p>:null}</td>
            <td>{data.market_data ?.price_change_percentage_14d_in_currency ? <p>{data.market_data.price_change_percentage_14d_in_currency.usd}%</p>:null}</td>
            <td>{data.market_data ?.price_change_percentage_30d_in_currency ? <p>{data.market_data.price_change_percentage_30d_in_currency.usd}%</p>:null}</td>
            <td>{data.market_data ?.price_change_percentage_1y_in_currency ? <p>{data.market_data.price_change_percentage_1y_in_currency.usd}%</p>:null}</td>

              
            </tr>
          </tbody>
        </table>
      </div>
      <div className="content">
        <h4>About</h4>
        <p>{data.description ? data.description.en :null}</p>
        
      </div>

     </div>

    </section>
  )
}

export default Details
