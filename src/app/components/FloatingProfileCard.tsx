"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

interface FloatingProfileCardProps {
    src: string;
    name: string;
    role: string;
    style?: React.CSSProperties;
    className?: string;
}

const FloatingProfileCard: React.FC<FloatingProfileCardProps> = ({
    src,
    name,
    role,
    style,
    className,
}) => {
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className={clsx("absolute flex flex-col items-center text-center", className)}
            style={style}
        >
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white bg-white">
                <Image src={src} alt={name} width={128} height={128} className="object-cover w-full h-full" />
            </div>

            <p className="mt-2 text-sm font-semibold text-gray-800">{name}</p>
            <p className="text-xs text-gray-600">{role}</p>
        </motion.div>
    );
};

export default FloatingProfileCard;
