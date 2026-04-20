'use client';
import { ExpandableCard} from "./ui/expandable-card";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from 'next/image';

export default function Unhcr() {
    return (
        <div className="relative h-full w-full flex flex-col lg:flex-row lg:justify-between items-center lg:items-start p-10 z-10">

            <div className="relative lg:min-h-[650px] w-full max-w-[275px] items-center flex flex-col justify-start mx-10 mt-20 mb-8 lg:mb-0">
                <div className="flex flex-col items-center">
                    <Image
                        src="/images/un_emblem.png"
                        alt="UN Emblem"
                        width={200}
                        height={200}
                    />
                    <h2 className="mono-label text-lg font-semibold mt-4">UNHCR</h2>
                </div>
                <div className="mt-5 mb-5 lg:mt-20 text-center md:text-left">
                    <h2 className="mono-label text-lg font-semibold mt-8 mb-4">Agenda</h2>
                    <p>
                    Topic 1:<br /> Strategies to enhance refugees’ employment, shelter, safety, education, and social integration. <br /><br />
                    Topic 2:<br /> Strategies to prevent refugee involvement in crime and exploitation through protection and livelihood opportunities.
                    </p>
                </div>
            </div>
            <div className="w-full h-full items-center px-4 flex flex-col justify-center mb-8 lg:mb-0">
                <h1 className="mono-label text-lg font-semibold mb-8">Background Guide</h1>
                <iframe src="https://drive.google.com/file/d/1Pi2Xi24mT_3yUTEgeADNNrsGQ78IOqld/preview" className="w-full min-w-[300px] max-w-[500px] h-full min-h-[700px]" />

                <div className="flex justify-center text-center mt-10">
                    <a href="/bg-guide/UNHCR-BG-V2.pdf" download>
                    <HoverBorderGradient
                        className="mono-label text-sm 2xl:text-xl"
                    >
                        <span style={{ whiteSpace: 'nowrap' }}>Download Background Guide</span>
                    </HoverBorderGradient>
                    </a>
                </div>
            </div>
            <div className="min-h-[650px] w-full max-w-[200px] items-center flex flex-col justify-between mx-10">
                <h2 className="mono-label text-lg font-semibold mb-8">Executive Board</h2>
                    <ExpandableCard
                        name="Aparajith.S"
                        title="Chairperson"
                        description="Chairperson: UNHCR"
                        src="/images/team_members/unhcr-chair.webp"
                    />
                    <ExpandableCard
                        name="Nikitha"
                        title="Vice-Chairperson"
                        description="Vice-Chairperson: UNHCR"
                        src="/images/team_members/unhcr-vice-chair-p1.webp"
                    />
                    <ExpandableCard
                        name="Rhashmitha R"
                        title="Vice-Chairperson"
                        description="Vice-Chairperson: UNHCR"
                        src="/images/team_members/unhcr-vice-chair-p2.webp"
                    />
            </div>
        </div>
    );
}
