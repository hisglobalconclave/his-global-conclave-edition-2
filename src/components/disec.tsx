'use client';
import { ExpandableCard} from "./ui/expandable-card";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
  

export default function Disec() {
    return (
        <div className="relative h-full w-full flex flex-col md:flex-row md:justify-between items-center md:items-start p-10 z-10">

            <div className="relative md:min-h-[650px] w-full max-w-[275px] items-center flex flex-col justify-between mx-10 mt-20 mb-8 md:mb-0">
                <ExpandableCard
                    title="DISEC"
                    description="Disarmament and International Security Committee"
                    src="/his-global-conclave-edition-2/images/un_emblem.png"
                    ctaText="Visit"
                    ctaLink="https://example.com"
                    content={() => (
                    <p>
                        This is custom content. You can return JSX from a function or pass any React node.
                    </p>
                    )}/>

                <div>
                    <h2 className="mono-label text-lg font-semibold mt-8 mb-4">About DISEC</h2>
                    <p className="text-justify">The Disarmament and International Security Committee (DISEC) is the First Committee of the United Nations General Assembly. It is primarily responsible for addressing issues related to disarmament, global challenges, and threats to international peace and security. DISEC plays a crucial role in promoting disarmament efforts, preventing the proliferation of weapons, and fostering international cooperation to enhance global security </p>
                </div>
            </div>
            <div className="w-full h-full items-center px-4 flex flex-col justify-center mb-8 md:mb-0">
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
                        description="Disarmament and International Security Committee"
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
                        description="Disarmament and International Security Committee"
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
                        description="Disarmament and International Security Committee"
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