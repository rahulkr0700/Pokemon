export const PokemonCards=({pokemonData})=>{
      return <li className="pokemon-card">
    <figure className="fig-card" style={{
    width: "100%",
    height: "20rem", // scales with root font size
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  }}>
     <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} style={{
      maxWidth: "90%",
      maxHeight: "90%",
      objectFit: "contain",
    }} />
   </figure>
                 <h1 className="pokemon-name">{pokemonData.name}</h1>
                 <div className="pokemon-info pokemon-highlight">
                  <p>
                    {
                      pokemonData.types.map((curType)=>curType.type.name).join(", ")
                    }
                  </p>
                 </div>
                 
      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span  > Height:</span> {pokemonData.height}
        </p>
        <p className="pokemon-info">
          <span> Weight:</span> {pokemonData.weight}
        </p>
        <p className="pokemon-info">
          <span> speed:</span> {pokemonData.stats[5].base_stat}
        </p>
      </div>

      <div className="grid-three-cols">
        <div className="pokemon-info">
          <p>{pokemonData.base_experience}</p>
          <span> Experience:</span>
        </div>
        <div className="pokemon-info">
          <p>{pokemonData.stats[1].base_stat}</p>
          <span>Attack:</span>
        </div>
        <div className="pokemon-info">
          <p>
            {pokemonData.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
          <span> Abilities: </span>
        </div>
      </div>
   </li>;
};