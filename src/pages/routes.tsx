import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import { ReposGitHub } from './reposGitHub'
import { Article } from './article'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Information } from '../components/Information';

export default function MyRoute(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/repos" element={<ReposGitHub />} />
                <Route path="/article" element={<Article />} />
            </Routes> 
            <Information />
            <Footer />       
        </BrowserRouter>
    )
}