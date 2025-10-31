'use client';
import { ExpandableCard} from "./ui/expandable-card";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from 'next/image';

export default function Unsc() {
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
                    <h2 className="mono-label text-lg font-semibold mt-4">UNSC</h2>
                </div>
                <div className="mt-5 mb-5 lg:mt-20 text-center md:text-left">
                    <h2 className="mono-label text-lg font-semibold mt-8 mb-4">Agenda</h2>
                    <p>
                    Topic 1:<br /> Regulation of Autonomous Weapons and Artificial Intelligence in Warfare <br /><br />
                    Topic 2:<br /> Resolution of the Ongoing Conflict and Humanitarian Crisis in Ukraine
                    </p>
                </div>
            </div>
            <div className="w-full h-full items-center px-4 flex flex-col justify-center mb-8 lg:mb-0">
                <h1 className="mono-label text-lg font-semibold mb-8">Background Guide</h1>
                <iframe src="https://drive.google.com/file/d/1vU-jQJt0wc2TcX8CT_3Yuvv317zOHXw7/preview" className="w-full min-w-[300px] max-w-[500px] h-full min-h-[700px]" />

                <div className="flex justify-center text-center mt-10">
                    <a href="/bg-guide/UNSC-BG-V2.pdf" download>
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
                        name="Alven Aloysius"
                        title="Chairperson"
                        description="Chairperson: UNSC"
                        src="/images/team_members/unsc-chair.webp"
                    />
                    <ExpandableCard
                        name="Kishore E"
                        title="Vice-Chairperson"
                        description="Vice-Chairperson: UNSC"
                        src="/images/team_members/unsc-vice-chair-p1.webp"
                    />
                    <ExpandableCard
                        name="Santhosh Bezaleel"
                        title="Vice-Chairperson"
                        description="Vice-Chairperson: UNSC"
                        src="/images/team_members/unsc-vice-chair-p2.webp"
                    />
            </div>
        </div>
    );
}
