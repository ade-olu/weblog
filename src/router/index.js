import Home from '../components/Home.vue'
import Post from '../components/BlogPost.vue'

export const routes = [
        {
            path: '',
            name: 'Home',
            component: Home
        },
        {
            path: '/post/:id/',
            name: 'BlogPost',
            component: Post
        }
]