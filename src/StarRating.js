const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const startContainerStyle = {
  display: "flex",
  gap: "4px",
};

const textContainerStyle = {
  lineHeight: "1",
  margin: "0",
};
export default function StarRating({ maxRating }) {
  return (
    <div style={containerStyle}>
      <div style={startContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <span>S{i + 1}</span>
        ))}
      </div>
      <p style={textContainerStyle}>10</p>
    </div>
  );
}
