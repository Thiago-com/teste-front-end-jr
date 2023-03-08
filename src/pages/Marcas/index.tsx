import styles from './Marcas.module.scss';

export default function Marcas() {
    return (
        <>
        <div className={styles.title}>
        <h2>Navegue por marcas</h2>
        </div>
        <div className={styles.container}>
            
            <div className={styles.images}>
                <img src="./images/vtex_icon.png" alt="" />
                <img src="./images/vtex_icon.png" alt="" />
                <img src="./images/vtex_icon.png" alt="" />
                <img src="./images/vtex_icon.png" alt="" />
            </div>
        </div>
        </>
    )
}