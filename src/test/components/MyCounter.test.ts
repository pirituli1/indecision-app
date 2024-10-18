import MyCounter from '@/components/MyCounter.vue';
import { mount } from '@vue/test-utils';

describe('<MyCounterr />', () => {

  // Revisa que el snapshot sea correcto
  test('Should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
      },
    });
    
    expect(wrapper.html()).toMatchSnapshot();
  });
  
  // 
  test('render the counter value correctly', () => {

    const value = 10;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });
    
    
    const [counterLabel, squareLabel] = wrapper.findAll('h3');
    
    expect( counterLabel.text() ).toContain(`Counter: ${ value }`);
    expect( squareLabel.text() ).toContain(`Square: ${ value * value }`);
       
    // console.log(wrapper.html())
  })


  test('increment the counter when +1 button is clicked', async () => {

    const value = 6;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });
    const [counterLabel, squareLabel] = wrapper.findAll('h3');

    const btnIncrement = wrapper.find('button');
    await btnIncrement.trigger('click');
    
    expect( counterLabel.text() ).toContain(`Counter: ${ value + 1}`);
    expect( squareLabel.text() ).toContain(`Square: ${ ( value + 1 ) * ( value + 1) }`);
  });


  test('Decrement the counter when -1 button is clicked twice', async() => {

    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });
    const [counterLabel, squareLabel] = wrapper.findAll('h3');

    const [,btnDecrement] = wrapper.findAll('button');
    await btnDecrement.trigger('click');
    await btnDecrement.trigger('click');
    
    expect( counterLabel.text() ).toContain(`Counter: ${ value - 2}`);
    expect( squareLabel.text() ).toContain(`Square: ${ ( value - 2 ) * ( value - 2 ) }`);


  })
});
