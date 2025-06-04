export const ContentScreenCentered = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{ padding: 12, border: "1px solid lightgray", borderRadius: 8 }}
      >
        {children}
      </div>
    </div>
  );
};
