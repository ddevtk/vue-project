import { shallowMount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  const wrapper = shallowMount(MainNav);
  it("displays company name", async () => {
    const button = wrapper.find("[data-test='brand']");
    expect(button.text()).toMatch("Google Career");
  });

  it("display menu items for navigation", () => {
    const navMenuItems = wrapper.findAll(
      "[data-list-item='main-nav-list-item']"
    );
    const navMenuItemsText = navMenuItems.map((item) => item.text());
    expect(navMenuItemsText).toEqual([
      "Teams",
      "Locations",
      "Benefits",
      "Jobs",
      "Students",
    ]);
  });

  describe("when user is logged in", () => {
    it("user login", async () => {
      const wrapper = shallowMount(MainNav);
      // const loginButton = wrapper.findComponent({ name: "ActionButton" });
      // const profileImage = wrapper.findComponent({ name: "ProfileImage" });
      const profileImage = wrapper.find("[data-test='profile-image']");

      expect(profileImage.exists()).toBe(false);

      let loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      loginButton = wrapper.find("[data-test='profile-image']"); // After click, login button bien mat => gan lai gia tri login button
      expect(profileImage.exists()).toBe(false);
    });
    it("show subnav", async () => {
      const wrapper = shallowMount(MainNav);
      let subNav = wrapper.find("[data-test='sub-nav']");
      const loginButton = wrapper.find("[data-test='login-button']");

      expect(subNav.exists()).toBe(false);
      await loginButton.trigger("click");

      subNav = wrapper.find("[data-test='sub-nav']");
      expect(subNav.exists()).toBe(true);
    });
  });
});
