<template>
  <a-layout style="min-height: 100vh">
    <AppHeader />
    <a-layout>
      <AppSidebar />
      <app-content />
    </a-layout>
  </a-layout>
</template>

<script>
import AppHeader from "./components/layouts/AppHeader.vue";
import AppSidebar from "./components/layouts/AppSidebar.vue";
import AppContent from "./components/layouts/AppContent.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppSidebar,
    AppContent,
  },
};
</script>
