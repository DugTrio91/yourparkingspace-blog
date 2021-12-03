<template>
  <div class="l-controls controls" id="controls">
    <button
      class="l-controls__button controls__button"
      id="buttonPrev"
      @click="$emit('change-page', 'prev')"
      :disabled="position === 'start'"
    >
      Prev
    </button>
    <button
      class="l-controls__button controls__button"
      id="buttonNext"
      @click="$emit('change-page', 'next')"
      :disabled="position === 'end'"
    >
      Next
    </button>
  </div>
</template>
<script>
  export default {
    props: {
      position: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style lang="scss">
  .l-controls {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;

    &__button {
      border: none;
      padding: 0.25em 0.5em;
    }
  }

  .controls__button {
    background-color: #000;
    color: #fff;
    font-size: 1.25em;
    font-weight: bold;
    font-family: inherit;

    &:disabled,
    &:disabled:hover, {
      background-color: lighten(#000, 50%);
      cursor: not-allowed;
    }

    &:hover {
      background-color: lighten(#000, 10%);
    }
  }
</style>
