import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserType from "../../features/UserType/UserType.page";

const Navigation = () => {
  return (
    <Router>
      <Routes>
        <Route exact element={<UserType />} path="/" />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's No Page like this!!!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
};

export default Navigation;
