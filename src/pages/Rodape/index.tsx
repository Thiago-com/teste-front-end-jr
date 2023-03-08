import styles from './Rodape.module.scss'

export default function Rodape() {
    return (
        <footer className={styles.container}>
            <div className={styles.info}>
                <h3>Sobre nós</h3>
                <ul>
                    <li>Conheça</li>
                    <li>Como Comprar</li>
                    <li>Indicação E Desconto</li>
                </ul>
                <div className={styles.network}>
                    <img src="./images/face.png" alt="logo facebook" /><a href="#"></a>
                    <img src="./images/instagram.png" alt="logo instagram" /><a href="#"></a>
                    <img src="./images/youtube.png" alt="logo youtube" /><a href="#"></a>
                </div>

            </div>

            <div className={styles.info__util}>
                <h3>Informações Úteis</h3>
                <ul>
                    <li>
                        <a href="#">Fale Conosco</a>
                    </li>
                    <li>
                        <a href="#">Dúvidas</a>
                    </li>
                    <li>
                        <a href="#">Prazos de entrega</a>
                    </li>
                    <li>
                        <a href="#">Formas de pagamento</a>
                    </li>
                    <li>
                        <a href="#">Política de privacidade</a>
                    </li>
                    <li>
                        <a href="#">Trocas e devoluções</a>
                    </li>
                </ul>
            </div>
            <div className={styles.pagamento}>
                <h3>Formas de pagamento</h3>
                <ul>
                    <li><img src="./images/visa.png" alt="logo Visa" /></li>
                    <li><img src="./images/dinners.png" alt="" /></li>
                    <li><img src="./images/pix.png" alt="" /></li>
                    <li><img src="./images/sodexo.png" alt="" /></li>
                    <li><img src="./images/elo.png" alt="" /></li>
                    <li><img src="./images/ifood.png" alt="" /></li>
                    <li><img src="./images/amex.png" alt="" /></li>
                    <li><img src="./images/alelo.png" alt="" /></li>
                    <li><img src="./images/mastercard.png" alt="" /></li>
                    <li><img src="./images/ticket.png" alt="" /></li>
                </ul>
            </div>
            <div className={styles.newsletter}>
                <h1>Cadastre-se e Receba nossas
                    <br /><b>novidades e promoções</b></h1>
                <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
                <input type="email" name="" placeholder='SEU EMAIL' />
                <button>OK</button>
            </div>
            <div className={styles.copyright}>
                <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.
                    É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
                    <div className={styles.marcas}>
                    <img src="./images/econverse.png" alt=""></img>
                    <img src="./images/vtex.png" alt=""></img>
                </div>
            </div>
        </footer>
    )
}