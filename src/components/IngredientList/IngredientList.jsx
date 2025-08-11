const IngredientList = (props) => {
  return (
  <ul>
    {props.IngredientList.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>
    })};
  </ul>
  );
};

export default IngredientList;
