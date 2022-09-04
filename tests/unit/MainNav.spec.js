import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  const wrapper = mount(MainNav);
  it("displays company name", async () => {
    expect(wrapper.text()).toMatch("Symper");
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
    it("user login", () => {
      const wrapper = mount(MainNav, {
        data() {
          return { isLoggedIn: true };
        },
      });
      // const loginButton = wrapper.findComponent({ name: "ActionButton" });
      // const profileImage = wrapper.findComponent({ name: "ProfileImage" });
      const loginButton = wrapper.find("[data-test='login-button']");
      const profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
      expect(loginButton.exists()).toBe(false);
    });
  });
});
