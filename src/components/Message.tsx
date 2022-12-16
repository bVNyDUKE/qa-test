import { helloWrapper } from '@/utils/helloWrapper';

const Message = ({ text }: { text: string }) => (
  <div className="container mx-auto min-w-[100vw] min-h-[100vh] flex items-center justify-center dark:text-white text-3xl">
    {text}
  </div>
);

export default helloWrapper(Message);
