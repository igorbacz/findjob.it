export {};
// import React, {useState} from 'react'
// import {OpenStreetMapProvider} from 'leaflet-geosearch'

// const SearchBox = (text:string) => {
//       const provider = new OpenStreetMapProvider();
//       const [results, setResults] = useState([])

//       const handleSubmit = async (e) => {
//       e.preventDefault()
//       const results = await provider.search({ query: text });
//       setResults(results)
//   }
//   return (
//     <>
//      <form onSubmit={handleSubmit}>
//       <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
//      </form>
//      <div>
//       {searchResults.map((item) =>{<p>{item.label}</p>}
//      </div>
//     </>
//    )
// }

// export default SearchBox;
