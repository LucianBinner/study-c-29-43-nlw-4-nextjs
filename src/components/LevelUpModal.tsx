import { useChallenges } from '../contexts/ChallengesContext';
import styles from '../styles/components/LevelUpModal.module.css';

export default function LevelUpModal() {
    const { level, closeLevelUpModal } = useChallenges();
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você alcanço um novo level</p>
                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar modal" />
                </button>
            </div>
        </div>
    )
}
