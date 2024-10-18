import { mount } from '@vue/test-utils';
import indecisionView from '@/views/indecisionView.vue';
import ChatMessage from '@/components/chat/chatMessage.vue';
import MessageBox from '@/components/chat/messageBox.vue';


const mockChatMessages = {
    template: '<div> data-testid="mock-messages">Mock ChatMessages</div>'
}

describe('<IndecisionView />', () => {

    test('renders chat messages and message box correctly', () => {
        const wraper = mount( indecisionView );
        
        expect(wraper.html()).toMatchSnapshot();
        
        expect( wraper.findComponent( ChatMessage ).exists() ).toBe( true );
        expect( wraper.findComponent( MessageBox ).exists() ).toBe( true );
    });
    
    test('calls onMessage when sending a message', async() => {
        
        const wraper = mount( indecisionView , {
            global: {
                stubs: {
                    ChatMessage: mockChatMessages
                }
            }
        });

        //simular evento personalizado
        const messageBoxComponent = wraper.findComponent( MessageBox );

        messageBoxComponent.vm.$emit('sendMessage', 'Hola mundo');

        await new Promise( r => setTimeout( r, 150 ) )

        expect( wraper.html() ).toMatchSnapshot()
    });


})