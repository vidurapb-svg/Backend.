import { useState } from "react";

const ItemForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity || !price) return;
    
    onAdd({ name, quantity, price });
    
    // Clear form after submitting
    setName("");
    setQuantity("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input 
        placeholder="Name" 
        value={name}
        onChange={e => setName(e.target.value)} 
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input 
        placeholder="Quantity" 
        type="number"
        value={quantity}
        onChange={e => setQuantity(e.target.value)} 
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input 
        placeholder="Price" 
        type="number"
        value={price}
        onChange={e => setPrice(e.target.value)} 
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button type="submit" style={{ padding: "5px 15px", cursor: "pointer" }}>
        Add Item
      </button>
    </form>
  );
};

export default ItemForm;
