import { shallowMount } from '@vue/test-utils';

import Posts from '@/components/Posts.vue';

const posts = [
  {
    createdAt: '2021-09-15T06:24:01.017Z',
    author: 'Bessie Herman',
    image: 'http://placeimg.com/640/480',
    title: 'voluptatem qui quia',
    intro: 'Qui ea et ut ex. Ut ut voluptatem dolores.',
    text: 'Quibusdam eum rem est quaerat consectetur molestiae beatae.',
    id: '1',
  },
  {
    createdAt: '2021-09-15T06:24:01.017Z',
    author: 'Bessie Herman',
    image: 'http://placeimg.com/640/480',
    title: 'voluptatem qui quia',
    intro: 'Qui ea et ut ex. Ut ut voluptatem dolores.',
    text: 'Quibusdam eum rem est quaerat consectetur molestiae beatae.',
    id: '2',
  },
  {
    createdAt: '2021-09-15T06:24:01.017Z',
    author: 'Bessie Herman',
    image: 'http://placeimg.com/640/480',
    title: 'voluptatem qui quia',
    intro: 'Qui ea et ut ex. Ut ut voluptatem dolores.',
    text: 'Quibusdam eum rem est quaerat consectetur molestiae beatae.',
    id: '3',
  },
];

describe('Post.vue', () => {
  it('renders the posts component', () => {
    const wrapper = shallowMount(Posts, {
      propsData: {
        posts,
      },
      stubs: ['router-link'],
    });

    expect(wrapper.exists()).toBe(true);
  });

  it('should render a container for each post', () => {
    const wrapper = shallowMount(Posts, {
      propsData: {
        posts,
      },
      stubs: ['router-link'],
    });
    const elements = wrapper.findAll('.posts__post');

    expect(elements.length).toBe(3);
  });
});
