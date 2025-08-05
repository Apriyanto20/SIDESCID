'use client';

import { useEffect, useState } from "react";
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
    const [computedStyle, setComputedStyle] = useState<React.CSSProperties | undefined>(undefined);

    useEffect(() => {
        if (!style) return;

        // Misalnya kamu ingin memastikan `left` dan `top` tidak pakai banyak angka desimal
        const stableStyle: React.CSSProperties = {
            ...style,
            left: typeof style.left === "string" ? parseFloat(style.left).toFixed(2) + "px" : style.left,
            top: typeof style.top === "string" ? parseFloat(style.top).toFixed(2) + "px" : style.top,
        };

        setComputedStyle(stableStyle);
    }, [style]);

    // Jangan render apapun sampai komputasi style selesai untuk mencegah mismatch
    if (style && !computedStyle) return null;

    return (
        <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className={clsx("absolute flex flex-col items-center text-center", className)}
            style={computedStyle || style}
        >
            <div
                className="rounded-full overflow-hidden border-4 border-white shadow-lg"
                style={{ width: size, height: size }}
            >
                <Image src={src} alt={name} width={size} height={size} className="object-cover" />
            </div>
            <p className="mt-2 text-sm font-semibold text-gray-800">{name}</p>
            <p className="text-xs text-gray-500">{role}</p>
        </motion.div>
    );
}
