import { Route, Routes } from 'react-router'
import Header from './components/Header/Header'
import { routesConfig } from './routes/routesConfig'

const App: React.FC = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Routes>
                    {routesConfig.map(({ page, url }) => (
                        <Route path={url} element={page} />
                    ))}
                </Routes>
            </div>
        </>
    )
}

export default App
