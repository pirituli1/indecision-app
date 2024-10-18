<template>
    <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
      <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
        <span>Chat IA</span>
      </div>

     <!-- Chat messages -->
      <chatMessage :messages="messages"/>

      <!--Aquí se manda el evento a la función pero como el send-message ya está emitiendo un mensaje, se puede acortar y solo llamar la función -->
      <!-- <messageBox @send-message="onMessage($event)"/> -->
      <messageBox @send-message="onMessage"/>
      
      
    </div>
  </template>

<script setup lang="ts">
  import chatMessage from '@/components/chat/chatMessage.vue';
  import messageBox from '@/components/chat/messageBox.vue';
import { useChat } from '@/composables/useChat';


  const {messages, onMessage} = useChat();

</script>