import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizItem from '../QuizItem/QuizItem';

const Home = () => {
    const quizList = useLoaderData();
    const {data} = quizList;
    // console.log(data[0]);
    return (
        <div>
            <h1 className='text-4xl font-semibold mb-20'>
                Choose a topic to test your skill
            </h1>
            {
                data.map(quizItem => <QuizItem
                    key={quizItem.id}
                    quizItem={quizItem}
                ></QuizItem>)
            }
        </div>
    );
};

export default Home;