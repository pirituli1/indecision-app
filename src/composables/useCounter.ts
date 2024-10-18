    import {ref, computed } from 'vue';

export const useCounter = (initialValue: number = 5) => {

    const counter = ref(initialValue);


    return  {
        counter,

        // readOnly
        squareCounter: computed(()=> counter.value * counter.value)

    }
}