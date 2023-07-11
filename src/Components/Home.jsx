import { useEffect } from "react"
import { useState } from "react"
import { Triangle } from 'react-loader-spinner'
import { Link } from "react-router-dom"


const Home = () => {
const [coin,setCoin]=useState([])
const [loading,setLoading]=useState(false)
const url=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en`



const getData=async()=>{
try {
    let res=await fetch(url)
    let data=await res.json();
    setCoin(data)
    console.log(data.length)   
} catch (error) {
  console.log(error)  
}
}

useEffect(()=>{
  setLoading(true)
 setTimeout(() => {
    getData();
    setLoading(false)
 }, 3000);
  
},[])

const loadingMessage=<Triangle
height="80"
width="80"
color="#fff"
ariaLabel="triangle-loading"
wrapperStyle={{margin:"10rem 34rem"}}
wrapperClassName=""
visible={true}
/>


  return (
    <>
     <div className="app__body">

     <div className="item__head">
      <div>#</div>
      <div>Coin</div>
      <div>Price</div>
      <div>24h</div>
      <div>Volume</div>
      <div>Mkt Cap</div>
     </div>
     {loading && loadingMessage}

     {
      coin.map((item)=>{
      const{id,market_cap_rank,image,current_price,price_change_percentage_24h,total_volume,market_cap,symbol}=item;
      return<Link key={id} className="link__name" to={id}>
      <div  className="coin__row">
     <div>{market_cap_rank}</div>
      <div><img src={image} className="coin__img" alt=""/>{symbol.toUpperCase()}</div>
      <div>${current_price.toLocaleString()}</div>
      <div>{price_change_percentage_24h.toFixed(2)}%</div>
      <div>${total_volume.toLocaleString()}</div>
      <div>${market_cap.toLocaleString()}</div>
     </div>
     </Link>
      })
     }
  
     </div>
    </>
  )
}

export default Home
