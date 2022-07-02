import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import { ReposGitHub } from './ReposGitHub'
import { PostsLinkedin } from './PostsLinkedin'

export default function MyRoute(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/repos" element={<ReposGitHub />} />
                <Route path="/posts" element={<PostsLinkedin />} />
            </Routes>        
        </BrowserRouter>
    )
}