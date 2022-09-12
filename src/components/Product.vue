<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Products",
});
</script>

<template>
  <div>
    <div class="product-card">
      <div class="product-image">
        <img
          src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
        />
      </div>
      <div class="product-info">
        <h5>Winter Jacket</h5>
        <h6>$99.99</h6>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-info {
  margin-top: auto;
  padding-top: 20px;
  text-align: center;
}
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

label {
  color: #666;
  font-size: 10px;
  font-weight: 500;
  line-height: 2em;
  text-transform: uppercase;
}

@media (max-width: 600px) {
  .product-card {
    flex: 1 46%;
  }
}

@media (max-width: 920px) {
  .product-card {
    flex: 1 21%;
  }
}

@media (max-width: 920px) {
  .products .product-card:first-child,
  .products .product-card:nth-child(2) {
    flex: 2 46%;
  }
}
</style>

