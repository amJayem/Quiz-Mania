import { faFaceTired } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuestionAndOptions = ({qstn}) => {
    const {question,correctAnswer,options} = qstn;

    const handlerCheckAnswer=(ans)=>{
        if(ans === correctAnswer){
            toast.success("Correct Answer")
        }
        else {
            toast.warn('Wrong Answer!!');
        }
    }

    return (
        <div className='bg-blue-200 m-10 p-5 border-none rounded-md'>
            <div className='flex justify-between items-center'>
                <h1 className='grow h-14 text-2xl font-semibold'>{question}</h1>
                {/* <p>Answer: {correctAnswer}</p> */}
                <FontAwesomeIcon 
                className='cursor-pointer'
                icon={faFaceTired}></FontAwesomeIcon>
            </div>
            {
                options.map(option=> 
                <div className='bg-blue-300 rounded-lg m-1 hover:bg-blue-50'>
                    <div className='
                        text-left mx-auto my-0 w-64 p-3 border-solid
                    '>
                        <ul>
                            <li className='font-semibold cursor-pointer'
                                onClick={()=> handlerCheckAnswer(option)}
                            >{option}</li>
                            <ToastContainer
                                position="top-right"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="dark"
                            />
                        </ul>
                    </div>
                </div>)
            }
        </div>
    );
};

export default QuestionAndOptions;