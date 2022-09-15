<script lang="ts">
import { defineComponent, type PropType } from "vue";
import Product from "./Product.vue";
import type { jsonData } from "@/Models/JsonData";

export default defineComponent({
  name: "Products",
  components: { Product },
  props: {
    products: Object as PropType<jsonData[]>,
  },
  //   computed: {
  //     products() {
  //     return [{...products}]
  //   }
  // }
});
</script>

<template>
  <section class="products">
    <Product v-for="item in products" :item="item" />
  </section>
</template>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
}
</style>

