import { useState, useRef, useEffect } from "react";
import Product from "../../Product";
import styles from './ProdutosRel.module.scss';


export default function ProdutosRelacionados() {
    const [data, setData] = useState([]);
    const carousel = useRef(null);

    useEffect(() => {
        fetch('http://localhost:3000/static/products.json')
            .then((response) => response.json())
            .then(setData);
    }, []);

    return (
        <>
            <div className={styles.produtos}>
                <h1>Produtos relacionados</h1>
                <p>Ver todos</p>
            </div>
            <div className={styles.container}>
                <div className={styles.carousel} ref={carousel}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className={styles.setas}>

                    <button><img src="/static/images/scroll-right.png" alt="Scroll Left" /></button>
                    <button><img src="/static/images/scroll-right.png" alt="Scroll Right" /></button>
                </div>
            </div>

            <div className={styles.container__parceiros}>
                <div className={styles.item}>
                    <img src="./images/image 45.png" alt="" />
                    <h2>Produtos</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <button>Confira</button>
                </div>
                <div className={styles.item}>
                    <img src="./images/image 45.png" alt="" />
                    <h2>Produtos</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <button>Confira</button>
                </div>
            </div>
        </>

    )
}