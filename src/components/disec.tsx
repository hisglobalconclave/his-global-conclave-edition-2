'use client';
import { ExpandableCard} from "./ui/expandable-card";
  

export default function Disec() {
    return (
        <div className="h-full w-full flex flex-col md:flex-row md:justify-between items-center md:items-start">

            <div className="md:min-h-[650px] w-full max-w-[200px] items-center flex flex-col justify-center md:justify-between">
                <ExpandableCard
                    title="DISEC"
                    description="Disarmament and International Security Committee"
                    src="https://assets.aceternity.com/demos/lana-del-rey.jpeg"
                    ctaText="Visit"
                    ctaLink="https://example.com"
                    content={() => (
                    <p>
                        This is custom content. You can return JSX from a function or pass any React node.
                    </p>
                    )}
                />
            </div>
            <div className="w-full h-full items-center px-4 flex flex-col justify-center mb-8 md:mb-0">
                <h1 className="text-lg font-semibold mb-8">Background Guide</h1>
                <iframe src="https://drive.google.com/file/d/1uMVlV_41NPIMUWJJFDMqvjsylvCCQRhK/preview" className="w-full min-w-[300px] max-w-[500px] h-full min-h-[600px]" />
            </div>
            <div className="min-h-[650px] w-full max-w-[200px] items-center flex flex-col justify-between">
                <h2 className="text-lg font-semibold mb-8">Executive Board</h2>
                    <ExpandableCard
                        title="Person 1"
                        description="Disarmament and International Security Committee"
                        src="https://assets.aceternity.com/demos/lana-del-rey.jpeg"
                        ctaText="Visit"
                        ctaLink="https://example.com"
                        content={() => (
                        <p>
                            This is custom content. You can return JSX from a function or pass any React node.
                        </p>
                        )}
                    />
                    <ExpandableCard
                        title="DISEC"
                        description="Disarmament and International Security Committee"
                        src="https://assets.aceternity.com/demos/lana-del-rey.jpeg"
                        ctaText="Visit"
                        ctaLink="https://example.com"
                        content={() => (
                        <p>
                            This is custom content. You can return JSX from a function or pass any React node.
                        </p>
                        )}
                    />
                    <ExpandableCard
                        title="DISEC"
                        description="Disarmament and International Security Committee"
                        src="https://assets.aceternity.com/demos/lana-del-rey.jpeg"
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