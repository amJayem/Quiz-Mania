import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizItem from '../QuizItem/QuizItem';

const Home = () => {
    const quizList = useLoaderData();
    const {data} = quizList;
    // console.log(data[0]);
    return (
        <div>
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