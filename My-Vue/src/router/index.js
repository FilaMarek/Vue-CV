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
            name: 'home',
            component: mainPage
        },
        {
            path: '/hobbies',
            name: 'hobbies',
            component: Hobbies
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: Jobs
        },
        {
            path: '/learning',
            name: 'learning',
            component: Learning
        },
        {
            path: '/certifications',
            name: 'certifications',
            component: Certifications
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        }
    ]
})