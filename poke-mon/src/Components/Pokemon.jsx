import { useEffect, useState } from "react";
import "./Pokemon.css";
import { PokemonCards } from "./PokemonCards";

export const Pokemon=()=>{
    const[pokemon,setPokemon]=useState([]);
    // const[loading,setLoading]=useState(true);
    // const[error,setError]=useState(null);
    const API="https://pokeapi.co/api/v2/pokemon?limit=24";
      

    // const fetchPokemon=()=>{
    //     fetch(API)
    //     .then((res)=>res.json())
    //     .then((data)=>{setPokemon(data);
    //         setLoading(false);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //         setError(err);
    //         setLoading(false);
    //     });
    //     };

    const fetchPokemon=async()=>{
        try{
          const res= await fetch(API);
          const data= await res.json();

          const detailedPokemonData=data.results.map(async(curPokemon)=>{
          const res= await fetch(curPokemon.url);
          const data= await res.json();
          return data;
          });
          console.log(detailedPokemonData);
          const detailedResponses =  await Promise.all(detailedPokemonData);
          console.log(detailedResponses);
          setPokemon(detailedResponses);
        //   setPokemon(data);
        //   setLoading(false);

        }
        catch(error){
            console.log(error);
            // setError(error);
            // setLoading(false);
        }
    }

    useEffect(()=>{
        fetchPokemon();
    },[])

    // console.log(pokemon);
    
    // if(loading){
    //     return(
    //         <h1>Loading</h1>
    //     )
    // }
    // if(error){
    //     return(
    //         <div>
    //             <h1>Error:{err.message}</h1>
    //         </div>
    //     )
    // }
    return(
       <>
       <section className="container">
        <header>
            <h1>Lets Catch Pokemon</h1>
        </header>
        <div>
            <ul className="cards">
               {
                pokemon.map((curPokemon) => {
                  return <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />;
                })
               }
            </ul>
        </div>
       </section>
       </>
    );
}