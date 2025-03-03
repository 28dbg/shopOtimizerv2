<template>
  <LayoutMain>
    <router-view></router-view>
    <div class="main-container" style="padding-top: 20px; margin-left: 160px">
      <ul class="categories-list">
        <li
          v-for="category in mergedProducts.categories"
          :key="category.categoryId"
          @click="selectCategory(category)"
          class="category-item"
        >
          <img
            v-if="isCreateListPage"
            :src="category.categoryImageId"
            alt="Category"
            class="category-image"
          />
          <span class="category-name">{{ category.categoryName }}</span>
        </li>
      </ul>
      <div class="products-columns">
        <div
          v-for="product in selectedCategoryProducts"
          :key="product.productId"
          class="product"
          @click="openPopup(product)"
        >
          <img :src="product.productImageId" alt="Product" />
          <span class="name">{{ product.productName }}</span>
        </div>
      </div>
      <div v-if="isPopupOpen" class="popup">
        <div class="popup-content">
          <span class="close" @click="closePopup()">&times;</span>
          <h3>{{ selectedProduct.productName }}</h3>
          <img :src="selectedProduct.productImageId" alt="Product" />

          <p>{{ selectedProduct.productDescription }}</p>

          <QuantityButtons @selected-quantity="receivedEmit" />

          <button @click.stop="addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  </LayoutMain>
</template>

<script>
import KauflandProduse from '../ShopsProducts/KauflandProduse.json'
import LidlProduse from '../ShopsProducts/LidlProduse.json'
import AuchanProduse from '../ShopsProducts/AuchanProduse.json'
import CarrefourProduse from '../ShopsProducts/CarrefourProduse.json'
import MegaImageProduse from '../ShopsProducts/MegaImageProduse.json'
import PennyProduse from '../ShopsProducts/PennyProduse.json'
import ProfiProduse from '../ShopsProducts/ProfiProduse.json'
import SelgrosProduse from '../ShopsProducts/SelgrosProduse.json'
import LayoutMain from '@/components/LayoutMain.vue'
import QuantityButtons from '@/components/QuantityButtons.vue'
import ShopsView from './ShopsView.vue'
export default {
  props: {
    selectedShops: {
      type: Array,
      default: localStorage.getItem('selectedShops'),
    },
  },
  components: {
    LayoutMain,
    QuantityButtons,
  },

  data() {
    return {
      shops: [
        { id: 1, name: 'Kaufland', data: KauflandProduse },
        { id: 2, name: 'Lidl', data: LidlProduse },
        { id: 3, name: 'Penny', data: PennyProduse },
        { id: 7, name: 'Profi', data: ProfiProduse },
        { id: 6, name: 'Auchan', data: AuchanProduse },
        { id: 8, name: 'Selgros', data: SelgrosProduse },
        { id: 4, name: 'Carrefour', data: CarrefourProduse },
        { id: 5, name: 'Mega Image', data: MegaImageProduse },
      ],
      selectedCategory: [],
      cart: [],
      selectedProduct: {},
      isPopupOpen: false,
      selectedQuantity: 1,
      isCreateListPage: true,
      mergedProducts: { categories: [], products: [] },
    }
  },
  computed: {
    selectedCategoryProducts() {
      if (!this.selectedCategory) return []
      const productMap = new Map()
      this.mergedProducts.products.forEach((product) => {
        if (product.categoryId === this.selectedCategory.categoryId) {
          if (product.productComparisonCode) {
            if (!productMap.has(product.productComparisonCode)) {
              productMap.set(product.productComparisonCode, product)
            } else {
              const existingProduct = productMap.get(product.productComparisonCode)
              if (product.productPrice < existingProduct.productPrice) {
                productMap.set(product.productComparisonCode, product)
              }
            }
          } else {
            productMap.set(product.productId, product)
          }
        }
      })

      return Array.from(productMap.values())
    },
  },
  methods: {
    // getDuplicateProductsWithLowestPrices(products) {
    //   const productMap = new Map()

    //   products.forEach((product) => {
    //     if (product.productComparisonCode) {
    //       if (!productMap.has(product.productComparisonCode)) {
    //         productMap.set(product.productComparisonCode, {
    //           ...product,
    //           lowestPrice: product.productPrice,
    //         })
    //       } else {
    //         const existingProduct = productMap.get(product.productComparisonCode)
    //         if (product.productPrice < existingProduct.lowestPrice) {
    //           // existingProduct.lowestPrice=productPrice
    //           existingProduct.productId = product.productId
    //           existingProduct.productName = product.productName
    //           existingProduct.productImageId = product.productImageId
    //         }
    //       }
    //     }
    //   })
    //   return Array.from(productMap.values())
    // },
    //getUniqueProducts(products) {
    //   const uniqueProducts = products.filter(
    //     (product, index, self) =>
    //       index ===
    //       self.findIndex((p) => p.productId === product.productId && !p.productComparisonCode),
    //   )
    //   return uniqueProducts
    // },
    mergeProducts() {
      const selectedShops = JSON.parse(this.selectedShops) || []
      const allCategories = []
      const allProducts = []

      this.shops.forEach((shop) => {
        if (selectedShops.includes(shop.id)) {
          const categories = shop.data.shopCategory
          categories.forEach((category) => {
            if (!allCategories.some((c) => c.categoryId === category.categoryId)) {
              allCategories.push(category)
            }
            category.categoryProducts.forEach((product) => {
              allProducts.push({ ...product, categoryId: category.categoryId })
            })
          })
        }
      })

      const productMap = new Map()

      allProducts.forEach((product) => {
        if (product.productComparisonCode) {
          if (!productMap.has(product.productComparisonCode)) {
            productMap.set(product.productComparisonCode, product)
          } else {
            const existingProduct = productMap.get(product.productComparisonCode)
            if (product.productPrice < existingProduct.productPrice) {
              productMap.set(product.productComparisonCode, product)
            }
          }
        } else {
          productMap.set(product.productId, product)
        }
      })

      this.mergedProducts = {
        categories: allCategories,
        products: Array.from(productMap.values()),
      }
    },


    receivedEmit(quantity) {
      // Update quantity
      alert('Quantity emitted: ' + quantity)
    },

    updateLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },

    selectCategory(category) {
      // Set selected category
      this.selectedCategory = category
      console.log('selected category:', category)
    },

    openPopup(product) {
      this.selectedProduct = product
      this.selectedProductDescription = product.description
      this.selectedQuantity = 1 // Reset quantity to 1
      this.isPopupOpen = true
    },

    closePopup() {
      // Close popup
      this.isPopupOpen = false
    },

    addToCart() {
      const existingItem = this.cart.find((item) => item.product.id === this.selectedProduct.id)
      if (existingItem) {
        existingItem.quantity += this.selectedQuantity // Update quantity
      } else {
        this.cart.push({
          product: {
            id: this.selectedProduct.productId,
            name: this.selectedProduct.productName,
            // image: this.selectedProduct.image
          },
          quantity: this.selectedQuantity,
        })
      }
      this.updateLocalStorage() // Update local storage
      this.closePopup()
      console.log(`Added ${this.selectedProduct.name} with quantity ${this.selectedQuantity}.`)
    },
  },
  mounted() {
    //this.loadShops()
    this.mergeProducts()
    const storedCart = JSON.parse(localStorage.getItem('cart')) || []
    this.cart = storedCart
  },
  watch: {
    selectedShops: {
      immediate: true,
      handler() {
        this.mergeProducts()
      },
    },
  },
}
</script>

<style scoped>
.main-container {
  padding: 20px;
  display: flex;
  flex-direction: column;
}
.main-container img {
  width: 50px;
  height: auto;
}
.products-columns {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 10px;
}
.product {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  transition: transform 0.2s;
}
.product:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.quantity-control button {
  margin: 0 5px;
}
.name {
  font-weight: bold;
  align-items: center;
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.popup-content {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 90%;
}
.popup-content h3 {
  margin-bottom: 15px;
}

.popup-content p {
  margin-bottom: 10px;
}

.close {
  cursor: pointer;
  float: right;
  font-size: 24px;
  color: #333;
  transition: color 0.3s;
}
.close:hover {
  color: #000;
}
button {
  background-color: #28a745;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #218838;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
@media (max-width: 800px) {
  .products-columns {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 500px) {
  .products-columns {
    grid-template-columns: 1fr;
  }
}
.categories-list {
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow-x: auto;
}
.category-item {
  border: 1px solid #ccc; /* Border for each category */
  border-radius: 8px;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  text-align: center;
  transition:
    background-color 0.3s,
    transform 0.3s;
  width: 150px;
}
.category-item:hover {
  background-color: #f0f0f0;
  transform: scale(1.05);
  font-weight: bold;
}
.category-name {
  font-weight: bold;
  margin-bottom: 5px;
}
.category-image {
  width: 100%;
  height: auto;
  display: block;
}
.cart-image {
  width: 50px;
  height: 50px;
}
</style>
