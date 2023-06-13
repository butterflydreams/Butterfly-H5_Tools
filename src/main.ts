import "./configs/reset.css";
import "./configs/border.css";
import "./configs/font.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
