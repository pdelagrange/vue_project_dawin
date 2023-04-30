<template>
  <div class="d-flex flex-row flex-wrap">
    <v-text-field
      v-model="movie.title"
      class="w-33 mx-lg-2"
      label="Title"
      disabled
    />
    <v-text-field
      v-model="movie.releaseDate"
      class="w-33 mx-lg-2"
      label="Release date"
      disabled
    />
    <v-text-field
      v-model="movie.language"
      class="w-33 mx-lg-2"
      label="Language"
      disabled
    />
    <v-text-field
      v-model="movie.gender"
      class="w-33 mx-lg-2"
      label="Gender"
      disabled
    />
    <v-text-field
      v-model="movie.image"
      class="w-33 mx-lg-2"
      label="Image (URL)"
      disabled
    />
    <v-text-field
      v-model="movie.Director.firstName"
      class="w-33 mx-lg-2"
      label="Director's first name"
      disabled
    />
    <v-text-field
      v-model="movie.Director.lastName"
      class="w-33 mx-lg-2"
      label="Director's last name"
      disabled
    />
    <v-text-field
      v-model="movie.Director.birthdate"
      class="w-33 mx-lg-2"
      type="date"
      label="Director's birthdate"
      disabled
    />
    <v-text-field
      v-model="movie.Director.nationality"
      class="w-33 mx-lg-2"
      label="Director's nationality"
      disabled
    />
    <div class="d-flex justify-space-around block w-100">
      <v-btn
        class="w-33 mx-lg-2 mt-2"
        @click="onEdit"
      >
        <v-icon icon="mdi-send" />
        Edit
      </v-btn>
      <v-btn
        class="w-33 mx-lg-2 mt-2 bg-red"
        @click="onDelete"
      >
        <v-icon icon="mdi-delete" />
        Delete
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import {IMovie} from "@/model";
import router from "@/router";
import axios from "axios";
import {Ref, ref} from "vue";


function onEdit() {
  const id = router.currentRoute.value.params.id;
  router.push({path:`/movies/${id}/edit`});
}

  const onDelete = (id: string):void => {
    axios.delete(`http://localhost:3001/movies/${id}`)
      .then(() => {
        router.push({path: `/movies`});
      });
  }

const movie: Ref<IMovie> = ref({Director:{}} as IMovie);

const getMovie = () => {
  axios.get(`http://localhost:3001/movies/${router.currentRoute.value.params.id}`)
    .then((res) => {
      movie.value = res.data;
      movie.value.Director.birthdate = new Date(movie.value.Director.birthdate).toISOString().split('T')[0];
    });
}
getMovie();

</script>
