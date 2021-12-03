import { shallowMount } from '@vue/test-utils';

import Post from '@/components/Post.vue';

const post = {
  createdAt: '2021-09-15T06:24:01.017Z',
  author: 'Bessie Herman',
  image: 'http://placeimg.com/640/480',
  title: 'voluptatem qui quia',
  intro: 'Qui ea et ut ex. Ut ut voluptatem dolores.',
  text: 'Quibusdam eum rem est quaerat consectetur molestiae beatae.',
  id: '1',
};

describe('Post.vue', () => {
  it('renders the post component', () => {
    const wrapper = shallowMount(Post, {
      propsData: {
        post,
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it('contain details with formatted date', () => {
    const wrapper = shallowMount(Post, {
      propsData: {
        post,
      },
    });
    const el = wrapper.find('.post__header-details-info');

    expect(el.text()).toContain('15/09/2021');
    expect(el.text()).not.toContain('2021-09-15T06:24:01.017Z');
  });
});
