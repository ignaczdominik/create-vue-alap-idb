import {useHead} from "@vueuse/head";

export function setTitle(to, from, next) {
  useHead({title: to.meta.title + process.env.npm_package_name});
  next()
}
