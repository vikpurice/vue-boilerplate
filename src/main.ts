import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import {
  serviceProviders,
  HTTPProvider,
  LocalizationProvider,
} from "./providers/ServiceProviders";

import "vue-sonner/style.css";
import "./assets/styles/tailwind.css";
import "./assets/styles/index.scss";

const app = createApp(App);

serviceProviders(app)
  .provide(new HTTPProvider())
  .provide(new LocalizationProvider());

app.use(createPinia());
app.use(router);
app.mount("#app");
