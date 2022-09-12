<script lang="ts">
import { defineComponent } from "vue";
import Product from "./Product.vue";

export default defineComponent({
  name: "Products",
  components: { Product },
});
</script>

<template>
  <section class="products">
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
    <Product />
  </section>
</template>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
}


</style>

