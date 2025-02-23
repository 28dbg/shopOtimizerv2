<template>
  <div class="quantity-control">
    <button @click.stop="changeQuantity(-1)" :disabled="selectedQuantity <= 1">-</button>
    <span>{{ selectedQuantity }}</span>
    <button @click.stop="changeQuantity(1)" :disabled="selectedQuantity >= 10">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedQuantity: 1,
    }
  },

  methods: {
    changeQuantity(amount) {
      this.selectedQuantity += amount
      if (this.selectedQuantity < 1) this.selectedQuantity = 1
      if (this.selectedQuantity > 10) this.selectedQuantity = 10
      this.$emit('selected-quantity', this.selectedQuantity)
    },
  },
}
</script>

<style>
.quantity-control {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
