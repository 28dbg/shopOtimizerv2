<template>
  <!-- <h2>dennis lloyd</h2> -->
  <LayoutMain>
    <h1>leftovers</h1>
    <div class="main-container">
      <button class="totalButton">Calculeaza totalul</button>

      <div>
        <img
          src="../assets/download.png"
          alt="cosGunoi"
          class="cosGunoi"
          v-on:click="deleteProduct()"
        />
      </div>
    </div>
  </LayoutMain>
</template>

<script>
import LayoutMain from './LayoutMain.vue'
export default {
  components: {
    LayoutMain,
  },
}
</script>
