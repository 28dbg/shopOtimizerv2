<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>
        <img alt="Logo" class="logo" src="@/assets/logo.jpg" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-img
        src="src/assets/shopping-cart.jpg"
        alt="Shopping Cart"
        class="cart-image"
        @click="goToShoppingCart()"
      ></v-img>
    </v-app-bar>
    <div class="address-container" style="padding-top:50px;">
      <div class="address-content">
        <button id="address" class="address-button">Address</button>
        <v-text-field
          id="enter_address"
          class="address-input"
          label="Enter Address"
          outlined
        ></v-text-field>
      </div>
    </div>
    <v-navigation-drawer app>
      <v-list>
        <v-list-item>
          <v-list-item-title>
            <button @click="goToShops()" id="shops" class="shops-button">Shops</button>
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            <button @click="goToOffer()" id="offer" class="offer-button">Offers</button>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer app>
      <v-row justify="space-between" class="footer-zone">
        <button @click="goToShopsNear()" class="nearby-shops">Nearby Shops</button>
        <button @click="goToShoppingList()" class="shopping-list">Shopping Lists</button>
        <button @click="goToCreateList()" class="create-list">Create List</button>
        <button @click="goToAccount()" class="account">Account</button>
      </v-row>
    </v-footer>
    <div class="slot-content">
      <slot></slot>
    </div>
  </v-app>
</template>

<script>
export default {
  methods: {
    goToShops() {
      this.$router.push("/shops");
    },
    goToOffer() {
      this.$router.push("/offer");
    },
    goToShopsNear() {
      this.$router.push("/shopsnear");
    },
    goToShoppingList() {
      this.$router.push("/shoppinglist");
    },
    goToShoppingCart() {
      this.$router.push("/shoppingcart");
    },
    goToAccount() {
      this.$router.push("/account");
    },
    goToCreateList() {
      this.$router.push("/createlist");
    },
  },
};
</script>

<style scoped>
.logo {
  height: 80px;
  width: 160px;
}

.cart-image {
  position: flex;
  width: 20px;
  height: 70px;
  cursor: pointer;
  margin-bottom: 10px;
}

.address-container {
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 20px 0;
  display: flex;
  justify-content: flex-end;
}

.address-content {
  display: flex;
  align-items: center;
}

.footer-zone {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f0f0f0;
  width: 100%;
  font-weight: bold;
}

.footer-zone button {
  flex: 1;
  margin: 0 5px;
}

button {
  background-color: #3CB371;
  color: black;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: arial, helvetica, sans-serif;
  font-weight: bold;
}

button:hover {
  background-color: #2e8b5c;
}

.address-button {
  margin-bottom: 10px;
}

.nearby-shops {
  margin: 5px;
  width: 200px;
  height: 50px;
  font-weight: bold;
}

.shopping-list {
  margin: 5px;
  width: 200px;
  height: 50px;
  font-weight: bold;
}

.account {
  margin: 5px;
  width: 200px;
  height: 50px;
  font-weight: bold;
}

.create-list {
  margin: 5px;
  width: 200px;
  height: 50px;
  font-weight: bold;
}

.offer-button {
  margin: 5px;
  font-weight: bold;
}

.shops-button {
  margin: 5px;
  font-weight: bold;
}

.address-button {
  margin: 5px;
  text-align: center;
  top: 5px;
  right: 50px;
  font-weight: bold;
}

.address-input {
  width: 100px;
  height: 50px;
}
</style>
