<template>
  <button :class="buttonClass">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: ["title", "type"],
  computed: {
    buttonClass() {
      return { [this.type]: true };
    },
  },
  methods: {},
};
</script>

<style scoped>
button {
  @apply px-5 py-3 rounded font-medium;
}
.primary {
  @apply bg-brand-blue-1 text-white hover:shadow-blue-custom;
}
.secondary {
  @apply text-brand-blue-1 bg-transparent hover:text-white hover:bg-brand-blue-1;
}
</style>
