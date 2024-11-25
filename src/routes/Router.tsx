import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mainpage from '@/pages/Mainpage.tsx'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Mainpage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router