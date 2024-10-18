import { sleep } from '@/helpers/sleep';
import type{ ChatMessage } from '@/interfaces/chat-message.interface';
import type { YesNoRespons } from '@/interfaces/yes-no.response';
import { ref } from 'vue';
import { txt } from '@/components/config/textos'

export const  useChat = () => {
    const messages = ref<ChatMessage[]>([
      {id: new Date().getTime(),
        itsMine: false,
        message: txt.mensajeBienvenida,
      }
    ]);
    
    const getHerResponse = async() => {
        const resp = await fetch('https://yesno.wtf/api');
        const data = (await resp.json()) as YesNoRespons;

        return data;
    }




    const onMessage = async(text: string) => {
    if ( text.length === 0) return;


      messages.value.push({
        id: new Date().getTime(),
        itsMine: true,
        message: text
      });

      // Evaluar si termina con un simbolo de ?
      if (!text.endsWith('?'))return;


      await sleep(0.5);
      const {answer, image} = await getHerResponse();

      messages.value.push({
        id: new Date().getTime(),
        itsMine: false,
        message: answer || '',
        image: image
    })};

    return {
        // Properties 
        messages,

        // Methods
        onMessage
    }
}