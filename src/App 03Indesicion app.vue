<template>
  <h1 className="text-3xl font-bold underline">Hello world!</h1>
  <hr />
  <!-- Esos 2 puntos significan v-bind:value="5" donde el valor pasado es value -->
  <MyCounter :value="1" text="Hola" />
  <MyCounterScript :value="2" text="Hola" />
  <MyCounterScript2 :value="3" text="Hola" />
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
</script>
