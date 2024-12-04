import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from '@/pages/MainPage.tsx'
import MyPage from '@/pages/MyPage.tsx'
import PostPage from '@/pages/PostDetailPage'
import RegisterPostPage from '@/pages/RegisterPostPage'
import FriendsListPage from '@/pages/FriendsListPage'
import LoginPage from '@/pages/LoginPage'
import SignUpPage from '@/pages/SignUpPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/post/:id" element={<PostPage />} />
                <Route path="/myPage/:id" element={<MyPage /> } />
                <Route path="/post/register" element={<RegisterPostPage />} />
                <Route path="/friends/:id" element={<FriendsListPage /> } />
                <Route path="/login" element={<LoginPage /> } />
                <Route path="/signUp" element={<SignUpPage /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router