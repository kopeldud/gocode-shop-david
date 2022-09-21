<script lang="ts">
import { defineComponent, type PropType } from "vue";
import Product from "./Product.vue";

//const props = defineProps(['title'])
//const emit = defineEmits(['enlarge-text'])

export default defineComponent({
  name: "AppHaeder",
  components: {
    Product,
  },
  props: {
    categories: [] as PropType<string[]>,
  },
  data() {
    return {};
  },
  emits: ["selectCategory"],
});
</script>

<template>
  <nav class="product-filter">
    <h1>Jackets</h1>

    <div class="sort">
      <div class="collection-sort">
        <label>Filter by:</label>
        <select
          @change="
            $emit('selectCategory', ($event.target as HTMLSelectElement).value)
          "
        >
          <option v-for="category in categories">
            {{ category }}
          </option>
        </select>
      </div>

      <div class="collection-sort">
        <label>Sort by:</label>
        <select>
          <option value="/">Featured</option>
          <option value="/">Best Selling</option>
          <option value="/">Alphabetically, A-Z</option>
          <option value="/">Alphabetically, Z-A</option>
          <option value="/">Price, low to high</option>
          <option value="/">Price, high to low</option>
          <option value="/">Date, new to old</option>
          <option value="/">Date, old to new</option>
        </select>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.product-filter {
  display: flex;
  padding: 30px 0;
}

.sort {
  display: flex;
  align-self: flex-end;
}

.collection-sort {
  display: flex;
  flex-direction: column;
}

.collection-sort:first-child {
  padding-right: 20px;
}

@media (max-width: 480px) {
  h1 {
    margin-bottom: 20px;
  }

  .product-filter {
    flex-direction: column;
  }

  .sort {
    align-self: flex-start;
  }
}
</style>

