import Hero from '@/components/hero';
import Unesco from '@/components/unesco';
import Disec from '@/components/disec';
import Unhcr from '@/components/unhcr';
import Unsc from '@/components/unsc';
import Unoosa from '@/components/unoosa';
import Unodc from '@/components/unodc';
import Ecosoc from '@/components/ecosoc';

export interface PageDeciderProps {
    renderPage: 'hero' | 'who' | 'unsc' | 'ecosoc' | 'disec' | 'unhrc' | 'tnla' | 'g20';
}

const renderedPage = (renderPage: string) => {
    switch (renderPage) {
        case 'who':
            return <who />;
        case 'unsc':
            return <unsc />;
        case 'ecosoc':
            return <ecosoc />;
        case 'disec':
            return <disec />;
        case 'unhrc':
            return <unhrc />;
        case 'tnla':
            return <tnla />;
        case 'g20':
            return <g20 />;
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
