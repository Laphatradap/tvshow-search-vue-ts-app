<template>
  <div>{{nan}}</div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
// import users from "@/store/modules/users";
@Component
export default class Detailpage extends Vue {
  nan = "this is detail page";
  // get username() {
  //   return users.username;
  // }
}
</script>