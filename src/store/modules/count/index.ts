import { defineStore } from "pinia";
import type { CountInterface } from "./types";
export const useCountStore = defineStore({
  id: "count", // id必填，且需要唯一
  // state
  state: (): CountInterface => {
    return {
      count: 0,
    };
  },
  // getters
  getters: {
    doubleCount: (state) => {
      return state.count * 2;
    },
  },
  // actions
  actions: {
    countAdd() {
      this.count++;
    },
    countReduce() {
      this.count--;
    },
  },
});
