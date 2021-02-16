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
import { Film } from '@/models/FilmModel';

export default defineComponent({
  name: 'FilmCard',
  methods: {
    async fetchFilm(routeId: number) {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${routeId}?api_key=5a04ce8778f4b2fcf7a03d527e0ac099&append_to_response=images,credits`
      );
      const responseJson = await response.json();
      Object.assign(this.film, responseJson);
    }
  },
  mounted() {
    const { currentRoute } = router;
    if (currentRoute.value.params.id) {
      const routeId: number = +currentRoute.value.params.id;
      this.fetchFilm(routeId);
    } else {
      this.errorMsg = 'Error: No film';
    }
  },
  data() {
    return {
      film: {} as Film,
      errorMsg: ''
    };
  },
  components: {
    // ListGridView
  }
});
</script>
