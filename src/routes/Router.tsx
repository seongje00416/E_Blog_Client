import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from '@/pages/MainPage.tsx'
import MyPage from '@/pages/MyPage.tsx'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/myPage/:id" element={<MyPage /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router