<template>
  <a-layout-content style="margin: 16px 16px">
    <div :style="{ padding: '24px', background: '#fff', minHeight: '100%' }">
      <router-view></router-view>
    </div>
  </a-layout-content>
</template>

<script>
export default {
  name: "AppContent",
  components: {},
};
</script>

<style></style>
