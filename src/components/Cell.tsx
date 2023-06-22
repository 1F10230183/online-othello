import styles from '../pages/index.module.css';
export const Cell = (props: { x: number; y: number; color: number; clickCell: () => void }) => {
  return (
    <div className={styles.cell} onClick={props.clickCell}>
      {props.color !== 0 && (
        <div className={styles.stone} style={{ background: props.color === 1 ? '#000' : '#fff' }} />
      )}
    </div>
  );
};
