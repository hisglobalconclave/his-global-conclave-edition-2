import Hero from '@/components/hero';
import Uneso from '@/components/uneso';
import Disec from '@/components/disec';
import Unhcr from '@/components/unhcr';
import Unsc from '@/components/unsc';
import Unoosa from '@/components/unoosa';
import Unodc from '@/components/unodc';

export interface PageDeciderProps {
    page: 'hero' | 'uneso' | 'unhcr' | 'unodc' | 'unsc' | 'unoosa' | 'disec';
}

const renderedPage = (page: string) => {
    switch (page) {
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
        case 'uneso':
            return <Uneso />;
        case 'hero':
            return <Hero />;
        default:
            return <Hero />;
    }
}


export default function PageDecider({ page }: PageDeciderProps) {
  return (
    <>
      {
        renderedPage(page)
      }
    </>
  );
}