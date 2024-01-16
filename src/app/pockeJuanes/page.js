'use client'

import { IoIosSearch } from "react-icons/io";
import Pokemon from "../componenteJuanes/pokemon";

const pockeJuanes = () => {


    return (
        <div>
            <header className="w-full h-28 bg-red-500 justify-between items-center flex px-4">
                <div className="">
                    <div className="h-28  justify-between items-center flex">
                        <img className="w-26 h-20 "  src="https://cdn.discordapp.com/attachments/1186100169075343485/1196630862633115809/Recurso_12x.png?ex=65b85455&is=65a5df55&hm=fbec50f066844702065519b796ffd03fd98dfe1a9ee1a7b001b639cf9eeb38fc&" ></img>  
                        <img className="w-56 h-20 pl-6" src="https://cdn.discordapp.com/attachments/1186100169075343485/1196630861924274227/Recurso_22x.png?ex=65b85455&is=65a5df55&hm=108d14b3daa6d3576c381b8681a1ce5853d8b5d338a17c10d76cebfd2385f9c1&" ></img>
                    </div>
                </div>
                <div className=" h-12 relative items-center flex px-0">
                    <input  className="border-2 border-black text-lg text-black  w-80 px-3 h-10 rounded-3xl" />
                    <div className="absolute right-0 top-0 h-12 w-10  flex justify-center items-center">
                        <IoIosSearch className="text-black text-3xl " />
                    </div>
                </div>
            </header>
            <div className="w-full  flex flex-wrap justify-center">
                <Pokemon nombre="Bulbasaur" codigo="001" tipo="Grass" />
                <Pokemon nombre="Ivysaur" codigo="002" tipo="Grass" />
                <Pokemon nombre="Venusaur" codigo="003" tipo="Grass" />
                <Pokemon nombre="Charmander" codigo="004" tipo="fire" />
                <Pokemon nombre="Charmeleon" codigo="005" tipo="fire" />
                <Pokemon nombre="Charizard" codigo="006" tipo="fire" />
                <Pokemon nombre="Squirtle" codigo="007" tipo="water" />
                <Pokemon nombre="Wartortle" codigo="008" tipo="water" />
                <Pokemon nombre="Blastoise" codigo="009" tipo="insect" />
                <Pokemon nombre="Caterpie" codigo="010" tipo="insect" />
                <Pokemon nombre="Metapod" codigo="011" tipo="insect" />
                <Pokemon nombre="Butterfree" codigo="012" tipo="insect" />
            </div> 
        </div>
    );

}

export default pockeJuanes;