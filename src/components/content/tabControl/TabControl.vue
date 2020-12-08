<template>
  <div class="tabControl">
    <div
      class="tabControlItem"
      v-for="(item, index) in tabs"
      :key="index"
      :class="{ active: currentTab == index }"
      @click="tabItemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabControl",
  props: {
    tabs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentTab: 0,
    };
  },
  methods: {
    tabItemClick(index) {
      this.currentTab = index;
    },
  },
};
</script>

<style>
.tabControl {
  display: flex;
  height: 50px;
  text-align: center;
  justify-content: center;
  align-items: center;
  /* background-color: #f9f9f9; */
}
.tabControlItem {
  flex: 1;
  font-size: 16px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  display: inline-block;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 2px solid var(--color-high-text);
}
</style>
