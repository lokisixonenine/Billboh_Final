import React,{useState} from 'react';
import {getNews} from '../utils/API';
import Card from '../components/NewsCard';
import { useAuth } from "../utils/auth";

export default ()=> {
const { user, logout } = useAuth();
const [city,setCity] = useState('');
const [date,setDate] = useState('');
const [news,setNews] = useState([]);

const handleSearch = () =>{
    getNews({city,date}).then(({data})=>setNews(data.articles))
}

return <><nav>
    <div className="nav-wrapper">
            {/* <a href="#" className="brand-logo center"></a> */}
      <ul className="left hide-on-med-and-down">
        <li><a href="/members">Home</a></li>
        <li><a href="/content">Contents</a></li>
        <li className="active" onClick={logout}><a href="#">Logout</a></li>
      </ul>
      </div>
</nav>
<input placeholder="Where are you (city name?)" onChange={(e)=>setCity(e.target.value)}/>
< input placeholder="What date do you want? (year-month-day)" onChange = {
    (e) => setDate(e.target.value)}/>
<button onClick={handleSearch} className="btn btn-warning btn-lg">Submit</button>

<div className='row'>
    {news.map(a=><Card props={a}/>)}
</div>
 

  <footer id="footer">© 2020 BillBoh</footer></>

}