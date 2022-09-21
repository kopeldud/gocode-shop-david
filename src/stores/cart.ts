import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import type { jsonData } from "../Models/JsonData";

export const useCartStore = defineStore('cart', () => {
  const productsInCart = reactive<jsonData[]>([]);
  //const count = computed(() => count.value);
  function addToCart(prodact: jsonData) {
    productsInCart.push(prodact);
    console.log("add?2");
    
  };
  function removeFromCart(prodact: jsonData) {
    productsInCart.pop();
  };

  return { productsInCart, addToCart, removeFromCart }
})
