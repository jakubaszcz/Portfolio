import styles from "./Home.module.css";

export function SectionHeading({ id, number, label, title, description }: {
    id: string; number: string; label: string; title?: string; description?: string;
}) {
    return <header className={styles.sectionHeading}>
        <div><p className={styles.sectionLabel}><span aria-hidden="true">{number}</span>{label}</p><h2 id={id}>{title ?? label}</h2></div>
        {description && <p className={styles.sectionDescription}>{description}</p>}
    </header>;
}
