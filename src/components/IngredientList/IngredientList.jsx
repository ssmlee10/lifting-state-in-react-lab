const IngredientList = (props) => {
  return (
    <ul>
      {props.availableIngredients.map((ingredient, index) => (
        <li 
        onClick={() => {props.addToBurger(ingredient)}}
        key={index}
        style={{ backgroundColor: ingredient.color }}>
        {ingredient.name}
        <button type="submit">+</button>
        </li> 
      ))}
    </ul>
  );
};

export default IngredientList;

// curly braces, need a return
// curly braces used for console.logs
// () after =>, don't need return
