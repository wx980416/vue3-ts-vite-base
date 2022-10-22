import { createPinia } from "pinia";
import { useCountStore } from "./modules/count/index";
const store = createPinia();

export default store;
export { useCountStore };
