import React from 'react';
import { Link } from 'react-router-dom';
import './QuizList.css';

const QuizItem = ({quizItem}) => {
    const {id,name,logo,total} = quizItem;
    // console.log(quizItem.id == 5 ? logo:'null');
    return (
        <div className=''>
            <div className='
            flex flex-col justify-center w-48 mx-auto mb-5 my-0 p-6
            ring-4 rounded-lg 
            bg-gradient-to-r from-cyan-500 to-blue-500 
            {/*hover:from-blue-500 hover:to-cyan-500*/}
            text-white'>
                    <h3>{name}</h3>
                    <img className='h-26 p-3' src={logo} alt="" />
                    <p>Total quiz: <small>{total}</small></p>
                <Link to={`quiz/${id}`}>
                    <button className='
                    bg-gradient-to-r from-red-200 to-green-200 text-black 
                    hover:bg-from-cyan-500 hover:to-blue-500
                    font-semibold rounded-md p-2 mt-5'
                    >Test Skill</button>
                </Link>
            </div>
        </div>
    );
};

export default QuizItem;