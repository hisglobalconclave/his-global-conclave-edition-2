import { motion } from "framer-motion";

interface CommiteeGroupProps {
    direction : 'left' | 'right' | 'up' | 'down';
    name: string;
    logoPath: string;
}

export default function CommiteeGroup({ direction, name, logoPath }: CommiteeGroupProps) {
    return (
        <div className="relative w-200 h-200">
            <motion.img
                src={logoPath}
                alt={`${name} Logo`}
                className="w-8 h-8 object-contain mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" fill="none">
                <motion.line
                    x1="0"
                    y1="0"
                    x2=""
                    y2="-500"
                    className="grid-line-commitee"
                />
            </svg>
        </div>
        
    );
}