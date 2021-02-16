<template>
  <div class="film-card">
    <div class="row">
      <div class="col-md-3 film-view__poster">
        <img
          v-if="film.poster_path"
          :src="'https://image.tmdb.org/t/p/w500' + film.poster_path"
          class="img-fluid"
          alt="Film poster"
        />
        <span v-else>Preview unavailable</span>
      </div>
      <div class="col-9 film-view__details">
        <header class="film-view__title-and-overview">
          <h2 class="film-view__title mb-4">{{ film.title }}</h2>
          <p class="film-view__overview">{{ film.overview }}</p>
        </header>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';
import store from '@/store';

export default defineComponent({
  name: 'FilmCard',
  mounted() {
    const { currentRoute } = router;
    const routeId: number = +currentRoute.value.params.id;
    store.dispatch('fetchCurrentFilm', routeId);
  },
  computed: {
    film() {
      return store.state.currentFilm;
    }
  }
});
</script>
