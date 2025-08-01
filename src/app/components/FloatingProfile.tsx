'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

type FloatType = 'small' | 'medium' | 'large';

type Props = {
    src: string;
    name: string;
    position: string;
    className?: string;
    floatType?: FloatType;
};

const floatVariants: Record<FloatType, any> = {
    small: {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    },
    medium: {
        animate: {
            y: [0, -20, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    },
    large: {
        animate: {
            y: [0, -30, 0],
            transition: {
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    },
};

export default function FloatingProfile({
    src,
    name,
    position,
    className,
    floatType = 'small',
}: Props) {
    const selectedVariant = floatVariants[floatType] || floatVariants.small;

    return (
        <motion.div
            variants={selectedVariant}
            animate="animate"
            className={clsx('absolute flex flex-col items-center text-center z-10', className)}
        >
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                    src={src}
                    alt={name}
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                />
            </div>
            <p className="mt-2 text-sm font-semibold text-gray-800">{name}</p>
            <p className="text-xs text-gray-500">{position}</p>
        </motion.div>
    );
}
