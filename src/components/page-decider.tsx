import Hero from '@/components/hero';
import Unesco from '@/components/unesco';
import Disec from '@/components/disec';
import Unhcr from '@/components/unhcr';
import Unsc from '@/components/unsc';
import Unoosa from '@/components/unoosa';
import Unodc from '@/components/unodc';
import Ecosoc from '@/components/ecosoc';

export interface PageDeciderProps {
    renderPage: 'hero' | 'unesco' | 'unhcr' | 'unodc' | 'unsc' | 'unoosa' | 'disec' | 'ecosoc';
}

const renderedPage = (renderPage: string) => {
    switch (renderPage) {
        case 'unhcr':
            return <Unhcr />;
        case 'unodc':
            return <Unodc />;
        case 'unsc':
            return <Unsc />;
        case 'unoosa':
            return <Unoosa />;
        case 'disec':
            return <Disec />;
        case 'unesco':
            return <Unesco />;
        case 'ecosoc':
            return <Ecosoc />;
        case 'hero':
            return <Hero />;
        default:
            return <Hero />;
    }
}


export default function PageDecider({ renderPage }: PageDeciderProps) {
  return (
    <>
      {
        renderedPage(renderPage)
      }
    </>
  );
}