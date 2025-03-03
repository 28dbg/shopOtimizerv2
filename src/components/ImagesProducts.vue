<template>
  <img :src="pathToImage">
</template>

<script>
export default{
  props:{
    id:{
      type:String,
      required:true
    }
  },
  data(){
    return{
      imageMap:{
        '67b3986a7473aa7315bf1489':'@/assets/ImageProducts/pere.jpg',                      //Auchan
        '67b3986a5534d4e5e619c66e':'@/assets/ImageProducts/capsune.avif',
        '67b3986a667702614284f810':'@/assets/ImageProducts/limes.avif',
        '67b3986a46c40db78c360f88':'@/assets/ImageProducts/Castraveti.jpg',
        '67b3986a04fe5a54110c35ff':'@/assets/ImageProducts/fenicul.jpg',
        '67b3986aa308efc2edceed0d':'@/assets/ImageProducts/lapte-batut-romfulda-900-g.jpg',
        '67b3986a83edd174cad02e1a':'@/assets/ImageProducts/bauture-din-lapte-cu-ciocolata-muller-400-ml.jpg',
        '67b3986ae6da3ab5d9989ab3':'@/assets/ImageProducts/iaurt-cremos-cu-alune-de-padure-muller-500-g.jpg',
        '67b3986aa88ab54772ac491c':'@/assets/ImageProducts/iaurt-cu-capsuni-bio-napolact-130-g.jpg',
        '67b3986a05da885e6fc9dd78':'@/assets/ImageProducts/iaurt-cremos-cu-straciatella-muller-500-g.jpg',
        '67b3986abf59b1e64736045d':'@/assets/ImageProducts/pui-familist.jpg',
        '67b3986a77c22c3de61940c2':'@/assets/ImageProducts/muslitos-vici-250-g.jpg',
        '67b3986a7771087be995d4db':'@/assets/ImageProducts/cocktail-fructe-de-mare-fara-surimi-dayseady.jpg',
        '67b3986a25fc68faeefd782b':'@/assets/ImageProducts/salata-cu-icre-crap-si-ceapa-bonito-exlusiv.jpg',
        '67b3986ab20a5cf21056973f':'@/assets/ImageProducts/icre-de-somon-auchan-50-g.jpg',
        '67b3986abd5d4b575ceddaea':'@/assets/ImageProducts/chipsuri-cu-aroma-de-cascaval-viva-100-g.jpg',
        '67b3986aefb03ee266488e21':'@/assets/ImageProducts/arahide-prajite-nesarate-nutline-300-g.jpg',
        '67b3986aeb92d9546ca454f5':'@/assets/ImageProducts/pufuleti-cu-sare-star-saltareti-80-g.jpg',
        '67b3986a032148dbb46ef106':'@/assets/ImageProducts/nachos-cu-branza-el-sabor-100-g.jpg',
        '67b3986aabb1b43e33e0df71':'@/assets/ImageProducts/popcorn-cu-sare-star-80-g.jpg',
        '67b3986a0b1725af62ea4cc0':'@/assets/ImageProducts/ciocolata-amaruie-cu-alune-intregi-ritter-100-g.jpg',
        '67c6071ea4a56f662d7a833f':'@/assets/ImageProducts/batoane-casali-manner-cu-banane-si-ciocolata-xl-2.jpg',
        '67b3986a969fb6d249fea48b':'@/assets/ImageProducts/ciocolata-alba-cu-capsuni-torras-75-g.jpg',
        '67b3986ae83a2f4f3f2d3b99':'@/assets/ImageProducts/ciocolata-amaruie-kandia-70-80-g.jpg',
        '67b3986a145340afb81a1f20':'@/assets/ImageProducts/ciocolata-cu-umplutura-de-mere-si-capsuni-bob-snai.jpg',

        '67b39b55cbae4f2b8641d66e':'@/assets/ImageProducts/pere.jpg',                          //carrefour



        '67b39b55b956853512f226bd':'@/assets/ImageProducts/fenicul.jpg',




        '67b39b555b43c63f3d9bf2ba':'@/assets/ImageProducts/iaurt-cremos-cu-straciatella-muller-500-g.jpg',
        '67b39b550cff115c5d95f7a2':'@/assets/ImageProducts/aripi-de-pui-fragedo-1-2-kg.jpg',
        '67c6071ec6a2eed987b2daa2':'@/assets/ImageProducts/pipote-de-pui-ograda-moldovana-1-kg.jpg',
        '67b39b553c7ea77704058843':'@/assets/ImageProducts/cocktail-fructe-de-mare-fara-surimi-dayseady.jpg',
        '67b39b5524891ab153bd51de':'@/assets/ImageProducts/chipsuri-cu-smantana-si-ceapa-pringles-40-g.jpg',
        '67b39b559aeeca2c74807da1':'@/assets/ImageProducts/pufuleti-cu-sare-star-saltareti-80-g.jpg',






        '67b39b184a15943f4afb3a55':'@/assets/ImageProducts/lapte-batut-romfulda-900-g.jpg',      //Kaufland

        '67b39b18f6fb9aafc462c8da':'@/assets/ImageProducts/iaurt-cremos-cu-alune-de-padure-muller-500-g.jpg',
        '67b39b18798030faf6432e62':'@/assets/ImageProducts/iaurt-cu-capsuni-bio-napolact-130-g.jpg',
        '67b39b1864df2ec736e2abba':'@/assets/ImageProducts/cocktail-fructe-de-mare-fara-surimi-dayseady.jpg',
        '67b39b18328afe37efe20631':'@/assets/ImageProducts/salata-cu-icre-crap-si-ceapa-bonito-exlusiv.jpg',
        '67b39b183fae374914f0258d':'@/assets/ImageProducts/icre-de-somon-auchan-50-g.jpg',
        '67b39b18dd3f7008b96889a1':'@/assets/ImageProducts/pufuleti-cu-sare-star-saltareti-80-g.jpg',
        '67b39b1866fdf530df1caa76':'@/assets/ImageProducts/popcorn-cu-sare-star-80-g.jpg',
        '67b39b18d17626d4fc7d3ed2':'@/assets/ImageProducts/ciocolata-amaruie-cu-alune-intregi-ritter-100-g.jpg',
        '67b39b1874f7f924a711d98d':'@/assets/ImageProducts/ciocolata-amaruie-kandia-70-80-g.jpg',
        '67b39b1873fb788546754ae0':'@/assets/ImageProducts/ciocolata-cu-umplutura-de-mere-si-capsuni-bob-snai.jpg',



        '67b39b77b418549113de1f70':'@/assets/ImageProducts/aripi-de-pui-fragedo-1-2-kg.jpg',                    //Lidl
        '67c623d774f818b583a31525':'@/assets/ImageProducts/pipote-de-pui-ograda-moldovana-1-kg.jpg',
        '67b39b77128594f9e685036b':'@/assets/ImageProducts/chipsuri-cu-smantana-si-ceapa-pringles-40-g.jpg',















        '67b39b8f3bda6c5184594e06':'@/assets/ImageProducts/aripi-de-pui-fragedo-1-2-kg.jpg',             //Mega Image




        '67b39b8f8e93ba696e95bfe9':'@/assets/ImageProducts/fenicul.jpg',


        '67b39b8f3a20d9575ede03ee':'@/assets/ImageProducts/iaurt-cremos-cu-alune-de-padure-muller-500-g.jpg',
        '67b39b8fdaa4128ba90e4927':'@/assets/ImageProducts/iaurt-cremos-cu-straciatella-muller-500-g.jpg',



        '67b39b8fad16207c29dcf8ce':'@/assets/ImageProducts/aripi-de-pui-fragedo-1-2-kg.jpg',
        '67c623d766cacb8c978b3222':'@/assets/ImageProducts/pipote-de-pui-ograda-moldovana-1-kg.jpg',

        '67b39b8fb860aeb12b466eff':'@/assets/ImageProducts/icre-de-somon-auchan-50-g.jpg',
        '67b39b8fe7968c979789839b':'@/assets/ImageProducts/chipsuri-cu-smantana-si-ceapa-pringles-40-g.jpg',
        '67b39b8fcc6ced63e0c4bb9a':'@/assets/ImageProducts/snack-star-mix-mov-cu-gust-de-de-ardei-chilli-dul.jpg',
        '67b39b8febf0faa85d5d80cb':'@/assets/ImageProducts/pufuleti-cu-sare-star-saltareti-80-g.jpg',

        '67b39b8f60af72bcb491da0e':'@/assets/ImageProducts/popcorn-cu-sare-star-80-g.jpg',

        '67b39b8f5ca26d96d8f819e4':'@/assets/ImageProducts/ciocolata-amaruie-cu-alune-intregi-ritter-100-g.jpg',


        '67b39b8f479074be032a1717':'@/assets/ImageProducts/ciocolata-cu-umplutura-de-mere-si-capsuni-bob-snai.jpg',

        '67b39b55cbae4f2b8641d66e':'@/assets/ImageProducts/pere.jpg',                          //penny



        '67b39b55b956853512f226bd':'@/assets/ImageProducts/fenicul.jpg',

        '67b39bd06743841145ba9dff':'@/assets/ImageProducts/iaurt-cu-capsuni-bio-napolact-130-g.jpg',


        '67b39bd0f86ca6e069cdb7ad':'@/assets/ImageProducts/cocktail-fructe-de-mare-fara-surimi-dayseady.jpg',
        '67b39bd017b4c46d3eccc54e':'@/assets/ImageProducts/salata-cu-icre-crap-si-ceapa-bonito-exlusiv.jpg',
        '67b39bd051bded2f0f397aca':'@/assets/ImageProducts/icre-de-somon-auchan-50-g.jpg',
        '67b39bd014883fceb6f07452':'@/assets/ImageProducts/snack-star-mix-mov-cu-gust-de-de-ardei-chilli-dul.jpg',
        '67b39bd0d24cc4382b0a3902':'@/assets/ImageProducts/pufuleti-cu-sare-star-saltareti-80-g.jpg',
        '67b39bd0ae51bc35d9e5b7c2':'@/assets/ImageProducts/pufuleti-cu-cascaval-star-80-g.jpg',
        '67b39bd094674778baede3be':'@/assets/ImageProducts/popcorn-cu-sare-star-80-g.jpg',


        '67b39bd0fec790fd57ff5d46':'@/assets/ImageProducts/ciocolata-cu-umplutura-de-mere-si-capsuni-bob-snai.jpg',
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

</style>
