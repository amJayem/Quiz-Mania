import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionAndOptions from '../QuestionAndOptions/QuestionAndOptions';

const Quiz = () => {
    const quizData = useLoaderData();
    const {data} = quizData;
    const {id,total,name,logo,questions} = data;
    // console.log(questions[0].question);
    return (
        <div>
            <h1 className='text-4xl font-medium'>Test your <span className='font-bold'>{name}</span> skill</h1>
            <h1>Total Quiz: {total}</h1>
            <img className='mx-auto my-0 h-56 bg-blue-100' src={logo} alt="" />
            {
                questions.map(qstn=> <QuestionAndOptions
                    key={id}
                    qstn={qstn}
                ></QuestionAndOptions>)
            }
        </div>
    );
};

export default Quiz;