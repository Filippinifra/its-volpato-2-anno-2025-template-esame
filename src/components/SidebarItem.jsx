import { Link, useLocation } from "react-router-dom";

export const SidebarItem = ({ label, icon, path, onClick }) => {
  const location = useLocation();

  const isCurrentPath = location.pathname === path;

  return (
    <Link
      style={{
        display: "flex",
        padding: "16px 32px",
        gap: 12,
        backgroundColor: isCurrentPath ? "#CFF9FF" : "white",
        color: "black",
        textDecoration: "none",
        borderLeft: isCurrentPath ? "6px solid #1DC4DA" : "6px solid white",
      }}
      to={path}
      onClick={onClick}
    >
      {icon}
      <p>{label}</p>
    </Link>
  );
};
