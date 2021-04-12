 let PORT= process.env.PORT||8080;
 const API=`http://localhost:${PORT}/movies/`

// @returns {data:movies array , success:bool}

export default async function getAllMovies(){
    try{
        return await fetch (API + 'all')
        .then ((res)=>{return res.json()})
        .then (results => {return results.data})
    }catch (error){
        console.log(error);
    }
    
}

// export async function saveMovieToDb(moviesToSave){
//     const option={
//         method:"POST",
//         body:JSON.stringify({movie:moviesToSave}),
//         headers:{'content-Type':'application/json'}
//     }
//     try{
//         return await fetch (`${API}saveMovie`,option)
//         .then ((res)=>{return res.json()})
//     }catch(error){
//         console.log(error);
//     }
// }