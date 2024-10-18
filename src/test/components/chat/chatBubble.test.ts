import ChatBubble from '@/components/chat/chatBubble.vue';
import { mount } from '@vue/test-utils';

describe('<ChatBubble />', () => {
  test('renders own message correctly', () => {
    const message = 'Hola mundo';
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: true },
    });

    // Dos maneras de hacerlo
    expect(wrapper.find('.bg-blue-200').exists()).toBe(true);

    expect(wrapper.find('.bg-blue-200').exists()).toBeTruthy();

    //
    expect(wrapper.find('.bg-blue-200').text()).toContain(message);

    expect(wrapper.find('.bg-gray-300').exists()).toBeFalsy();
  });

  test('renders receive message correctly', () => {
    const message = 'Hola mundo';
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: false },
    });

    // Dos maneras de hacerlo
    expect(wrapper.find('.bg-gray-300').exists()).toBe(true);

    expect(wrapper.find('.bg-blue-200').exists()).toBe(false);

    //
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);


    // revisar la imagen
    expect(wrapper.find('img').exists()).toBe(false);
  });

  test('renders receive message correctly with image', () => {
    const message = 'Hola mundo';
    const image = 'example.jpg'
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: false, image },
    });

    // Dos maneras de hacerlo
    expect(wrapper.find('.bg-gray-300').exists()).toBe(true);
    expect(wrapper.find('.bg-blue-200').exists()).toBe(false);

    //
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);


    // revisar la imagen
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('img').attributes('src')).toBe(image);
  });

});
