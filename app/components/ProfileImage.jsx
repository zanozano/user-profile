"use client";
import * as React from "react";
import { motion } from "framer-motion";
import styles from '../styles/page.module.css';

const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

export const ProfileImage = () => {
    return (
        <motion.div
            className={styles.images}
            initial="hidden"
            animate="visible"
            variants={{
                visible: {
                    transition: { staggerChildren: 0.3 }
                }
            }}
        >
            <motion.img
                id='img-1'
                className={styles.largeImage}
                src='image-1.jpg'
                alt='profile-1'
                variants={imageVariants}
            />
            <motion.img
                id='img-2'
                src='image-2.jpg'
                alt='profile-2'
                variants={imageVariants}
            />
            <motion.img
                id='img-3'
                src='image-3.jpg'
                alt='profile-3'
                variants={imageVariants}
            />
        </motion.div>
    )
}
