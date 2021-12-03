<template>
  <div class="l-home home">
    <div class="l-home__header">
      <h1 class="l-home__header-title home__header-title">My Blog</h1>
      <search @search="handleSearch($event)" @clear="load" />
    </div>
    <div v-if="!getError">
      <p
        class="l-home__search-results home__search-results"
        v-if="searching"
      >
        {{ allPosts.length }} results found
      </p>
      <posts :posts="allPosts"/>
      <pagination
        v-if="!searching"
        :position="getPosition"
        @change-page="handlePageChange($event)"
      />
    </div>
    <p class="l-error error" v-else>
      There was an error connecting to the server, please try again later.
    </p>
  </div>
</template>

<script>
  import Posts from '../components/Posts';
  import Pagination from '../components/Pagination';
  import Search from '../components/Search';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    data: () => ({
      searching: false,
    }),
    name: 'Home',
    computed: {
      ...mapGetters('posts', [
        'allPosts',
        'getPage',
        'getPosition',
        'getError',
      ]),
    },
    methods: {
      ...mapActions('posts', [
        'getPosts',
        'nextPage',
        'prevPage',
        'searchPosts',
        'clearError',
      ]),
      handlePageChange(direction) {
        if (direction === 'next') {
          this.nextPage();
          this.getPosts();
        } else {
          this.prevPage();
          this.getPosts();
        }
      },
      handleSearch(query) {
        this.searchPosts(query);
        this.searching = true;
      },
      load() {
        this.clearError();
        this.getPosts();
        this.searching = false;
      },
    },
    mounted() {
      this.load();
    },
    components: {
      Posts,
      Pagination,
      Search,
    },
  };
</script>

<style lang="scss">
  .l-home__header {
    margin-bottom: 3em;
    padding-bottom: 1em;
    border-bottom: thin solid #eee;

    @media (min-width: 769px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    &-title {
      margin: 0;
    }
  }

  .home {
    &__search-results {
      font-size: 1.25em;
      font-weight: bold;
    }

    &__header-title {
      font-size: clamp(4em, 5em, 5vw);
      text-align: center;
      white-space: nowrap;
    }
  }
</style>
