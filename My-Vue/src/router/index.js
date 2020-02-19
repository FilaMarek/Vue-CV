import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '../Components/mainPage'
import Hobbies from '../Pages/Hobbies/Hobbies'
import Jobs from '../Pages/Jobs/Jobs'
import Learning from '../Pages/Learning/Learning'
import Certifications from '../Pages/Certifications/Certifications'
import Projects from '../Pages/Projects/Projects'


Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: mainPage
        },
        {
            path: '/hobbies',
            name: 'My hobbies',
            component: Hobbies
        },
        {
            path: '/jobs',
            name: 'My jobs',
            component: Jobs
        },
        {
            path: '/learning',
            name: 'Learning right now',
            component: Learning
        },
        {
            path: '/certifications',
            name: 'My certifications',
            component: Certifications
        },
        {
            path: '/projects',
            name: 'My projects',
            component: Projects
        }
    ]
})