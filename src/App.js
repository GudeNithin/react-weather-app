import React,{useState} from 'react'
import axios from 'axios';
import Gallery from './Gallery'
import './App.css'

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
const App = () => {
  const [search,setSearch]=useState('');
  const [data,setData]=useState([]);

  const handler=e=>{
     setSearch(e.target.value);
  }

  const submitHandler=e=>{
    e.preventDefault();
    axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
    ).then(
        response=>setData(response.data.photos.photo)
    )

  }

  return (
    <div>
      <center>
       <h3><b>React Photo Gallery</b></h3>
       <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter Search Element" value={search} onChange={handler} /><br/>
        <input className="button" type="submit" name="Search"/>
       </form>
       {data.length>0?<Gallery data={data}/>:<h5>No Data Loaded</h5>}
      </center>
    </div>
  )
}



export default App;
