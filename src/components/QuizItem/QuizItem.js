import React from 'react';
import { Link } from 'react-router-dom';
import './QuizList.css';

const QuizItem = ({quizItem}) => {
    const {name,logo,total} = quizItem;
    // console.log(quizItem.id == 5 ? logo:'null');
    return (
        <div className=''>
            <div className='
            flex flex-col justify-center h-36 w-36 mx-auto mb-5 my-0 p-6
            ring-4 rounded-lg 
            bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-500
            text-white'>
                {/* <img src={quizItem.id == 5 ? logo:'null'} alt="" /> */}
                <Link>
                    <h3>{name}</h3>
                    <img className='h-26' src={logo} alt="" />
                    <p>Total quiz: <small>{total}</small></p>
                </Link>
            </div>
        </div>
    );
};

export default QuizItem;