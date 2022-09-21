<script setup lang="ts">
import type { jsonData } from "@/Models/JsonData";
import { useCartStore } from "@/stores/cart";
import { defineComponent, type PropType } from "vue";

const props = defineProps<{
  item: jsonData;
}>();

const cart = useCartStore();
function addProductToCart(prod: jsonData) {
  cart.addToCart(prod);
  console.log("add?1");
}
</script>

<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="item?.image" />
    </div>
    <div class="product-info">
      <h5>{{ item?.title }}</h5>
      <h6>{{ item?.price }}</h6>
    </div>
    <div class="flex">
      <span> - </span>
      <input type="button" value="Add to cart" :click="addProductToCart" />
      <span> + </span>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;

  padding: 2%;
  flex: 1 16%;

  background-color: #fff;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.25);
}

.product-image img {
  width: 100%;
}

.product-info {
  margin-top: auto;
  padding-top: 20px;
  text-align: center;
}

.flex {
}

@media (max-width: 920px) {
  .product-card {
    flex: 1 21%;
  }

  .products .product-card:first-child,
  .products .product-card:nth-child(2) {
    flex: 2 46%;
  }
}

@media (max-width: 600px) {
  .product-card {
    flex: 1 46%;
  }
}
</style>

