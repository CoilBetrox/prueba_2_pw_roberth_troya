<template>
    <div class="option-container">
        <ul>
            <li v-for="pokemon in pokemons" :key="pokemon.id"> {{pokemon.nombre}} </li>
            
        </ul>
    </div>

<p></p>

</template>

<script>
export default {
    props:{
        pokemons:{
            type:Array,
            required:true
        }
    }
}
</script>

<style>
ul{
    list-style-type: none;
}


</style>