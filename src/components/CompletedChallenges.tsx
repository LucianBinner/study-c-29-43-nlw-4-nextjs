import { useChallenges } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallenges.module.css';

export default function CompletedChallenges() {
    const { challengesCompleted } = useChallenges();

    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}
