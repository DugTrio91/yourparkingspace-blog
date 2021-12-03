<template>
  <div class="l-search search">
    <p class="l-search__label search__label" id="searchLabel">Search Posts:</p>
    <input
      class="l-search__input search__input"
      type="text"
      v-model="input"
      placeholder="Type here"
      aria-labelledby="searchLabel"
    />
  </div>
</template>

<script>
  export default {
    data: () => ({
      timeout: null,
      search: '',
    }),
    computed: {
      input: {
        get() {
          return this.search;
        },
        set(query) {
          clearTimeout(this.timeout);

          this.timeout = setTimeout(() => {
            this.search = query;
            if (this.search) {
              this.$emit('search', this.search);
            } else {
              this.$emit('clear');
            }
          }, 300);
        },
      },
    },
  };
</script>

<style lang="scss">
  .l-search {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    margin: 0.5em;

    @media (max-width: 768px) {
      justify-content: center;
    }

    &__label {
      margin: 0 0.5em 0;
    }

    &__input {
      padding: 0.5em;
      border: 0;
      border-bottom: thin solid #000;
    }
  }

  .search {
    &__label {
      font-size: 1.25em;
      font-weight: bold;
      text-align: right;
    }

    &__input {
      font-family: inherit;
      font-size: 1.25em;
    }
  }
</style>
