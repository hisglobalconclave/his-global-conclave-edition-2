'use client';
import { ExpandableCard} from "./ui/expandable-card";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from 'next/image';

export default function Unesco() {
    return (
        <div className="relative h-full w-full flex flex-col lg:flex-row lg:justify-between items-center lg:items-start p-10 z-10">

            <div className="relative lg:min-h-[650px] w-full max-w-[275px] items-center flex flex-col justify-start mx-10 mt-20 mb-8 lg:mb-0">
                <div className="flex flex-col items-center">
                    <Image
                        src="/his-global-conclave-edition-2/images/un_emblem.png"
                        alt="UN Emblem"
                        width={200}
                        height={200}
                    />
                    <h2 className="mono-label text-lg font-semibold mt-4">UNESCO</h2>
                </div>
                <div className="mt-5 mb-5 lg:mt-20 text-center md:text-left">
                    <h2 className="mono-label text-lg font-semibold mt-8 mb-4">Agenda</h2>
                    <p>
                    Topic 1:<br /> From Readiness Assessment to Enhanced Institutional, Technical, and Human Capacities on AI <br /><br />
                    Topic 2:<br /> Rethinking Corporate Responsibility in the Age of AI, Powered by UNESCO Business Council for Ethics of AI
                    </p>
                </div>
            </div>
            <div className="w-full h-full items-center px-4 flex flex-col justify-center mb-8 lg:mb-0">
                <h1 className="mono-label text-lg font-semibold mb-8">Background Guide</h1>
                <iframe src="https://drive.google.com/file/d/1uMVlV_41NPIMUWJJFDMqvjsylvCCQRhK/preview" className="w-full min-w-[300px] max-w-[500px] h-full min-h-[700px]" />

                <div className="flex justify-center text-center mt-10">
                    <HoverBorderGradient
                        className="mono-label text-sm 2xl:text-xl"
                        onClick={() => window.open("https://forms.gle/Vcmu4Wq2qEURGejk6", "_blank")}
                    >
                        <span style={{ whiteSpace: 'nowrap' }}>Download Background Guide</span>
                    </HoverBorderGradient>
                </div>
            </div>
            <div className="min-h-[650px] w-full max-w-[200px] items-center flex flex-col justify-between mx-10">
                <h2 className="mono-label text-lg font-semibold mb-8">Executive Board</h2>
                    <ExpandableCard
                        title="Chair"
                        description="United Nations Educational, Scientific and Cultural Organization Committee"
                        src="/his-global-conclave-edition-2/images/team_members/bhuvanaesh_r.jpg"
                        ctaText="Visit"
                        ctaLink="https://example.com"
                        content={() => (
                        <p>
                            This is custom content. You can return JSX from a function or pass any React node.
                        </p>
                        )}
                    />
                    <ExpandableCard
                        title="Vice-Chair"
                        description="United Nations Educational, Scientific and Cultural Organization Committee"
                        src="/his-global-conclave-edition-2/images/team_members/bhuvanaesh_r.jpg"
                        ctaText="Visit"
                        ctaLink="https://example.com"
                        content={() => (
                        <p>
                            This is custom content. You can return JSX from a function or pass any React node.
                        </p>
                        )}
                    />
                    <ExpandableCard
                        title="Vice-Chair"
                        description="United Nations Educational, Scientific and Cultural Organization Committee"
                        src="/his-global-conclave-edition-2/images/team_members/bhuvanaesh_r.jpg"
                        ctaText="Visit"
                        ctaLink="https://example.com"
                        content={() => (
                        <p>
                            This is custom content. You can return JSX from a function or pass any React node.
                        </p>
                        )}
                    />
            </div>
        </div>
    );
}