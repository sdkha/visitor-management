import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./auth/Login.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import VisitorList from "./pages/VisitorList.tsx";
import Visitor from "./pages/Visitor.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="login" element={<Login />} />
        <Route
          path="visitor-list"
          element={
            <ProtectedRoute>
              <VisitorList />
            </ProtectedRoute>
          }
        />
        <Route
          path="visitor"
          element={
            <ProtectedRoute>
              <Visitor />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;