<template>
  <div class="l-post post">
    <div class="l-post__header post__header">
      <img
        class="l-post__header-image post__header-image"
        :src="post.image"
        alt=""
      >
      <div class="l-post__header-details post__header-details">
        <h1 class="l-post__header-details-title post__header-details-title">
          {{ post.title }}
        </h1>
        <p class="l-post__header-details-info post__header-details-info">
          {{ post.author }} - {{ formatDate(post.createdAt) }}
        </p>
      </div>
    </div>
    <p class="l-post__intro post__intro">{{ post.intro }}</p>
    <p class="l-post__text post__text">{{ post.text }}</p>
  </div>
</template>

<script>
  import { mixins } from '../mixins/mixins';

  export default {
    props: {
      post: {
        type: Object,
        required: true,
      },
    },
    mixins: [mixins],
  };
</script>

<style lang="scss">
  .l-post__header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    &-image {
      max-width: 50em;
      width: 100%;
      flex: 1;
      border-radius: 1em;
    }

    &-details {
      padding: 1em;

      @media (max-width: 768px) {
        padding: 0;
      }
    }
  }

  .post {
    &__header-details {
      font-style: italic;
    }

    &__intro {
      font-weight: bold;
    }
  }
</style>
