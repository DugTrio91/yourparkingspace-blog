<template>
  <div class="l-post-container post-container">
    <div class="l-post-container__back post-container__back">
      <router-link to="/">&lsaquo; Back to list</router-link>
    </div>
    <post v-if="post" :post="post" />
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  import Post from '../components/Post';

  export default {
    computed: {
      ...mapGetters('posts', [
        'getActivePost',
      ]),
      post() {
        return this.getActivePost;
      },
    },
    methods: {
      ...mapActions('posts', [
        'getPostById',
        'clearActivePost',
      ]),
    },
    async mounted() {
      const id = Object.values(this.$route.query)[0];

      this.getPostById(id);
    },
    destroyed() {
      this.clearActivePost();
    },
    components: {
      Post,
    },
  };
</script>

<style lang="scss">
  .l-post-container {
    max-width: 75em;
    margin: auto;

    &__back {
      margin: 0.5em 0;
    }
  }

  .post-container__back {
    text-align: right;

    > a {
      color: #000;
      text-align: right;
      font-size: 1.25em;
      font-weight: bold;
      font-family: inherit;

      &:hover {
        color: lighten(#000, 30%);
      }
    }
  }
</style>
