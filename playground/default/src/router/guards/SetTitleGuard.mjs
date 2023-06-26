import {useHead} from "@vueuse/head";

export function setTitle(to, from, next) {
  useHead().title = to.meta.title;
  next()
}
