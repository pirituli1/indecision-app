import { useChat } from "@/composables/useChat";

(global as any).fetch = vi.fn(async () => ({
    json: async () => ({ answer: 'yes', image: 'example.gif' })
  }));
  
describe('Use chat', ()=>{

    test('add message correctly when onMessage is called', async() => {
        
        const txt = 'Hola mundo';
        const { messages, onMessage } = useChat();

        await onMessage(txt);

        expect( messages.value.length ).toBe(1);
        expect( messages.value[0].itsMine ).toBe(true);
        expect( messages.value[0].message ).toBe(txt);
        expect( messages.value[0] ).toEqual({
            id: expect.any(Number),
            itsMine: true,
            message: txt
        });
        
    });
    
    
    test('add nothing if text is empty', async() => {
        
        const txt = '';
        const { messages, onMessage } = useChat();
        
        await onMessage(txt);
        
        expect( messages.value.length ).toBe(0);
    });
    
    test('Gets her responsec correctly when message ends with "?', async() => {
        
        const txt = 'Quieres café?';
        const { messages, onMessage } = useChat();
        
        await onMessage(txt);

        await new Promise((r) => setTimeout(r, 2000)); 

        const [myMessage, herMessage] = messages.value;

        expect(messages.value.length).toBe(2);
        expect( herMessage.itsMine ).toBe(false);
        expect(herMessage).toEqual( {
            id: expect.any(Number),
            itsMine: false,
            message: expect.any(String),
            image: expect.any(String)
        });

        expect(myMessage).toEqual({
            id: expect.any(Number),
            itsMine: true,
            message: txt
        })
    });


    test('mpck response - fetch api', async() => {

        const mockResponse = { answer: 'yes', image: 'example.gif'};
        
        // ( window as any).fetch = vi.fn( async()=> ({
        //     json: async() => mockResponse
        // }));

        const txt = 'Quieres café?';
        const { messages, onMessage } = useChat();
        
        await onMessage(txt);

        await new Promise((r) => setTimeout(r, 2000)); 

        const [, herMessage] = messages.value;

        expect ( herMessage ).toEqual({
            id: expect.any(Number),
            image: mockResponse.image,
            itsMine: false,
            message: mockResponse.answer,
        });

    });

})