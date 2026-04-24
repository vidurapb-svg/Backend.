import { useState, useEffect } from "react";
import { getItems, addItem } from "../api/itemService";
import ItemForm from "../components/ItemForm";
import ItemList from "../components/ItemList";

const Home = () => {
  const [items, setItems] = useState([]);

  const loadItems = async () => {
    try {
      const data = await getItems();
      setItems(data);
    } catch (error) {
      console.error("Failed to load items:", error);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const handleAddItem = async (itemData) => {
    try {
      await addItem(itemData);
      loadItems(); // Refresh the list from backend
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };

  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1 style={{ color: "#333", borderBottom: "2px solid #333", paddingBottom: "10px" }}>
        Item Manager
      </h1>
      
      <div style={{ backgroundColor: "#f9f9f9", padding: "20px", borderRadius: "8px", marginBottom: "30px" }}>
        <h3 style={{ marginTop: 0 }}>Add New Item</h3>
        <ItemForm onAdd={handleAddItem} />
      </div>

      <div>
        <h3>Inventory</h3>
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default Home;
