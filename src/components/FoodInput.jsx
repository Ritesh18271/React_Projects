import styles from "./FoodInput.module.css";
const FoodInput = ({handleOnKeyDown}
) => {
  return (
    <input
      className={styles.input}
      onKeyDown={handleOnKeyDown}
      type="text"
      placeholder="Enter Food Item here"
    />
  );
};
export default FoodInput;
