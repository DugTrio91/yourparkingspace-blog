import axios from 'axios';
import router from '../../router';

const STORE_POSTS = 'STORE_POSTS';
const SET_ACTIVE_POST = 'SET_ACTIVE_POST';
const CLEAR_ACTIVE_POST = 'CLEAR_ACTIVE_POST';
const SET_POSITION = 'SET_POSITION';
const SET_ERROR = 'SET_ERROR';
const CLEAR_ERROR = 'CLEAR_ERROR';
const NEXT_PAGE = 'NEXT_PAGE';
const PREV_PAGE = 'PREV_PAGE';

const api = 'https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1/Articles';

const state = {
  posts: [],
  page: 1,
  position: 'start',
  limit: 9,
  activePost: null,
  error: false,
};

const actions = {
  getPosts({ commit }, page = state.page) {
    const uri = `${api}?page=${page}&limit=${state.limit}`;

    axios.get(uri).catch(() => {
      commit(SET_ERROR);
    }).then(response => {
      if (response.data.length > 0) {
        commit(STORE_POSTS, response.data);

        if (response.data.length < state.limit) {
          commit(SET_POSITION, 'end');
        } else if (state.page === 1) {
          commit(SET_POSITION, 'start');
        } else {
          commit(SET_POSITION, 'middle');
        }
      }
    });
  },
  getPostById({ commit }, id) {
    const uri = `${api}/${id}`;

    axios.get(uri).catch(() => {
      router.push('/');
    }).then(response => {
      commit(SET_ACTIVE_POST, response.data);
    });
  },
  searchPosts({ commit }, query) {
    const uri = `${api}?search=${query}`;

    axios.get(uri).catch(() => {
      commit(SET_ERROR);
    }).then(response => {
      commit(STORE_POSTS, response.data);
    });
  },
  nextPage({ commit }) {
    commit(NEXT_PAGE);
  },
  prevPage({ commit }) {
    if (state.page >= 1) {
      commit(PREV_PAGE);
    } else {
      commit(SET_POSITION, 'start');
    }
  },
  clearError({ commit }) {
    commit(CLEAR_ERROR);
  },
  clearActivePost({ commit }) {
    commit(CLEAR_ACTIVE_POST);
  },
};

const getters = {
  allPosts: (state) => state.posts,
  getActivePost: (state) => state.activePost,
  getPage: (state) => state.page,
  getPosition: (state) => state.position,
  getError: (state) => state.error,
};

const mutations = {
  [STORE_POSTS](state, payload) {
    state.posts = payload;
  },
  [SET_ACTIVE_POST](state, payload) {
    state.activePost = payload;
  },
  [CLEAR_ACTIVE_POST](state) {
    state.activePost = null;
  },
  [SET_POSITION](state, payload) {
    state.position = payload;
  },
  [SET_ERROR](state) {
    state.error = true;
  },
  [CLEAR_ERROR](state) {
    state.error = false;
  },
  [NEXT_PAGE](state) {
    state.page++;
  },
  [PREV_PAGE](state) {
    state.page--;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
