'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

import type { Variants } from 'framer-motion';

const floatVariants: Record<'small' | 'medium' | 'large', Variants> = {
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

interface FloatingImageProps {
    src: string;
    alt?: string;
    className?: string;
    floatType?: 'small' | 'medium' | 'large';
    size?: number; // ✅ ditambahkan
}

export default function FloatingImage({
    src,
    alt = 'Floating',
    className = '',
    floatType = 'small',
    size = 100, // ✅ default size
}: FloatingImageProps) {
    return (
        <motion.div
            variants={floatVariants[floatType]}
            animate="animate"
            className={clsx('absolute z-10', className)}
            style={{ width: size, height: size }} // ✅ ukuran container
        >
            <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes={`${size}px`}
            />
        </motion.div>
    );
}
