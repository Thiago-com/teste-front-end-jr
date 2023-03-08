import styles from './Modal.module.scss';


const Modal = ( { onClose =() => {} }) => {
    
    return (
        <div id='modal' className={styles.modal}>
            <div className={styles.container}>
                <button className={styles.close} onClick={onClose}/>
                <img src="/images/smartphone2.png" alt="imagem smartphone" />
                <h2>IPHONE 13 MINI 3</h2>
                <div className={styles.content}>
                <span>R$ 18.499,90</span>
                <p>IPHONE 13 MINI 3</p>
                <a href="#">Veja mais detalhes do produto </a>
                </div>
            </div>
        </div>


    )
}

export default Modal;
