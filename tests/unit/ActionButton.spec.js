import { mount } from "@vue/test-utils";
import ActionButton from "@/components/ActionButton.vue";

describe("ActionButton", () => {
  it("render text in button", () => {
    const wrapper = mount(ActionButton, {
      props: { title: "test title" },
    });
    expect(wrapper.text()).toMatch("test title");
  });

  it("check style for button", () => {
    const wrapper = mount(ActionButton, {
      props: { title: "test", type: "secondary" },
    });
    const button = wrapper.find("button");
    expect(button.classes("secondary")).toBe(true);
  });
});
