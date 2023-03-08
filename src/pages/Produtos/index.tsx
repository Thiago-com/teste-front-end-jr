import { useEffect, useState, useRef } from 'react';
import Modal from '../../components/modal';
import Product from '../../Product';
import styles from './Produtos.module.scss';


export default function Produtos() {
    const [data, setData] = useState([]);
    const carousel = useRef(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/static/products.json')
            .then((response) => response.json())
            .then(setData);
    }, []);


    return (
        <>
            <div className={styles.produtos}>
                <h1>Produtos relacionados</h1>
                <ul>
                    <li>Celular</li>
                    <li>Acessórios</li>
                    <li>Tablets</li>
                    <li>Notebooks</li>
                    <li>TVS</li>
                    <li>Ver Todos</li>
                </ul>
            </div>

            <div className={styles.container}>
                <div className={styles.carousel} ref={carousel}>

                <div className={styles.item} onClick={() => setIsModalVisible(true)}>
                        {isModalVisible ? <Modal onClose={ () => setIsModalVisible(false)}/> : null}

                        <div className={styles.image}>
                            <img src="/images/smartphone2.png" alt="" />
                        </div>

                                             
                        <div className={styles.info}>
                            <span className={styles.name}>Iphone 11 PRO MAX BRANCO 1</span>
                            <span className={styles.oldPrice}></span>
                            <span className={styles.price}>R$ 15.000</span>
                            <span className={styles.parcelas}>ou 12x de R$ 149,95 sem juros</span>
                            <span className={styles.delivery}>Frete grátis</span>
                            <button>Comprar</button>
                        </div>
                        
                    </div>
                
                    <div className={styles.item} onClick={() => setIsModalVisible(true)}>
                        {isModalVisible ? <Modal onClose={ () => setIsModalVisible(false)}/> : null}

                        <div className={styles.image}>
                            <img src="/images/smartphone2.png" alt="" />
                        </div>
                        <div className={styles.info}>
                            <span className={styles.name}>IPHONE 13 MINI 1</span>
                            <span className={styles.oldPrice}>R$ 9.000</span>
                            <span className={styles.price}>R$ 8.000</span>
                            <span className={styles.parcelas}>ou 12x de R$ 149,95 sem juros</span>
                            <span className={styles.delivery}>Frete grátis</span>
                            <button>Comprar</button>
                        </div>
                    </div>
                    <Product />
                    {isModalVisible ? <Modal onClose={ () => setIsModalVisible(false)}/> : null}

                    <Product />
                
                </div>
                
                <div className={styles.setas}>

                    <button ><img src="/static/images/scroll-right.png" alt="Scroll Left" /></button>
                    <button ><img src="/static/images/scroll-right.png" alt="Scroll Right" /></button>
                </div>
            </div>
        </>

    )
}