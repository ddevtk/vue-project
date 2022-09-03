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
});
