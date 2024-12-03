import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from '@/pages/MainPage.tsx'
import MyPage from '@/pages/MyPage.tsx'
import PostPage from '@/pages/PostDetailPage'
import RegisterPostPage from '@/pages/RegisterPostPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/post/:id" element={<PostPage />} />
                <Route path="/myPage/:id" element={<MyPage /> } />
                <Route path="/post/register" element={<RegisterPostPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router