// FloatingProfileCard.tsx
import { motion } from "framer-motion";

interface FloatingProfileCardProps {
    src: string;
    name: string;
    role: string;
    style?: React.CSSProperties;
}

export default function FloatingProfileCard({
    src,
    name,
    role,
    style,
}: FloatingProfileCardProps) {
    return (
        <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute flex flex-col items-center text-center"
            style={style}
        >
            <img
                src={src}
                alt={name}
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="mt-2">
                <h4 className="font-semibold text-sm">{name}</h4>
                <p className="text-xs text-gray-500">{role}</p>
            </div>
        </motion.div>
    );
}
