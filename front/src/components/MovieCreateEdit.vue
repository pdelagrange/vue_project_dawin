<template>
  <v-form
    @submit.prevent="onSubmit()"
  >
    <div class="d-flex flex-row flex-wrap">
      <v-text-field
        v-model="movie.title"
        class="w-33 mx-lg-2"
        :rules="rules"
        label="Title"
      />
      <v-text-field
        v-model="movie.releaseDate"
        class="w-33 mx-lg-2"
        :rules="rules"
        label="Release date"
      />
      <v-text-field
        v-model="movie.language"
        class="w-33 mx-lg-2"
        :rules="rules"
        label="Language"
      />
      <v-text-field
        v-model="movie.gender"
        class="w-33 mx-lg-2"
        :rules="rules"
        label="Gender"
      />
      <v-text-field
        v-model="movie.image"
        class="w-33 mx-lg-2"
        label="Image (URL)"
      />
      <v-text-field
        v-model="movie.Director.firstName"
        class="w-33 mx-lg-2"
        :rules="rules"
        label="Director's first name"
      />
      <v-text-field
        v-model="movie.Director.lastName"
        class="w-33 mx-lg-2"
        :rules="rules"
        label="Director's last name"
      />
      <v-text-field
        v-model="movie.Director.birthdate"
        class="w-33 mx-lg-2"
        type="date"
        :rules="rules"
        label="Director's birthdate"
      />
      <v-text-field
        v-model="movie.Director.nationality"
        class="w-33 mx-lg-2"
        :rules="rules"
        label="Director's nationality"
      />
      <div class="d-flex justify-space-around block w-100">
        <v-btn
          type="submit"
          class="w-33 mx-lg-2 mt-2"
        >
          <v-icon icon="mdi-send" />
          Submit
        </v-btn>
        <v-btn
          type="submit"
          class="w-33 mx-lg-2 mt-2 bg-blue"
          @click="onCancel"
        >
          <v-icon icon="mdi-cancel" />
          Cancel
        </v-btn>
      </div>
    </div>
  </v-form>
</template>

<script setup lang="ts">
import {IMovie} from "@/model";
import axios from "axios";
import router from "@/router";
import {Ref, ref} from "vue";

export type typeScreen = 'EDIT' | 'CREATE';

const movie: Ref<IMovie> = ref({Director: {}} as IMovie);

const type: typeScreen = router.currentRoute.value.fullPath.includes('/create') ? 'CREATE' : 'EDIT';

const getMovie = () => {
  axios.get(`http://localhost:3001/movies/${router.currentRoute.value.params.id}`)
    .then((res) => {
      movie.value = res.data;
      movie.value.Director.birthdate = new Date(movie.value.Director.birthdate).toISOString().split('T')[0];
    });
}

if(type === 'EDIT'){
  getMovie();
}

const onSubmit = (): void => {
  if(type === 'EDIT') {
    axios.post(`http://localhost:3001/movies/${router.currentRoute.value.params.id}`, {movie: movie.value})
      .then(() => {
        router.push({path: `/movies/${router.currentRoute.value.params.id}`})
      });
  } else if (type === 'CREATE'){
    axios.post('http://localhost:3001/movies', {movie: movie.value})
      .then((res) => {
        router.push({path: `/movies/${res.data.id}`});
      })
  }
}

const onCancel = (): void => {
  router.push({path: `/movies/${router.currentRoute.value.params.id}`});
}

const rules = [
  value => {
  if(value) return true;
  return 'This field is required';
  }
]
</script>
