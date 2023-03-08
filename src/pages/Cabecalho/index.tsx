import styles from './Cabecalho.module.scss'

export default function Cabecalho() {

    return (
        <header >
            <nav className={styles.pesquisa__ofertas}>
                <ul className={styles.cabecalho}>
                    <li>
                        <img src="/images/ShieldCheck.png" alt="Ícone de segurança" />
                        Compra <b>100% segura </b></li>
                    <li>
                        <img src="/images/Truck.png" alt="Ícone de caminhão de entrega" />
                        <b>Frete grátis</b> acima de R$ 200</li>
                    <li>
                        <img src="/images/CreditCard.png" alt="Ícone de cartão de crédito" />
                        <b>Parcele</b> suas compras</li>
                </ul>
            </nav>
            <div className={styles.pesquisa}>
                <img src="/images/vtex_icon.png" alt="logo VTEX" />
                <input
                    type="text"

                    placeholder="O que você está buscando?"
                />
                

                <a href="#">
                    <img src="/images/Group.png" alt="Ícone loja" />
                </a>
                <a href="#">
                    <img src="/images/Heart.png" alt="Ícone de Favoritos" />
                </a>
                <a href="#">
                    <img src="/images/UserCircle.png" alt="Ícone de Usuário" />
                </a>
                <a href="#">
                    <img src="/images/ShoppingCart.png" alt="Carrinho de compras" />
                </a>
            </div>
            <ul className={styles.categorias}>
                <li>
                    <a href="#">Todas Categorias</a>
                </li>
                <li>
                    <a href="#">Supermercado</a>
                </li>
                <li>
                    <a href="#">Livros</a>
                </li>
                <li>
                    <a href="#">Moda</a>
                </li>
                <li>
                    <a href="#">Lançamentos</a>
                </li>
                <li>
                    <a href="#">Ofertas Do Dia</a>
                </li>
                <li>
                    <img src="./images/CrownSimple.png" alt="ícone coroa" />
                    <a href="#">Assinatura</a>
                </li>
            </ul>
        </header>
    )
}