import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';

function App() {
  const url = 'https://openapi.programming-hero.com/api/quiz';
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: (()=> fetch(url))
        },
        {
          path: 'quiz/:quizId',
          element: <Quiz></Quiz>,
          loader: async({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>,
          loader: (()=> fetch(url))
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
