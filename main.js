new Vue({
  el: '#app',
  created() {
    this.src = localStorage.getItem('src');
  },
  data: {
    src: '',
  },
  methods: {
    onInput(e) {
      localStorage.setItem('src', this.src);
    },
    marked: window.marked,
  },
});
