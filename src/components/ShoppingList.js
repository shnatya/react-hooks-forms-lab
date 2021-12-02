import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addNewItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchWord, setHandleSearch] = useState("");
  
  const [itemsToDisplay, setDisplay] = useState([]);

  function handleSearch(event){
    debugger
    setHandleSearch(event.target.value) 
    debugger
    let filterItems = items.filter(item => {
      debugger
      if (item.name.includes(searchWord)) {
        debugger
        return true;
      }
  })
  debugger
    setDisplay(filterItems)
}
  
  function handleCategoryChange(event) {
    debugger
    setSelectedCategory(event.target.value);
    debugger
    let filterItems  = items.filter((item) => {
      debugger
      if (selectedCategory === "All") return true;
      debugger
      return item.category === selectedCategory;
    });
    debugger
    setDisplay(filterItems);
  }
  
  console.log(itemsToDisplay)
  
   

  
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addNewItem} />
      <Filter 
        onSearchChange={handleSearch}
        search={searchWord}
        onCategoryChange={handleCategoryChange}
        
        />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
