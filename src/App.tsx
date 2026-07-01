import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
              <p className="text-lg text-gray-400">Setting up OAuth authentication…</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
