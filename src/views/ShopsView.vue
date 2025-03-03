<template>
  <LayoutMain>
    <router-view></router-view>
    <div class="main-container" style="padding-top: 80px; margin-left: 250px;">
      <div class="select-all-container">
        <button class="select-all-button" @click="selectAllShops()">
          {{ allSelected ? 'Deselect All Shops' : 'Select All Shops' }}
        </button>
        <!-- {{this.$store.state.test}} -->
      </div>
      <div class="shops-container">
        <div class="shop" v-for="(items, index) in shops.shopsArray" :key="items">
          <img :src="shops.shopsArray[index].logo" alt="">
          <h2>{{ shops.shopsArray[index].name }}</h2>
          <button :class="{ selected: isSelected(items.id) }" @click="toggleSelection(items.id)">
            {{ isSelected(items.id) ? 'Remove Shop' : 'Add Shop' }}
          </button>
        </div>
      </div>
    </div>
  </LayoutMain>
</template>

<script>
import shops from '../Shops/shops.json'
import LayoutMain from '@/components/LayoutMain.vue';
//import { mapGetters } from 'vuex'
export default {
  components: {
    LayoutMain,

  },
  data() {
    return {
      shops:shops,
      selectedShops: [],
      allSelected: false, // sel state
    }
  },
  // computed:{
  //   ...mapGetters([
  //     'getTest'
  //   ])
  // },
  methods: {
    isSelected(shopId) {  // Check if shop is selected
      return this.selectedShops.includes(shopId)
    },
    toggleSelection(shopId) {
      const index = this.selectedShops.indexOf(shopId)
      if (index === -1) {
        this.selectedShops.push(shopId) // Add shop
      } else {
        this.selectedShops.splice(index, 1) // Remove shop
      }
      localStorage.setItem('selectedShops', JSON.stringify(this.selectedShops))
      this.$emit('update:selectedShops', this.selectedShops)

    },
    selectAllShops() {
      if (this.allSelected) {
        this.selectedShops = []
      } else {
        this.selectedShops = this.shops.shopsArray.map(shop => shop.id) // Select all
      }
      this.allSelected = !this.allSelected; // Toggle selection state
      localStorage.setItem('selectedShops', JSON.stringify(this.selectedShops))
      this.$emit('update:selectedShops', this.selectedShops)
    },
    checkSelection() {
      this.allSelected = this.selectedShops.length === this.shops.shopsArray.length

    }
  },
  mounted() {
    const storedShops = JSON.parse(localStorage.getItem('selectedShops')) || []
    this.selectedShops = storedShops

    this.checkSelection()
  }
}
</script>

<style scoped>
.main-container {
  justify-content: center;
  align-items: center;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
}
.shop {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
  transition: transform 0.2s;
  border: 1px solid #ccc;
}
.shop:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.shop img {
  height: auto;
  width: 50px;
}
.shop h2 {
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
}
.shop button {
  height: 60px;
  width: 120px;
  font-weight: bold;
  background-color: #3CB371;
  border: none;
  border-radius: 8px;
  text-align: center;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.shop button:hover {
  background-color: #218838;
}
.shops-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 20px;
  width: 100%;
}
.select-all-container {
  background-color: #3CB371;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  font-weight: bold;
  border-radius: 8px;
}
.select-all-container:hover {
  background-color: #218838;
}
@media(max-width: 800px) {
  .shops-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 500px) {
  .shops-container {
    grid-template-columns: 1fr;
  }
}
</style>
