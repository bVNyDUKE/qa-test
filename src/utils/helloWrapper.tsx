import { useHello } from '@/hooks';
import { HELLO_MSG } from '@/config';

export const helloWrapper =
  <P,>(Component: React.ComponentType<P>) =>
  (props: P & { msg?: string }) => {
    useHello(`${props.msg || HELLO_MSG}${Component.name}`);
    return <Component {...props} />;
  };
