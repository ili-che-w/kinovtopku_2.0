<template>
  <ul class="films-list" v-if="!errorMsg">
    <li
      class="films-list__item my-4"
      v-for="(film, index) of films"
      :key="index"
    >
      <div class="row">
        <div class="col-sm-3">
          <div class="preview">
            <img
              v-if="film.poster_path"
              :src="film.posterFullPath"
              alt="Film Preview"
              class="img-fluid"
            />
            <span v-else>Preview unavailable</span>
          </div>
        </div>
        <div class="col-9">
          <h3 class="title">
            <router-link :to="'/film/' + film.id">
              {{ film.title }}
            </router-link>
          </h3>
          <div class="info">
            <span class="release-year">
              Release year: {{ film.releaseYear }} | Rating:
              {{ film.vote_average }}
            </span>
          </div>
          <div class="overview">
            <p v-if="film.overview">
              {{ film.overview }}
            </p>
            <span v-else>Description unavailable</span>
          </div>
        </div>
      </div>
    </li>
  </ul>
  <div class="alert alert-danger" v-else>{{ errorMsg }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store';

export default defineComponent({
  name: 'FilmsList',
  mounted() {
    store.dispatch('fetchFilms');
  },
  computed: {
    films() {
      return store.state.films;
    },
    errorMsg() {
      return store.state.errorMsg;
    }
  }
});
</script>

<style lang="scss" scoped>
.films-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.info {
  color: darkgray;
}
.title + .info {
  margin-top: -0.4rem;
  margin-bottom: 0.5rem;
}
.overview > p {
  text-align: justify;
}
</style>
