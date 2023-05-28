import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from "./AnimatedCounter.module.scss";

export const Counter = ({ n, label, Extension }: any) => {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });

    return (
        <div className={styles.counter}>
            <div className={styles.Number} >
                <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>
                <span>{Extension}</span>
            </div>
            <span>{label}</span>
        </div>
    );
};
