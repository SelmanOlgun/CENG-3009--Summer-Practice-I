<template>
  <div class="sidebars">
    <div class="pragmatic-logo">
      <img src="../assets/pragmatic-logo.svg" alt="pragmatic-logo" />
      <div>
        <p class="pragmatic-text">Pragmatic</p>
      </div>
    </div>
    <div class="sidebar-contents">
      <ul>
        <li v-for="(item, index) in contents" :key="index" class="sidebar-item">
          <div @click="navigateTo(item.title)">
            <div
              :class="{
                'main-title': item.mainTitle,
                'normal-title': item.title && !item.mainTitle,
                'first-children-title': item.firstChildren && !item.mainTitle,
              }"
              @click="item.mainTitle ? null : toggleItem(index)"
            >
              <i v-if="item.icon" :class="item.icon"></i>
              <span class="sidebar-text">{{
                item.mainTitle || item.title
              }}</span>
              <span
                v-if="item.firstChildren"
                class="toggle-icon"
                v-html="arrowIcon"
                :class="{ rotated: activeItem === index }"
              ></span>
            </div>
          </div>
          <ul
            v-if="item.firstChildren && activeItem === index"
            class="sidebar-submenu"
          >
            <li
              v-for="(firstChild, firstChildIndex) in item.firstChildren"
              :key="firstChildIndex"
            >
              <div
                :class="{
                  'first-children-title': true,
                  active: activeSubItem === firstChildIndex,
                }"
                @click.stop="
                  navigateTo(firstChild.title);
                  toggleSubItem(index, firstChildIndex);
                "
              >
                <span class="sidebar-text">{{ firstChild.title }}</span>
                <span
                  v-if="firstChild.secondChildren"
                  class="toggle-icon"
                  v-html="arrowIcon"
                  :class="{ rotated: activeSubItem === firstChildIndex }"
                ></span>
              </div>
              <ul
                v-if="
                  firstChild.secondChildren && activeSubItem === firstChildIndex
                "
                class="sidebar-submenu"
              >
                <li
                  v-for="(
                    secondChild, secondChildIndex
                  ) in firstChild.secondChildren"
                  :key="secondChildIndex"
                >
                  <div
                    :class="{
                      'second-children-title': true,
                      active: activeThirdItem === secondChildIndex,
                    }"
                    @click.stop="
                      navigateTo(secondChild.title);
                      toggleThirdItem(index, firstChildIndex, secondChildIndex);
                    "
                  >
                    <span class="sidebar-text">{{ secondChild.title }}</span>
                    <span
                      v-if="secondChild.thirdChildren"
                      class="toggle-icon"
                      v-html="arrowIcon"
                      :class="{ rotated: activeThirdItem === secondChildIndex }"
                    ></span>
                  </div>
                  <ul
                    v-if="
                      secondChild.thirdChildren &&
                      activeThirdItem === secondChildIndex
                    "
                    class="sidebar-submenu"
                  >
                    <li
                      v-for="(
                        thirdChild, thirdChildIndex
                      ) in secondChild.thirdChildren"
                      :key="thirdChildIndex"
                    >
                      <div
                        class="third-children-title"
                        @click.stop="navigateTo(thirdChild.title)"
                      >
                        <span class="sidebar-text">{{ thirdChild.title }}</span>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { contents } from "../data/sidebarContent";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "VerticalSidebar",
  setup() {
    const activeItem = ref<number | null>(null);
    const activeSubItem = ref<number | null>(null);
    const activeThirdItem = ref<number | null>(null);
    const router = useRouter();

    const navigateTo = (routeName: string | undefined) => {
      if (!routeName) return;
      switch (routeName) {
        case "Analytical":
          router.push({ name: "Analytical" });
          break;
        case "Login":
          router.push({ name: "Login" });
          break;
        default:
          console.error(`Route ${routeName} is not valid.`);
          break;
      }
    };

    const toggleItem = (index: number) => {
      if (activeItem.value === index) {
        activeItem.value = null;
        activeSubItem.value = null;
        activeThirdItem.value = null;
      } else {
        activeItem.value = index;
        activeSubItem.value = null;
        activeThirdItem.value = null;
      }
    };

    const toggleSubItem = (itemIndex: number, subItemIndex: number) => {
      if (activeItem.value === itemIndex) {
        activeSubItem.value =
          activeSubItem.value === subItemIndex ? null : subItemIndex;
      }
    };

    const toggleThirdItem = (
      itemIndex: number,
      subItemIndex: number,
      thirdItemIndex: number
    ) => {
      if (
        activeItem.value === itemIndex &&
        activeSubItem.value === subItemIndex
      ) {
        activeThirdItem.value =
          activeThirdItem.value === thirdItemIndex ? null : thirdItemIndex;
      }
    };
    const arrowIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="12" height="12"><path fill="currentColor" d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path></svg>`;

    return {
      contents,
      activeItem,
      activeSubItem,
      activeThirdItem,
      toggleItem,
      toggleSubItem,
      toggleThirdItem,
      arrowIcon,
      navigateTo,
    };
  },
});
</script>

<style scoped>
.sidebars {
  padding: 10px 20px;
  font-size: 14px;
  height: 85vh;
  width: 230px;
}

.pragmatic-logo {
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding-left: 20px;
  padding-right: 20px;
}

.pragmatic-logo img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.pragmatic-text {
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  text-shadow: rgb(243, 247, 250) 0px 0px 1px, rgb(243, 247, 250) 0px 0px 1px,
    rgb(243, 247, 250) 0px 0px 1px, rgb(243, 247, 250) 0px 0px 1px,
    rgb(243, 247, 250) 0px 0px 1px, rgb(243, 247, 250) 0px 0px 1px,
    rgb(243, 247, 250) 0px 0px 1px, rgba(0, 0, 0, 0.3) 0px 1px 2px,
    rgba(0, 0, 0, 0.1) 0px 3px 9px;
  color: rgb(74, 89, 106);
  cursor: pointer;
  margin: 0px;
  width: 94px;
  -webkit-font-smoothing: antialiased;
  unicode-bidi: isolate;
  color-scheme: light;
}

ul {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
}

.toggle-icon {
  width: 12px;
  height: 12px;
  transition: transform 0.3s ease;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}

.toggle-icon.rotated {
  transform: rotate(180deg);
}

.sidebar-item > div > .main-title {
  text-align: left;
  padding-left: 20px;
  padding-top: 4px;
  font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: normal;
  color: rgba(74, 89, 106, 0.35);
  height: 16px;
}
.sidebar-contents {
  padding-top: 15px;
  width: 230px;
  max-height: 85vh;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: lightgrey transparent;
}

.sidebar-contents {
  padding-top: 15px;
  width: 230px;
  max-height: 85vh;
  overflow: hidden;
}

.sidebar-contents:hover {
  overflow-y: auto;
}

.sidebar-contents::-webkit-scrollbar {
  width: 0;
}

.sidebar-contents::-webkit-scrollbar-thumb {
  background-color: lightgrey;
  border-radius: 4px;
}

.sidebar-contents::-webkit-scrollbar-thumb:hover {
  background-color: grey;
}

.sidebar-contents::-webkit-scrollbar-track {
  background: transparent;
}

.normal-title {
  position: relative;
}

.sidebar-item {
  cursor: pointer;
}

.sidebar-item > div > .normal-title {
  width: 166px;
  padding-left: 20px;
  padding-right: 44px;
  height: 40px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  text-align: left;
  display: flex;
  align-items: center;
}

.normal-title .sidebar-text {
  margin-left: 8px;
}
.mdi {
  font-size: 18px;
}

.first-children-title {
  width: 170;
  padding-left: 60px;
  padding-right: 20px;
  height: 40px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  text-align: left;
  display: flex;
  align-items: center;
}

.second-children-title {
  width: 170;
  padding-left: 80px;
  padding-right: 20px;
  height: 40px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  text-align: left;
  display: flex;
  align-items: center;
}

.third-children-title {
  width: 170;
  padding-left: 100px;
  padding-right: 20px;
  height: 40px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 14px;
  text-align: left;
  display: flex;
  align-items: center;
}
@media (max-width: 768px) {
  .sidebars {
    display: none;
  }
}
</style>