import styles from "./Icon.module.scss";

interface Props {
  icon: string;
  color?: string;
}

export default function Project({ icon, color }: Props) {
  return (
    <span
      className={styles.Icon}
      role="presentation"
      style={{ color: color ? color : "inherit" }}
    >
      {icon}
    </span>
  );
}
