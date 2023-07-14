import { useEffect } from "react"
import { useState } from "react"
import { Triangle } from 'react-loader-spinner'
import { Link } from "react-router-dom"


const Home = () => {
const [coin,setCoin]=useState([])
const [loading,setLoading]=useState(false)
const url=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&page=1&sparkline=false&locale=en`



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

const [currentPage,setCurrentPage]=useState(1)
const recordsPerPage=10;
const lastIndex=currentPage * recordsPerPage;
const firstIndex=lastIndex-recordsPerPage;
const records=coin.slice(firstIndex,lastIndex);
const nPage=Math.ceil(coin.length / recordsPerPage)
const numbers=[...Array(nPage + 1).keys()].slice(1)

const prePage=()=>{
  if(currentPage !== 1){
    setCurrentPage(currentPage-1)
  }
  }
  const changeCPage=(id)=>{
  setCurrentPage(id)
  }
  const nextPage=()=>{
  if(currentPage !== nPage){
    setCurrentPage(currentPage + 1)
  }
  }

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
     <div className="header-body">
     <h1>TRACK AND TRADE
      CRYPTO CURRENCIES</h1>
     </div>
   
     <div className="item__head">
      <div>#</div>
      <div>Coin</div>
      <div>Price</div>
      <div>24h</div>
      <div className="display-none">Volume</div>
      <div className="display-none">Mkt Cap</div>
     </div>
     {loading && loadingMessage}

     {
      records.map((item)=>{
      const{id,market_cap_rank,image,current_price,price_change_percentage_24h,total_volume,market_cap,symbol}=item;
      return<Link key={id} className="link__name" to={id}>
      <div  className="coin__row">
     <div>{market_cap_rank}</div>
      <div><img src={image} className="coin__img" alt=""/>{symbol.toUpperCase()}</div>
      <div >${current_price.toLocaleString()}</div>
      <div style={{color:price_change_percentage_24h >=1 ?"green":"red",fontWeight:"bold"}}>{price_change_percentage_24h.toFixed(2)}%</div>
      <div className="display-none">${total_volume.toLocaleString()}</div>
      <div className="display-none">${market_cap.toLocaleString()}</div>
     </div>
     </Link>
      })
     }
     <nav id='page-no'>
    <ul className="page-number">
    <li className="page-item">
    <a className="page-link" href="#" onClick={prePage} >Previous</a>
    </li>
    {
      numbers.map((n,i)=>(
        <li className={`page-item ${currentPage === n?'active':''}`} key={i} ><a
        href='#' className='page-link' onClick={()=>changeCPage(n)}>{n}</a></li>
      ))
    }
    <li className="page-item"><a className="page-link" href="#" onClick={nextPage}>Next</a></li>
    </ul>
    </nav>
  
     </div>
    </>
  )
}

export default Home
