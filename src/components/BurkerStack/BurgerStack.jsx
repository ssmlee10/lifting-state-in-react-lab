const BurgerStack = (props) => {
  return (
    <ul>
      {props.stack.map((ingredient, index) => {
        return (
          <li key={index} 
          onClick={() => {props.removeFromBurger(ingredient)}} 
          style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button type="submit">-</button>
          </li>
        );
      })}
    </ul>
  );
};

export default BurgerStack;
