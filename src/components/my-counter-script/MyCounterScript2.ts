import { useCounter } from '@/composables/useCounter';
import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
    }
  },
  setup(props) {

    const {counter, squareCounter} = useCounter(props.value)
    // const counter = ref(props.value);
    // const squareCounter = computed(() => counter.value * counter.value);

    // Aquí se pueden renombar los componentes
    return {
      counter,
      squareCounter,
    };
  },
});