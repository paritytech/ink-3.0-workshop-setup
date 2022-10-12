import dynamic from 'next/dynamic';
import { useUI } from '../../contexts/UIContext';
import { Button } from '../Button';
import { Entity } from '../Entity';
import { Rules } from './Rules';

const Nav = dynamic(() => import('./Nav').then((mod) => mod.Nav), {
  ssr: false,
});

type Props = {
  children?: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  const { setShowRules } = useUI();

  return (
    <div className="bg-sea bg-cover bg-no-repeat bg-bottom fixed top-0 left-0 right-0 bottom-0 w-full h-screen">
      <Nav />
      <div>
        <Entity
          sway={15}
          alt="plant"
          duration={2000}
          src="/plant-2.svg"
          className="absolute left-[5%] bottom-[-1%] w-[15%] min-w-[150px] hidden md:block"
        />
        <Entity
          sway={10}
          startLeft
          duration={1500}
          alt="plant"
          src="/plant-1.svg"
          className="absolute right-[5%] bottom-0 md:w-[35%] w-[80%] max-w-[500px] min-w-[350px]"
        />
        <Entity
          bob={20}
          alt="fish"
          src="/fish-1.svg"
          className="absolute left-[2%] xl:bottom-[35%] bottom-[15%] w-20"
        />
        <Entity
          bob={20}
          startDown
          alt="Jelly"
          src="/jelly-fish.svg"
          className="absolute right-[3%] xl:top-[34%] top-[15%] md:w-32 w-20"
        />
      </div>
      <Button className="fixed right-3 bottom-3" onClick={() => setShowRules(true)}>
        Rules
      </Button>
      <Rules />
      <div className="">{children}</div>
    </div>
  );
};
