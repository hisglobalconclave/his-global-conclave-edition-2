import Hero from '@/components/hero';
import who from '@/components/unesco';
import unsc from '@/components/disec';
import ecosoc from '@/components/unhcr';
import disec from '@/components/unsc';
import unhrc from '@/components/unoosa';
import tnla from '@/components/unodc';
import g20 from '@/components/ecosoc';

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
