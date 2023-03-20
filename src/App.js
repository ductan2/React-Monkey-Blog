import { Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './components/layout/NotFoundPage';
import { AuthProvider } from './context/auth-context';
import { HomePages } from './pages/HomePages';
import { SignInpage } from './pages/SignInpage';
import SignUpPage from './pages/SignUpPage';

function App() {
    return (
        <div>
            <AuthProvider>
                <Routes>
                <Route path='/' element={<HomePages></HomePages>}></Route>
                    <Route
                        path="/sign-up"
                        element={<SignUpPage></SignUpPage>}
                    ></Route>
                    <Route
                        path="/sign-in"
                        element={<SignInpage></SignInpage>}
                    ></Route>
                    <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
