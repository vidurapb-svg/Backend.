const ItemList = ({ items }) => {
  if (items.length === 0) {
    return <div>No items found.</div>;
  }

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
          <strong style={{ fontSize: "1.1em" }}>{item.name}</strong> 
          <span style={{ color: "#555", marginLeft: "10px" }}>
            (Qty: {item.quantity}) - ${item.price}
          </span>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
