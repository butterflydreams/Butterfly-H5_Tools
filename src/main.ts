import "@configs/reset.css";
import "@configs/border.css";
import "@configs/font.css";

import { createApp } from "vue";
import App from "@/App.vue";
import router from "@routers/index.js";

const app = createApp(App);

app.use(router);

app.mount("#app");
