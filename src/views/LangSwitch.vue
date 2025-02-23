<template>
  <div v-if="showpopup" class="popup-overlay">
      <div class="popup-limba">
          <h2>Select language</h2>
          <select v-model="selectedlanguage">
              <option value="ro">Romana</option>
              <option value="en">Engleza</option>
              <option value="hu">Maghiara</option>
          </select>
          <!-- <button v-on:click="confirmlanguage"{{ currentTranslations.confirmButton }}>Confirma</button> -->
          <button v-on:click="confirmlanguage()">Confirma</button>
      </div>
  </div>
</template>

<script>
import ro from '../translations/ro.json';
import en from '../translations/en.json';
import hu from '../translations/hu.json';

export default{
  name: 'app',
  data(){
      return{
          showpopup: true,
          selectedlanguage: 'ro',
          translations: {
              ro: ro,
              en: en,
              hu: hu,
          }
      }
  },
  created() {
      const savedlanguage = localStorage.getItem('selectedlanguage');
      if (savedlanguage) {
          this.selectedlanguage = savedlanguage;
      }
  },
  methods:{
      confirmlanguage() {
          localStorage.setItem('selectedlanguage', this.selectedlanguage);
          this.showpopup = false; // inchide pop-up-ul
      }
  },
  computed: {
      currentTranslations() {
          return this.translations[this.selectedlanguage];
      }
  }
}

</script>

<style>
.popup-limba {
  position: fixed; /* Poziționează popup-ul în raport cu fereastra */
  top: 50%; /* Centrul vertical */
  left: 50%; /* Centrul orizontal */
  transform: translate(-50%, -50%); /* Centrul exact */
  background-color: white; /* Fundal alb */
  border: 1px solid #ccc; /* Contur gri deschis */
  border-radius: 8px; /* Colțuri rotunjite */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Umbră */
  padding: 20px; /* Spațiu interior */
  z-index: 1000; /* Asigură-te că este deasupra altor elemente */
}

.popup-overlay {
  position: fixed; /* Poziționează overlay-ul în raport cu fereastra */
  top: 0;
  left: 0;
  width: 100%; /* Lățimea completă */
  height: 100%; /* Înălțimea completă */
  background-color: rgba(0, 0, 0, 0.5); /* Fundal semi-transparent */
  z-index: 999; /* Asigură-te că este sub popup */
}

h2 {
  margin: 0 0 15px; /* Margine pentru titlu */
}

select {
  width: 100%; /* Lățimea completă */
  padding: 10px; /* Spațiu interior */
  margin-bottom: 15px; /* Margine inferioară */
  border: 1px solid #ccc; /* Contur gri deschis */
  border-radius: 4px; /* Colțuri rotunjite */
}

button {
  background-color: #007bff; /* Fundal albastru */
  color: white; /* Text alb */
  border: none; /* Fără contur */
  border-radius: 4px; /* Colțuri rotunjite */
  padding: 10px 15px; /* Spațiu interior */
  cursor: pointer; /* Cursor pointer */
  transition: background-color 0.3s; /* Tranziție pentru hover */
}

button:hover {
  background-color: #0056b3; /* Fundal mai închis la hover */
}
</style>
