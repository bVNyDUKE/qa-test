import { Comment, Post, User } from '@/types';
import React, { useEffect, useMemo } from 'react';
import { BASEURL } from './config';

type Action =
  | { type: 'LOADING' }
  | { type: 'UPDATE'; payload: State }
  | { type: 'ERROR'; payload: string }
  | { type: 'SET_FILTER'; payload: string };
type Dispatch = (action: Action) => void;
type State = {
  posts: Post[];
  filteredPosts: Post[];
  users: User[];
  comments: Comment[];
  filter: string;
  loading: boolean;
  initDone: boolean;
  error: string;
};

const PostsContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const postsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'LOADING': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'UPDATE': {
      return {
        ...action.payload,
      };
    }
    case 'ERROR': {
      return {
        ...state,
        error: action.payload,
      };
    }
    case 'SET_FILTER': {
      if (!action.payload) {
        return {
          ...state,
          filteredPosts: state.posts,
        };
      }
      const user = state.users
        .filter((u) =>
          u.username.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()),
        )
        ?.at(0);

      if (!user) {
        return {
          ...state,
        };
      }

      return {
        ...state,
        filter: action.payload,
        filteredPosts: state.posts.filter((p) => p.userId === user.id),
      };
    }
    default: {
      throw new Error('Undefined action type');
    }
  }
};

const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(postsReducer, {
    posts: [],
    filteredPosts: [],
    filter: '',
    comments: [],
    users: [],
    loading: false,
    initDone: false,
    error: '',
  });

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
};

const usePosts = () => {
  const context = React.useContext(PostsContext);

  if (context === undefined) {
    throw new Error('usePosts must have a valid Posts Context');
  }

  useEffect(() => {
    if (!context.state.initDone) {
      initStore(context.dispatch);
    }
  }, [context.state.initDone, context.dispatch]);

  return context;
};

const initStore = async (dispatch: Dispatch) => {
  dispatch({ type: 'LOADING' });
  try {
    const [posts, comments, users] = await Promise.all([
      fetch(`${BASEURL}/posts`).then((r) => r.json()),
      fetch(`${BASEURL}/comments`).then((r) => r.json()),
      fetch(`${BASEURL}/users`).then((r) => r.json()),
    ]);
    dispatch({
      type: 'UPDATE',
      payload: {
        posts: posts as Post[],
        users: users as User[],
        filteredPosts: posts as Post[],
        comments: comments as Comment[],
        loading: false,
        filter: '',
        initDone: true,
        error: '',
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      dispatch({ type: 'ERROR', payload: error.message });
    } else {
      console.error(error);
    }
  }
};

export { PostsProvider, usePosts, initStore };
