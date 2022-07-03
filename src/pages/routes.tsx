import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import { ReposGitHub } from './ReposGitHub'
import { PostsLinkedin } from './PostsLinkedin'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function MyRoute(){
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/repos" element={<ReposGitHub />} />
                <Route path="/posts" element={<PostsLinkedin />} />
            </Routes> 
            <Footer />       
        </BrowserRouter>
    )
}