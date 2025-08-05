"use client";

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
        <div
            className={clsx("absolute flex flex-col items-center text-center", className)}
            style={style}
        >
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white bg-white transition-transform duration-700">
                <Image
                    src={src}
                    alt={name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                />
            </div>
            <p className="mt-2 text-sm font-semibold text-gray-800">{name}</p>
            <p className="text-xs text-gray-600">{role}</p>
        </div>
    );
};

export default FloatingProfileCard;
