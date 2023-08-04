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

const prePage=()=>{
  if(currentPage !== 1){
    setCurrentPage(currentPage-1)
  }
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
    <div id="home" className="header-section">     
      <h1 className="font-bold text-[5rem] flex "><img className="hero-img display-none" src="https://coindom-crypto-search.vercel.app/static/media/bitcoin.e146d46fb598ae0d8f43.png" alt="" />TRACK AND TRADE <img className="hero-img display-none" src="https://coindom-crypto-search.vercel.app/static/media/ethereum.c6cffe78f0c6abc85da9.png" alt="" /></h1>
      <p className="font-bold text-[6rem] ">CRYPTO CURRENCIES</p>
      <a href="#market-section" className="price-btn">See Price</a>
     <div className="flex gap-[1rem] justify-center my-[5rem] display-none">
      <div className="card">
        <img className="w-[5rem]" src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="" />
        <div className="card-body">
          <h3>Bitcoin<samp className="text-red-500 font-bold">-1.07%</samp></h3>
          <p>$29,117.00</p>
        </div>
      </div>
      <div className="card">
        <img className="w-[5rem]" src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880" alt="" />
        <div className="card-body">
          <h3>Ethereum<samp className="text-red-500 font-bold">-1.25%</samp></h3>
          <p>$1,835.02</p>
        </div>
      </div>
      <div className="card">
        <img className="w-[5rem]" src="https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663" alt="" />
        <div className="card-body">
          <h3>Tether<samp className="text-red-500 font-bold">-0.01%</samp></h3>
          <p>$1.00</p>
        </div>
      </div>
      <div className="card">
        <img className="w-[5rem]" src="https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850" alt="" />
        <div className="card-body">
          <h3>BNB<samp className="text-red-500 font-bold">-2.24%</samp></h3>
          <p>$240.01</p>
        </div>
      </div>
     </div>
    </div>
     
    <div id="market-section">
     <h2 className="font-bold text-[2rem] mx-4">Market Update</h2>
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
    
     </div>
     <nav id='page-no'>
    <ul className="page-number">
    <li className="page-item">
    <a className="page-link" href="#" onClick={prePage} >Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="#" onClick={nextPage}>Next</a></li>
    </ul>
    </nav>


    <div id="choose-section" className="my-10">
    <h2 className="font-bold text-4xl text-center my-16">WHY CHOOSE US</h2>
      <div className="choose-card-section">
      <div className="choose-card-section-1">
      <div className="choose-card rounded-md my-4">
          <i className="fa-solid fa-wallet fa-2x mx-5"></i>
          <div className="choose-box-text">
            <h5 className="font-bold  text-lg">CONNECT YOUR WALLET</h5>
            <p className="my-2">Use Trust Wallet, Metamask or to connect to the app.</p>
          </div>
        </div>
      <div className="choose-card rounded-md my-4">
          <i className="fa-solid fa-pen-ruler fa-2x mx-5"></i>
          <div className="choose-box-text">
            <h5 className="font-bold  text-lg">
            SELECT YOUR QUANTITY</h5>
            <p className="my-2">Upload your crypto and set a title, description and price.</p>
          </div>
        </div>
      <div className="choose-card rounded-md my-4">
          <i className="fa-solid  fa-bolt fa-2x mx-5"></i>
          <div className="choose-box-text">
            <h5 className="font-bold  text-lg">
             CONFIRM TRANSACTION</h5>
            <p className="my-2">Earn by selling your crypto on our marketplace.</p>
          </div>
        </div>
      </div>
      <div className="choose-card-section-2 ">
      <img src="https://coindom-crypto-search.vercel.app/static/media/choose-main.39852b7511b28d44406f.png" alt="" />
      </div>
      <div className="choose-card-section-3">
      <div className="choose-card rounded-md my-4">
          <i className="fa-solid  fa-satellite-dish  fa-2x mx-5"></i>
          <div className="choose-box-text">
            <h5 className="font-bold  text-lg">
             CONFIRM TRANSACTION</h5>
            <p className="my-2">Earn by selling your crypto on our marketplace.</p>
          </div>
        </div>
        <div className="choose-card rounded-md my-4">
          <i className="fa-solid fa-chess-knight fa-2x mx-5"></i>
          <div className="choose-box-text">
            <h5 className="font-bold  text-lg">
             CONFIRM TRANSACTION</h5>
            <p className="my-2">Earn by selling your crypto on our marketplace.</p>
          </div>
        </div>
        <div className="choose-card rounded-md my-4">
          <i className="fa-solid fa-boxes-stacked  fa-2x mx-5"></i>
          <div className="choose-box-text">
            <h5 className="font-bold  text-lg">
             CONFIRM TRANSACTION</h5>
            <p className="my-2">Earn by selling your crypto on our marketplace.</p>
          </div>
        </div>
      </div>

      </div>
    </div>
  
     <div id="join-section">
     <div className="join-header-section">     
      <h1 className="font-bold text-[5rem] flex justify-between items-center "><img className="hero-img display-none" src="https://coindom-crypto-search.vercel.app/static/media/bitcoin.e146d46fb598ae0d8f43.png" alt="" />JOIN US VIA <img className="hero-img display-none" src="https://coindom-crypto-search.vercel.app/static/media/ethereum.c6cffe78f0c6abc85da9.png" alt="" /></h1>
      <h4 className="font-bold text-[6rem] ">DISCORD</h4>
      <p className="font-bold text-lg my-10">Invest and manage all your crypto at one place.</p>
      <a href="#" className="join-btn">Join via Discord</a>
     </div>
     </div>

    <div className="footer-section ">
      <div>
      <i className="fa-brands fa-twitter fa-2x mx-5"></i>
      <i className="fa-brands fa-discord fa-2x mx-5"></i>
      <i className="fa-brands fa-facebook fa-2x mx-5"></i>
      <i className="fa-brands fa-youtube fa-2x mx-5"></i>
      </div>
      <div>
        <p className="font-bold text-xl">Developed by Hasibul Hasan Rokib </p>
      </div>
    </div>

 
     </div>
    </>
  )
}

export default Home
