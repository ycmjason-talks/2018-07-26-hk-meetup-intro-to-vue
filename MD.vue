<template lang="ejs">
  <main>
    <textarea v-model="src"></textarea>
    <div class="result" v-html="marked(src)"></div>
  </main>
</template>


<script lang="ts">
export default {
  data() {
    return {
      src: '',
    };
  },
  methods: {
    marked: window.marked,
  },
};
</script>


<style lang="scss" scoped>
main {
  display: flex;
}

textarea, .result {
  width: 50%;
}
</style>
