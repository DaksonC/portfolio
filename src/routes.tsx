import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Information } from './components/Information'
import { Article } from './pages/Article'
import Home from './pages/Home'
import { ReposGitHub } from './pages/repos'


export default function MyRoute(){
    return(
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/repos" element={<ReposGitHub />} />
                <Route path="/article" element={<Article />} />
            </Routes> 
            <Information />
            <Footer />       
        </>
    )
}