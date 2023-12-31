import { createApp } from "vue";
import router from "./plugin/router";
import App from "./App.vue";
import "./index.css";

import Antd from "ant-design-vue";

import "./assets/tailwind/index.css";

const app = createApp(App);

app.use(Antd);
app.use(router);
app.mount("#app");
