<template>

    <div class="pokemon-container">
        <img v-if="mostrarPokemon" :src="imagenFuente" alt="Imagen no encontrada"/>
    </div>

</template>

<script>
export default {
    props:{
        pokemonId:{
            type: Number,
            required:true
        },
        mostrarPokemon:{
            type: Boolean,
            required:true,
            default:false
        }
    },
    computed:{
        imagenFuente(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        
        }
    }
}
</script>

<style>

img{
    height: 100px;
    position: absolute;
    right: 40%;
}
.pokemon-container{
    height: 120px;
}
</style>