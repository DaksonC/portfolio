import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import { ReposGitHub } from '../pages/repos'
import { Article } from '../pages/article'
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Information } from '../components/information';

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