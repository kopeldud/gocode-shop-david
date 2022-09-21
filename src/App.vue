<script setup lang="ts">
//import { RouterLink, RouterView } from "vue-router";
import { defineComponent } from "vue";
import AppHeader from "./components/AppHeader.vue";
import Products from "./components/Products.vue";
import { productsList } from "./assets/ProductsList";
import { ref } from "vue";
import { reactive, computed } from "vue";
import shoppingCart from "./components/shoppingCart.vue";

// onMounted(() => {

// })

const categories = computed(() => {
  return productsList
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);
});

const selectCategory = ref("");

const productsToView = computed(() => {
  return productsList.filter((p) =>
    selectCategory.value ? p.category === selectCategory.value : true
  );
});
</script>

<template>
    <AppHeader 
      :categories="categories"
      @select-category="selectCategory = $event"
    />
    <Products :products="productsToView" />
 

  <shoppingCart />
</template>

<style scoped>
.flex {
  display: flex;
}
</style>
