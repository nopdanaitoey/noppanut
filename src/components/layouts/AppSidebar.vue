<template>
  <a-layout-sider>
    <div class="tw-mt-5 tw-bg-center">
      <div class="logo-container">
        <img class="logo" src="../../assets/Fortest.jpg" />
      </div>
      <div class="tw-mb-2">
        <span class="logo-text">
          <b> Noppanut </b>
        </span>
      </div>
    </div>
    <a-menu v-model="selectedKeys" mode="inline">
      <div v-for="item in masterMenu" :key="item.key">
        <div v-if="item.subMenu.length <= 0">
          <a-menu-item :key="item.key">
            <router-link :to="item.to"> {{ item.menu }}</router-link>
          </a-menu-item>
        </div>
        <div v-else>
          <a-sub-menu>
            <template #title>
              <span>
                <span>{{ item.menu }}</span>
              </span>
            </template>
            <a-menu-item v-for="itemSub in item.subMenu" :key="itemSub.subKey">
              <router-link :to="itemSub.to">{{ itemSub.subMenu }}</router-link>
            </a-menu-item>
          </a-sub-menu>
        </div>
      </div>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: "AppSidebar",
  data() {
    return {
      selectedKeys: [],
      masterMenu: [
        {
          key: 1,
          menu: "HaveSubMenu",
          subMenu: [
            {
              subKey: 1.1,
              subMenu: "Submenu",
              to: "/Submenu",
            },
            {
              subKey: 1.2,
              subMenu: "Submenu",
              to: "/Submenu",
            },
            {
              subKey: 1.3,
              subMenu: "Submenu",
              to: "/Submenu",
            },
          ],
        },
        {
          key: 2,
          menu: "NoSubMenu",
          to: "/",
          subMenu: [],
        },
      ],
    };
  },
  methods: {
    handleClick(v) {
      console.log("d", v);
    },
  },
};
</script>

<style>
.ant-layout-sider {
  background-color: black !important;
}
.ant-menu {
  background-color: black !important;
  color: #fff !important;
}
.ant-menu-item {
  color: #fff;
}
.ant-menu-item-selected {
  background-color: #86bc25 !important;
  color: #ffff !important;
}
.ant-menu-submenu-title {
  color: #ffff !important;
}

.large-text {
  font-size: 24px;
}
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.logo {
  width: 4rem;
  height: 4rem;
  margin-right: 0.5rem;
}
.logo-text {
  font-size: 1.2rem;
  margin-left: 2px;
}
.logo-text b {
  color: #86bc25;
}
</style>
