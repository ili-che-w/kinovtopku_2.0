import { createStore } from 'vuex';
import { Film } from '@/models/FilmModel';
import axios from 'axios';

export default createStore({
  state: {
    errorMsg: '',
    currentFilm: {} as Film,
    films: [] as Film[],
    url:
      'https://api.themoviedb.org/3/discover/movie?api_key=5a04ce8778f4b2fcf7a03d527e0ac099&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&vote_average.gte=0.1'
  },
  mutations: {
    setErrorMsg(state, msg: string) {
      state.errorMsg = 'ERROR: ' + msg;
    },
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
      axios
        .get(this.state.url)
        .then((response) => {
          const films = [] as Film[];
          response.data.results.forEach((rawFilm: any) => {
            const newFilm = new Film();
            Object.assign(newFilm, rawFilm);
            films.push(newFilm);
          });
          commit('saveFilms', films);
        })
        .catch((error) => {
          commit('setErrorMsg', error.message);
        });
    }
  },
  strict: true
});
