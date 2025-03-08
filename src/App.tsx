import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import FavouritesPage from "./pages/FavouritesPage.tsx";
import Navigation from "./components/Navigation.tsx";

function App() {
    return (
            <div className="font-serif mx-8 my-4">
                <Navigation />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/favourites" element={<FavouritesPage />} />
                </Routes>
            </div>
    )
}

export default App
