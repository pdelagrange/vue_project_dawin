<template>
  <div
    class="d-flex"
  >
    <v-text-field
      v-model="search"
      placeholder="Rechercher"
      @input="onSearch()"
    />
    <v-btn
      icon="mdi-plus"
      variant="outlined"
      @click="router.push({path: '/movies/create'})"
    />
  </div>
  <div class="d-flex align-start flex-wrap">
    <v-card
      v-for="movie in movies"
      :key="movie.title"
      variant="tonal"
      class="card"
    >
      <v-card-item>
        <v-card-title>
          {{ movie.title }}
        </v-card-title>
        <v-card-subtitle>{{ movie.releaseDate }}</v-card-subtitle>
        <v-card-text>
          <v-img
            :src="movie.image"
            :aspect-ratio="16/9"
          />
        </v-card-text>
        <v-card-actions class="justify-space-around">
          <v-btn
            class="bg-blue"
            @click="onConsult(movie.id)"
          >
            <v-icon icon="mdi-eye" />
            CONSULT
          </v-btn>
          <v-btn
            class="bg-red"
            @click="onDelete(movie.id)"
          >
            <v-icon icon="mdi-delete" />DELETE
          </v-btn>
        </v-card-actions>
      </v-card-item>
    </v-card>
  </div>
</template>

<script setup lang="ts">
    import {IMovie} from "@/model";
    import router from "@/router";
    import axios from "axios";
    import {Ref, ref} from "vue";

    const movies: Ref<IMovie[]> = ref([]);
    let staticMovies: IMovie[] = [];
    const search: Ref<String> = ref('');

    const getMovies = () => {
      axios.get(`http://localhost:3001/movies`)
        .then((res) => {
          staticMovies = res.data;
          movies.value = staticMovies;
        });
    }
    getMovies();


    const onSearch = (): void =>  {
      movies.value = staticMovies.filter((movie) => movie.title.startsWith(search.value) ||movie.releaseDate === search.value || movie.Director.firstName.concat(' ',movie.Director.lastName).includes(search.value))
    }


    const onDelete = (id: string):void => {
      axios.delete(`http://localhost:3001/movies/${id}`)
        .then(() => {
          getMovies();
        });
    }

    const onConsult = (id: string):void => {
      router.push({path: `/movies/${id}`});
    }






</script>

<style>
    .card {
      width: 23%;
      margin: 1%;
    }
</style>
