<template>
  <LayoutMain>
   <router-view>

   </router-view>
  </LayoutMain>
  </template>
  <script>
 import LayoutMain from '@/components/LayoutMain.vue';
//  import LangSwitch from './LangSwitch.vue';
 export default{
   name:'App',
   components:{
     LayoutMain,
    //  LangSwitch
   }
 }
  </script>
   <style scoped>
    </style>
