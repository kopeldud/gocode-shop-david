<script setup lang="ts">
import { useCartStore } from "@/stores/cart";
import Products from "./Products.vue";
import type { jsonData } from "../Models/JsonData";

const cart = useCartStore();
cart.addToCart(prod);
</script>

<template>
  <h1>בעגלה שלי:</h1>
  <hr />
  <Products :products="cart.productsInCart" />
</template>

