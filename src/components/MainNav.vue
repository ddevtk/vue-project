<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 w-full h-16 bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a :href="url" target="_blank" class="flex items-center h-full text-xl">
          <svg
            class="w-8 text-teal-accent-400"
            viewBox="0 0 24 24"
            stroke-linejoin="round"
            stroke-width="2"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke="currentColor"
            fill="none"
          >
            <rect
              class="text-green-300"
              x="3"
              y="1"
              width="7"
              height="12"
            ></rect>
            <rect
              class="text-green-300"
              x="3"
              y="17"
              width="7"
              height="6"
            ></rect>
            <rect
              class="text-green-300"
              x="14"
              y="1"
              width="7"
              height="6"
            ></rect>
            <rect
              class="text-green-300"
              x="14"
              y="11"
              width="7"
              height="12"
            ></rect>
          </svg>
          <span data-test="brand" class="text-2xl ml-2 text-gray-900">{{
            company
          }}</span></a
        >
        <nav class="h-full ml-12">
          <ul class="flex list-none h-full p-0 m-0">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="h-full ml-8 first:ml-0"
              data-list-item="main-nav-list-item"
            >
              <a
                href=""
                class="flex items-center h-full text-gray-600 hover:text-gray-900 font-medium"
                >{{ menuItem }}</a
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <ActionButton
            v-if="!isLoggedIn"
            data-test="login-button"
            title="Sign in"
            @click="loginUser"
          />
          <ProfileImage v-else data-test="profile-image" />
        </div>
      </div>
      <SubNav data-test="sub-nav" v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/ActionButton";
import ProfileImage from "@/components/ProfileImage";
import SubNav from "@/components/SubNav";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },
  data() {
    return {
      company: "Google Career",
      url: "https://careers.google.com",
      menuItems: ["Teams", "Locations", "Benefits", "Jobs", "Students"],
      isLoggedIn: false,
    };
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
