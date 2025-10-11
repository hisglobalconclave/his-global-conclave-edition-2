'use client';
import CommiteeGroup from "@/components/ui/commitee-group";
import CardFlip from "./ui/card-flip";

export default function Disec() {
    return (
        <div className="h-full w-full md:flex md:justify-between items-center">
            <div className="h-[80%] w-full max-w-[200px] items-center">
                <CardFlip title="Person 1" subtitle="Role 1" imagePath="/path/to/image1.jpg" description="Description for Person 1" />
                <CardFlip title="Person 2" subtitle="Role 2" imagePath="/path/to/image2.jpg" description="Description for Person 2" />
                <CardFlip title="Person 3" subtitle="Role 3" imagePath="/path/to/image3.jpg" description="Description for Person 3" />
            </div>
            <div className="w-full items-center px-4 flex flex-col justify-center">
                <h1 className="text-center py-4">Background Guide</h1>
                <iframe src="https://drive.google.com/file/d/1uMVlV_41NPIMUWJJFDMqvjsylvCCQRhK/preview" className="w-full min-w-[300px] max-w-[500px] h-full min-h-[500px]" />
            </div>
            <div className="h-[80%] w-full max-w-[200px] items-center">
                <CardFlip title="Person 1" subtitle="Role 1" imagePath="/path/to/image1.jpg" description="Description for Person 1" />
                <CardFlip title="Person 2" subtitle="Role 2" imagePath="/path/to/image2.jpg" description="Description for Person 2" />
                <CardFlip title="Person 3" subtitle="Role 3" imagePath="/path/to/image3.jpg" description="Description for Person 3" />
            </div>
        </div>
    );
}