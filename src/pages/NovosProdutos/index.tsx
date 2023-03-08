import { useState, useRef, useEffect } from "react";
import Product from "../../Product";
import styles from './NovosProdutos.module.scss';


export default function NovosProdutos() {
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
            </>
            )}