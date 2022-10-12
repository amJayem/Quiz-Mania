import {  faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuestionAndOptions = ({qstn}) => {
    const {question,correctAnswer,options} = qstn;
    const handlerCheckAnswer=(ans)=>{
        if(ans === correctAnswer){
            toast.success("Correct Answer");
        }
        else {
            toast.warn('Wrong Answer!!');
        }
    };
    const handlerShowCorrectAns = () =>{
        toast.info(`Correct Answer is: ${correctAnswer}`);
    };

    return (
        <div className='bg-blue-200 m-11
                        lg:mx-64 lg:my-16 
                        p-5 border-none rounded-md'>
            <div className=' '>
                <FontAwesomeIcon 
                className='flex cursor-pointer'
                onClick={handlerShowCorrectAns}
                icon={faEye}></FontAwesomeIcon>
                <h1 className='text-xl font-semibold P-2'>{question}</h1>
                {/* <p>Answer: {correctAnswer}</p> */}
            </div>
            <div className='mt-5'>{
                options.map(option=> 
                <div className='bg-blue-300 rounded-lg m-1 hover:bg-blue-50'>
                    <div className='text-left md:w-full p-3 border-solid'>
                        <ul>
                            <li className='font-semibold cursor-pointer text-center'
                                onClick={()=> handlerCheckAnswer(option)}
                            >{option}</li>
                            <ToastContainer
                                theme="dark"
                            />
                        </ul>
                    </div>
                </div>)
            }</div>
        </div>
    );
};

export default QuestionAndOptions;