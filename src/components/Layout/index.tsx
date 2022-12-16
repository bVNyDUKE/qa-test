import { helloWrapper } from '@/utils/helloWrapper';
import NavBar from '@/components/NavBar';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <main className="m-auto bg-grey-955 dark:bg-blue-955 min-h-screen transition-colors ease-in-out duration-1000">
    <NavBar />
    {children}
  </main>
);

export default helloWrapper(Layout);
