'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

export default function FloatingProfileCard({
    src,
    name,
    role,
    className,
    style,
    size = 96,
}: {
    src: string;
    name: string;
    role: string;
    className?: string;
    style?: React.CSSProperties;
    size?: number;
}) {
    return (
        <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className={clsx("absolute flex flex-col items-center text-center", className)}
            style={style}
        >
            <div className="rounded-full overflow-hidden border-4 border-white shadow-lg" style={{ width: size, height: size }}>
                <Image src={src} alt={name} width={size} height={size} className="object-cover" />
            </div>
            <p className="mt-2 text-sm font-semibold text-gray-800">{name}</p>
            <p className="text-xs text-gray-500">{role}</p>
        </motion.div>
    );
}
