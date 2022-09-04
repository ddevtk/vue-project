<template>
  <img
    :src="imageLink"
    alt="profile-image"
    class="w-8 h-8 object-contain rounded-3xl"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink: "https://bit.ly/3qbdqvO",
    };
  },
};
</script>

<style></style>
