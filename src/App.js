import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: (()=> fetch('https://openapi.programming-hero.com/api/quiz'))
        },
        {
          path: 'quiz/:quizId',
          element: <Quiz></Quiz>,
          loader: async({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        }
      ]
    }
  ]);

  return (
    <div className="App ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
