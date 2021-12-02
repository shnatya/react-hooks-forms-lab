import React, {useState} from "react";
import { v4 as uuid } from "uuid";

//input new item's name
function ItemForm(props) {
  const [newItem, setNewItemData] = useState({
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: "",
    category: "Produce",
  })
  function handleNewItem(event){
    let value = event.target.value
    const name = event.target.name

    setNewItemData({
      ...newItem,
      id: uuid(),
      [name]: value,
    })
  }
  function handleSubmit(event){
    event.preventDefault();
    props.onItemFormSubmit(newItem)
    /*setNewItemData({ /////////how to reset?
      ...newItem,
      id: uuid(),
      name: "",
      category: "Produce",
    })*/
  }
  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input  onChange={handleNewItem} type="text" name="name"/> 
      </label>

      <label>
        Category:
        <select onChange={handleNewItem} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button  type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
