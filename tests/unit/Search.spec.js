import { shallowMount } from '@vue/test-utils';
import Search from '@/components/Search.vue';

describe('Search.vue', () => {
  it('renders the search component', () => {
    const wrapper = shallowMount(Search);

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('should emit an event when clicked', async() => {
    const wrapper = shallowMount(Search);
    const input = wrapper.find('input');

    input.value = 'Generic search term';
    wrapper.emitted('search');

    expect(input.value).toBe('Generic search term');
    expect(wrapper.emitted()).toBeTruthy();
  });
});
