import { createStore } from 'vuex';
import { Film } from '@/models/FilmModel';

export default createStore({
  state: {
    currentFilm: {} as Film,
    films: [] as Film[],
    url:
      'https://api.themoviedb.org/3/discover/movie?api_key=5a04ce8778f4b2fcf7a03d527e0ac099&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&vote_average.gte=0.1'
  },
  mutations: {
    setCurrentFilm(state, payload: Film) {
      state.currentFilm = payload;
    },
    saveFilms(state, payload: Film[]) {
      state.films = payload;
    }
  },
  actions: {
    fetchCurrentFilm({ commit }, filmId: number) {
      const film = this.state.films.find((f) => f.id === filmId);
      commit('setCurrentFilm', film);
    },
    async fetchFilms({ commit }) {
      const films = [] as Film[];
      const response = await fetch(this.state.url);
      const responseJson = await response.json();
      responseJson.results.forEach((rawFilm: any) => {
        const newFilm = new Film();
        Object.assign(newFilm, rawFilm);
        films.push(newFilm);
      });
      await commit('saveFilms', films);
    }
  },
  strict: true
});
