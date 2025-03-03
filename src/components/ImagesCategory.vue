<template>
  <img :src="pathToImage" class="category-image">
</template>

<script>
export default{
  props:{
    id:{
      type:Number,
      required:true
    }
  },
  data(){
    return{
      imageMap:{
        11: '@/assets/ImageCategory/legume-si-fructe.jpg',
        22:'@/assets/ImageCategory/lactate-branzeturi.jpg',
        33:'@/assets/ImageCategory/macelarie-si-peste.jpg',
        44:'@/assets/ImageCategory/snack-uri-sarate.jpg',
        55:'@/assets/ImageCategory/Dulciuri(1).jpg'
      }
    }
  },
  computed:{
    pathToImage(){
      return this.imageMap[this.id] || ''
    }
  }
}

</script>

<style scoped>
.category-image {
  width: 100%;
  height: auto;
  display: block;
}
</style>
