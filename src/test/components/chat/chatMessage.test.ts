import chatMessage from "@/components/chat/chatMessage.vue"
import type { ChatMessage } from "@/interfaces/chat-message.interface"
import { mount } from "@vue/test-utils"


    const messages: ChatMessage[] = [
        { id:1, message: 'hola', itsMine:true},
        { id:2, message: 'hola2', itsMine:false, image: 'http://hola-mundo.jpg'},
    ]

describe('<ChatMessage />', ()=> {
    const wrapper = mount(chatMessage, {
        props: { messages }
    });

    test('render chat mesagges correctly',() => {



        const chatBubbles = wrapper.findAllComponents({ name: 'ChatBubble'});

        expect(chatBubbles.length).toBe(messages.length);
    });


    test('scrolls down to the buttom after messages update',async () => {

        
        const scrollToMock = vi.fn();


        const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement;
        chatRef.scrollTo = scrollToMock;

        
        await wrapper.setProps({
            messages:  [...messages, { id:3, messages: 'any', itsMine:true }]
        });



        await new Promise( (r) => setTimeout(r,150) ) 


        expect(scrollToMock).toHaveBeenCalled()

    });
})