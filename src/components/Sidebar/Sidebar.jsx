import { Drawer, Toolbar } from "@mui/material";

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: "257px",
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: "257px", boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <h5>Home</h5>
    </Drawer>
  );
}

export default Sidebar;
