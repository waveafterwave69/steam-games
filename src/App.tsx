import { Route, Routes } from 'react-router'
import Header from './components/Header/Header'
import { routesConfig } from './routes/routesConfig'

const App: React.FC = () => {
    return (
        <>
            <div className="container">
                <Header />
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
