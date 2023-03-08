import styles from './Banner.module.scss'
import BannerImg from '../../assets/img/banner.png'

export default function Banner() {
    return (
        <section className={styles.banner}>
            <div className={styles.banner__text}>
                <div>
                <img src={BannerImg} alt="" />
                <h2>Venha conhecer nossas <br />promoções</h2>
                <h3>50% Off nos produtos</h3>
                <button className={styles.banner__button}>Ver Produto</button>
                </div>
                
            </div>

            <div >
                <ul className={styles.lista}>
                    <li className={styles.lista__icon}><img src="/images/monitorar-tablet-e-smartohone 1.png" alt="" />
                    <a href="#"></a>
                    </li>
                
                
                    <li className={styles.lista__icon}><img src="/images/supermercados 1.png" alt="ícone supermercado" />
                    <a href="#"></a>
                    </li>
                
                    <li className={styles.lista__icon}><img src="/images/whiskey.png" alt="ícone whiskey" />
                    <a href="#"></a>
                    </li>
                
                    <li className={styles.lista__icon}><img src="/images/ferramentas 1.png" alt="ícone de ferramentas" />
                    <a href="#"></a>
                    </li>
                
                    <li className={styles.lista__icon}><img src="/images/cuidados-de-saude 1.png" alt="ícone saúde" />
                    <a href="#"></a>
                    </li>
                    <li className={styles.lista__icon}><img src="/images/corrida 1.png" alt="ícone corrida" />
                    <a href="#"></a>
                    </li>
                    <li className={styles.lista__icon}><img src="/images/moda 1.png" alt="ícone moda" />
                    <a href="#"></a>
                    </li>
                </ul>
                <ul className={styles.itens}>
                    <li><a href="#">Tecnologia</a></li>
                    <li><a href="#">Supermercado</a></li>
                    <li><a className={styles.drinks} href="#">Bebidas</a></li>
                    <li><a href="#">Ferramentas</a></li>
                    <li><a href="#">Saúde</a></li>
                    <li><a href="#">Esporte e Fitness</a></li>
                    <li><a href="#">Moda</a></li>
                </ul>
            </div>
        </section>

        
    )
}