export const mixins = {
  methods: {
    formatDate(date) {
      const d = new Date(date);

      return d.toLocaleDateString();
    },
  },
};
