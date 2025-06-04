export const Card = ({ titolo }) => {
  return (
    <div
      style={{
        border: "1px solid #eee",
        padding: 24,
        backgroundColor: "white",
        width: "fit-content",
        borderRadius: 24,
      }}
    >
      {titolo}
    </div>
  );
};
