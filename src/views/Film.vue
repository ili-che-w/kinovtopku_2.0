<template>
  <div class="film-view">
    <FilmCard />
  </div>
</template>

<script lang="ts">
import FilmCard from '@/components/FilmCard.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    FilmCard
  }
});
</script>
