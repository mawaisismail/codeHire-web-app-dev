import styles from "./AnimatedCounter.module.scss";

import {Counter} from "./Counter."
export const AnimatedCounter = () => {
    return (
        <div className={styles.counterGrid}>
            <Counter n={10000} Extension="+" label="Available Jobs" />
            <Counter n={7500} Extension="+" label="Applications" />
            <Counter n={8850} Extension="K" label="Positive Feedback " />
            <Counter n={990} Extension="" label="Members" />
        </div>
    );
};


