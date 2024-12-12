import { useState, ReactNode } from "react";

interface ProtectedDestinationProps {
  correctPassword: string; // The correct password
  children: ReactNode; // The content to display after authentication
  prompt: string;
}

function ProtectedDestination({
  correctPassword,
  children,
  prompt,
}: ProtectedDestinationProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  return isAuthenticated ? (
    children
  ) : (
    <div className="d-flex flex-column align-items-center justify-content-center mt-4">
      <h2 className="mb-3">{prompt}</h2>
      <input
        type="password"
        className="form-control w-50"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn btn-primary mt-3" onClick={handleLogin}>
        Submit
      </button>
    </div>
  );
}

export default ProtectedDestination;
