<template>
  <div class="l-posts posts">
    <div class="l-posts__list posts__list" aria-controls="controls">
      <div
        v-for="post in posts"
        :key="post.id"
        class="l-posts__post posts__post"
      >
        <img
          class="l-posts__post-image posts__post-image"
          :src="post.image"
          alt=""
        >
        <h2 class="l-posts__post-title posts__post-title">
          <router-link :to="`/post?=${post.id}`">{{ post.title }}</router-link>
        </h2>
        <p class="l-posts__post-details posts__post-details">
          {{ post.author }} - {{ formatDate(post.createdAt) }}
        </p>
        <p class="l-posts__post-intro posts__post-intro">
          {{ post.intro }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mixins } from '../mixins/mixins';

  export default {
    props: {
      posts: {
        type: Array,
        required: true,
      },
    },
    mixins: [mixins],
  };
</script>

<style lang="scss">
  .l-posts {
    &__list {
      display: grid;
      grid-gap: 2em;
      grid-template-columns: repeat(auto-fill, minmax(25em, 1fr));

      @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
      }
    }

    &__post {
      &-image {
        max-width: 100%;
        border-radius: 1em;
      }

      &-title > a {
        color: #000;
      }

      &-details {
        color: #333;
        font-style: italic;
      }
    }
  }
</style>
