import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./routes/Root";
import Page2 from "./routes/Page2";
import "./App.css";
import { CssBaseline, AppBar, Toolbar, Typography } from "@mui/material";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <AssignmentRoundedIcon />
          <Typography variant="h6">Assignment</Typography>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
