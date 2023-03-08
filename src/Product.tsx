 import { useState } from 'react';
import styles from './Product.module.scss'
import Modal from "./components/modal";

 
 export default function Product() {
   
    const [isModalVisible, setIsModalVisible] = useState(false);
   
    return (
        <>
        
                <div className={styles.item} onClick={() => setIsModalVisible(true)}>
                {isModalVisible ? <Modal onClose={() => setIsModalVisible(false)} /> : null}
                        <div className={styles.image}>
                            <img src="/images/smartphone2.png" alt="" />
                        </div>
                        <div className={styles.info}>
                            <span className={styles.name}>IPHONE 13 MINI 2</span>
                            <span className={styles.oldPrice}>R$ </span>
                            <span className={styles.price}>R$ 12.000</span>
                            <span className={styles.parcelas}>ou 2x de R$ 49,95 sem juros</span>
                            <span className={styles.delivery}>Frete grátis</span>
                            <button>Comprar</button>
                        </div>
                    </div>
                    </>
    )
 }