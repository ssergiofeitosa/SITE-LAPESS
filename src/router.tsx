import {
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router'
import App from './App'
import Home from './pages/Home'
import Integrantes from './pages/Integrantes'
import Projetos from './pages/Projetos'
import BlogPage from './pages/BlogPage'

const rootRoute = createRootRoute({
  component: App,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const integrantesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/integrantes',
  component: Integrantes,
})

const projetosRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projetos',
  component: Projetos,
})

const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: BlogPage,
})

const routeTree = rootRoute.addChildren([indexRoute, integrantesRoute, projetosRoute, blogRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
