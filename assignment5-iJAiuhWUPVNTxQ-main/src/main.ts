import { createApp } from "vue";
import "./styles/mug.scss";
import { createPinia } from "pinia";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";
import { onAuthStateChanged } from "firebase/auth";
import App from "./App.vue";
import { auth } from "./firebase";
import { useBeverageStore } from "./stores/beverageStore";

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

const app = createApp(App);
app.use(pinia);

const beverageStore = useBeverageStore(pinia);

beverageStore.init().then(() => {
  onAuthStateChanged(auth, (user) => {
    beverageStore.setUser(user);
  });

  app.mount("#app");
});