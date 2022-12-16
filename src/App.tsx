import { helloWrapper } from '@/utils/helloWrapper';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { PostsProvider } from '@/store';
import PostsListPage from '@/pages/PostListPage';
import PostPage from '@/pages/PostPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Layout>
      <PostsProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsListPage />} />
          <Route path="/posts/:postId" element={<PostPage />} />
        </Routes>
      </PostsProvider>
    </Layout>
  );
}

export default helloWrapper(App);
