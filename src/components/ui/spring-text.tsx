import { motion } from "framer-motion";

interface SpringTextWordsProps {
  text: string;
  cls?: string;
}

export const SpringTextWords: React.FC<SpringTextWordsProps> = ({ text, cls }) => {
  const words = text.split(" ");

  return (
    <div style={{ display: "flex", gap: "0.3rem", overflow: "hidden", textShadow: '0 0 0px rgba(255, 255, 255, 1), 0 0 0px rgba(255, 255, 255, 1)' }} className={cls} >
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: index * 0.2, // stagger each word
          }}
          style={{ display: "inline-block" }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};
