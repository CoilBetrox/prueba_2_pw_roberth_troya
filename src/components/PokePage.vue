<template>
    <h1>Juego Casino</h1>
    <p>Puntaje</p>
    <label>{{contadorPunto}}</label>
    <p></p>
    <p>Intento</p>
    <label>{{contadorIntento}}</label>
    <PokePicture :pokemonId="100" :mostrarPokemon="true"/>
    <PokePicture :pokemonId="100" :mostrarPokemon="true"/>
    <PokePicture :pokemonId="100" :mostrarPokemon="true"/>
    
    <PokeOptions :pokemons="pokemosArr"/>
    <p></p>

    <button v-on:click="aumentaIntento">Jugar</button>
    <p></p>
    <button>Juego Nuevo</button>
    <p></p>
    <h1>{{mensaje}}</h1>

</template>

<script>
import PokePicture from '@/components/PokePicture.vue'
import PokeOptions from '@/components/PokeOptions.vue'

import getPokemonOptions from '@/helpers/obtenerOpcionesPokemon'
import getNumRandom from '@/helpers/obtenerRandom'


export default {
    components:{
        PokePicture,
        PokeOptions
    },
    data(){
        return{
            pokemosArr:[],
            pokeArrReducido:[],
            pokeImgage:[],
            contadorPunto:0,
            contadorIntento:0,
            mensaje:null
        }
    },
    methods:{
        async obtenerPokemonsArreglo(){
            this.pokemosArr = await getPokemonOptions()
            this.pokeArrReducido = [
                this.pokemosArr[getNumRandom],
                this.pokemosArr[getNumRandom],
                this.pokemosArr[getNumRandom]            
            ]

            console.log(this.pokemosArr)

        },
        
        aumenta5Puntos(){
            return this.contadorPunto +5
        },
        aumenta2Puntos(){
            return this.contadorPunto +2
        },
        aumentaIntento(){
            if (this.contadorIntento == 4){
                return this.mensaje = "Juego Terminado"
            }
            return this.contadorIntento ++
        }

    },
    mounted(){
        this.obtenerPokemonsArreglo()
    }
}
</script>

<style>
</style>