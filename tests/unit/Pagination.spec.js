import { shallowMount } from '@vue/test-utils';
import Pagination from '@/components/Pagination.vue';

describe('Pagination.vue', () => {
  it('renders the Pagination component', () => {
    const wrapper = shallowMount(Pagination, {
      propsData: {
        position: 'middle',
      },
    });

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.findAll('button')).toHaveLength(2);
  });

  it('should not be disabled if position is middle', () => {
    const wrapper = shallowMount(Pagination, {
      propsData: {
        position: 'middle',
      },
    });
    const prev = '#buttonPrev';
    const next = '#buttonNext';

    expect(wrapper.find(prev).attributes().disabled).toBe(undefined);
    expect(wrapper.find(next).attributes().disabled).toBe(undefined);
  });

  it('should disabled prev if position is middle', () => {
    const wrapper = shallowMount(Pagination, {
      propsData: {
        position: 'start',
      },
    });
    const prev = '#buttonPrev';
    const next = '#buttonNext';

    expect(wrapper.find(prev).attributes().disabled).toBe('disabled');
    expect(wrapper.find(next).attributes().disabled).toBe(undefined);
  });

  it('should disabled next if position is middle', () => {
    const wrapper = shallowMount(Pagination, {
      propsData: {
        position: 'end',
      },
    });
    const prev = '#buttonPrev';
    const next = '#buttonNext';

    expect(wrapper.find(prev).attributes().disabled).toBe(undefined);
    expect(wrapper.find(next).attributes().disabled).toBe('disabled');
  });

  it('should emit an event when clicked', async() => {
    const wrapper = shallowMount(Pagination, {
      propsData: {
        position: 'middle',
      },
    });

    await wrapper.find('#buttonPrev').trigger('click');

    const events = wrapper.emitted('change-page');

    expect(events.length).toBe(1);
    expect(events[0]).toStrictEqual(['prev']);
  });
});
