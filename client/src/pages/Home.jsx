import React ,{useState,useEffect}from 'react'
import CustomTableComponents from "../components/table.components"
import getAllMovies from "../service/Movies-services";

export default function Home(props) {
const [movies, setMovies] = useState([])
  useEffect(getMovies,[])
function getMovies(){
getAllMovies().then((res)=>{setMovies(res)})
};

//  const movieColumns=["id","movie name","rating","created at","last update"]
const movieColumns=[

{
    name: "_id", 
    label:"id" , 
    options:{
    filter:true,
    sort:true, 
    }
},
{
    name: "movieName", 
    label:"Movies Name" , 
    options:{
    filter:true,
    sort:true, 
    }

},
{

    name: "rating", 
    label:"Rating" , 
    options:{
    filter:true,
    sort:true, 
    }
},
{

    name: "year", 
    label:"Year" , 
    options:{
    filter:true,
    sort:true, 
    }
},
{

    name: "last update", 
    label:"last update" , 
    options:{
    filter:true,
    sort:true, 
    }
},

];

    return (
        <div>
            home
            <CustomTableComponents data={movies} title={"movies"} columns= {movieColumns}/>
        </div>
    )
}
