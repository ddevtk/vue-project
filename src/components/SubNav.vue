<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="h-full flex items-center px-8">
      <div v-if="onJobResult" data-test="job-count">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="mr-3" />
        <span
          ><span class="text-brand-green-1 font-bold">1212</span> jobs
          matched</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubNav",
  data() {
    return {
      onJobResult: true,
    };
  },
};
</script>

<style></style>
