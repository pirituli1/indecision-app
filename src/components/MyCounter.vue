<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3 data-testid="square-label">Square: {{ squareCounter }}</h3>

    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '../composables/useCounter';
interface Props {
  value: number;
}
const props = defineProps<Props>();

const { counter, squareCounter } = useCounter(props.value);
// import { computed, ref } from 'vue';
// // ! Se usa lang para definir el idioma y el setup es un acortador

// // Primera forma de recibir los props (solo js sin TS)
// // const props = defineProps({
// //   value: {type: Number, required: true},
// // });

// // Aquí la segunda forma.
// // const props = defineProps<{
// //   value:number;
// // }>()

// // Tercer forma agregando un interface y haciendo más corta la forma de recibirlo

// // aquí con ts le decimos que si el valor no es recibido o es undefined se ponga como 0
// const counter = ref(props.value ?? 0);
// const squareCounter = computed(() => counter.value * counter.value);
</script>

<style scoped>
.btn {
  @apply p-5 bg-blue-500 rounded mr-2 hover:bg-blue-700;
}
</style>
