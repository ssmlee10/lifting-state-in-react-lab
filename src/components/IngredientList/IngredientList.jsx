const IngredientList = (props) => {
  return (
  <ul>
    {props.availableIngredients.map((ingredient, index) => (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
    </li>
    ))};
  </ul>
  );
};

export default IngredientList;

// curly braces, need a return
// curly braces for console.logs
// () after =>, don't need return