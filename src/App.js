import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './components/layout/NotFoundPage';
import DashboardLayout from './components/module/dashBoard/DashBoardLayout';
import PostAddNew from './components/module/post/PostAddNew';
import PostManage from './components/module/post/PostManage';
import { AuthProvider } from './context/auth-context';
import DashboardPage from './pages/DashBoardPage';
import { HomePages } from './pages/HomePages';
import { SignInpage } from './pages/SignInpage';
import SignUpPage from './pages/SignUpPage';

function App() {
    return (
        <div>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<HomePages></HomePages>}></Route>
                    <Route
                        path="/sign-up"
                        element={<SignUpPage></SignUpPage>}
                    ></Route>
                    <Route
                        path="/sign-in"
                        element={<SignInpage></SignInpage>}
                    ></Route>
                    
                    <Route element={<DashboardLayout></DashboardLayout>}>
                        <Route
                            path="/dashboard"
                            element={<DashboardPage></DashboardPage>}
                        ></Route>
                        <Route
                            path="/manage/post"
                            element={<PostManage></PostManage>}
                        ></Route>
                        <Route
                            path="/manage/add-post"
                            element={<PostAddNew></PostAddNew>}
                        ></Route>
                    </Route>
                    <Route
                        path="*"
                        element={<NotFoundPage></NotFoundPage>}
                    ></Route>
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
