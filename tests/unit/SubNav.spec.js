import SubNav from "@/components/SubNav.vue";
import { mount } from "@vue/test-utils";

describe("SubNav", () => {
  describe("when user is on job page", () => {
    it("display job count", () => {
      const wrapper = mount(SubNav, {
        data() {
          return { onJobResult: true };
        },
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });
  describe("when user is on job page", () => {
    it("don't display job count", () => {
      const wrapper = mount(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return { onJobResult: false };
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
