import MessageBox from "@/components/chat/messageBox.vue"
import { mount } from "@vue/test-utils" 
import { Input } from "postcss";


describe('<messageBox.vue />', () => {
    const wrapper = mount(MessageBox);

    test('render input and botton elements correctly', () => {
        

        expect( wrapper.html() ).toMatchSnapshot();

        expect( wrapper.find('input[type="text"]').exists() ).toBe(true);
        expect( wrapper.find('button').exists() ).toBe(true);

        expect( wrapper.find('button svg').exists() ).toBe(true);
    });


    test('Emit sendMessage event when button is clicked with message value', async() => {

        const message = 'Hola mundo'
        
        await wrapper.find('input[type="text"]').setValue(message);
        await wrapper.find('button').trigger('click');

        expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message])

        expect( wrapper.vm.message as any).toBe('');
    });


    test('Emit sendMessage event when key.press.enter is  triggered with message value', async() => {

        const message = 'Hola mundo'

        const input =  wrapper.find('input');
        await input.setValue(message);
        await input.trigger('keypress.enter');

        expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message])
    });

    test('Emit sendMessage event when key.press.enter is  triggered with message value', async() => {
        const wrapper = mount(MessageBox);

        const input =  wrapper.find('input');
        await input.trigger('keypress.enter');
        await wrapper.find('button').trigger('click');

        expect(wrapper.emitted('sendMessage')).toBeFalsy();
    });
})