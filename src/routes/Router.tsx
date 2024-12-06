import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '@/components/Layout'

import MainPage from '@/pages/MainPage.tsx'
import MyPage from '@/pages/MyPage.tsx'
import PostPage from '@/pages/PostDetailPage'
import RegisterPostPage from '@/pages/RegisterPostPage'
import FriendsListPage from '@/pages/FriendsListPage'
import LoginPage from '@/pages/LoginPage'
import SignUpPage from '@/pages/SignUpPage'
import ChattingListPage from '@/pages/ChattingListPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <div style={{
                    height: 'calc(100vh - 95px)',
                    position: 'fixed',
                    top: '45px',
                    left: 0,
                    right: 0 }}>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/post/:id" element={<PostPage />} />
                        <Route path="/myPage/:id" element={<MyPage /> } />
                        <Route path="/post/register" element={<RegisterPostPage />} />
                        <Route path="/friends/:id" element={<FriendsListPage /> } />
                        <Route path="/chatlist/:id" element={<ChattingListPage /> } />
                        <Route path="/login" element={<LoginPage /> } />
                        <Route path="/signup" element={<SignUpPage /> } />
                    </Routes>
                </div>
            </Layout>
        </BrowserRouter>
    )
}

export default Router