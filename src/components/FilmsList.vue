<template>
  <ul class="films-list">
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FilmPreview } from '@/models/FilmModel';
import store from '@/store';

export default defineComponent({
  name: 'FilmsList',
  // methods: {
  //   async fetchFilms() {
  //     const response = await fetch(
  //       'https://api.themoviedb.org/3/discover/movie?api_key=5a04ce8778f4b2fcf7a03d527e0ac099&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&vote_average.gte=0.1'
  //     );
  //     const responseJson = await response.json();
  //     this.films = [] as FilmPreview[];
  //     responseJson.results.forEach((rawFilm: any) => {
  //       const newFilm = new FilmPreview();
  //       Object.assign(newFilm, rawFilm);
  //       this.films.push(newFilm);
  //     });
  //   }
  // },
  mounted() {
    store.dispatch('fetchFilms');
  },
  computed: {
    films() {
      return store.state.films;
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
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
}
</style>
