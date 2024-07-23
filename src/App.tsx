import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Main from './pages/Main/Main'

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </>
    )
}

export default App
