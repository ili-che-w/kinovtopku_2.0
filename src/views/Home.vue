<template>
  <div class="home">
    <main class="main" role="main">
      <h2>List of films</h2>
      <FilmsList />
    </main>
  </div>
</template>

<script lang="ts">
import FilmsList from '@/components/FilmsList.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    FilmsList
  }
});
</script>
