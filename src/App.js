import './styles/main.scss'
import{
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from 'react-router-dom';
import Contact from './page/Contact';
import Info from './page/Info';
import Main from './page/Main';
import Projects from './page/Projects';
import Skill from './page/Skill';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path:'/',
        element:<Main/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/info',
        element:<Info/>
      },
      {
        path:'/project',
        element:<Projects/>
      },
      {
        path:'/skills',
        element:<Skill/>
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <div className='container'>
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
