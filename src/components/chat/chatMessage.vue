<template> 

 <!-- *Chat message BOX -->
 <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">

         <chatBubble 
         v-for="message in messages"
         :key="message.id" 
         v-bind="message"
         />
         <!-- :its-mine="message.itsMine"
         :message="message.message"
         :image="message.image" -->
         


        </div>
      </div>
      <!-- *Chat message box -->

</template>

<script setup lang="ts">  
  import chatBubble from '@/components/chat/chatBubble.vue';
  import {ref,watch } from 'vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
  

interface Props {
    messages: ChatMessage[];
  }


  const props = defineProps<Props>();

  const chatRef= ref<HTMLDivElement|null>(null);

  watch( props, () => {
    setTimeout(() => {
      chatRef.value?.scrollTo({
        top:chatRef.value.scrollHeight,
        behavior: 'smooth'
      })
 
    }, 100);


  })

</script>