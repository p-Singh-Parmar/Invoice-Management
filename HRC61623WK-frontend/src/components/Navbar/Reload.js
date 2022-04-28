import React from "react";
import RefreshSharpIcon from "@mui/icons-material/RefreshSharp";

function Reload() {
  function reloadPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <RefreshSharpIcon
        onClick={reloadPage}
        sx={{ color: "#3f51b5", fontSize: 30, backgroundColor: "#283D4A" }}
      />
    </div>
  );
}

export default Reload;
