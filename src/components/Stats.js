export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }

  const numItems = items.length;
  const packedItems = items.filter((i) => i.packed === true).length;
  const percentage = (packedItems * 100) / numItems;

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈️"
          : `
            You have ${numItems} items on your list, and you already packed
            ${packedItems} (${Math.round(percentage)}%)
          `}
      </em>
    </footer>
  );
}
