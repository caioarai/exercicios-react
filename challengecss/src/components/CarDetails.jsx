import styles from './CarDetails.module.css';

const CarDetails = ({ model, color, price }) => {
  return (
    <div className={styles.card}>
      <h2>
        Modelo: <span className={styles.red}>{model}</span>
      </h2>
      <p>Cor: {model}</p>
      <p>Preço: R$ {price}</p>
    </div>
  );
};

export default CarDetails;
