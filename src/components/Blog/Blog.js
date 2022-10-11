import React from 'react';

const Blog = () => {
    return (
        <div className=''>
          <h1 className='font-bold text-2xl mb-9 underline'>Some Question and Answer</h1>
          <div className='flex flex-col gap-3 w-2/3 mx-auto my-0 text-left pb-20'>
            <div>
              <li className='bg-blue-300 font-bold text-xl p-2 rounded-md'>
                What is the purpose of react router?
                <li className='list-decimal font-medium bg-green-200 p-3 
                rounded-md m-3'>
                  ReactJS Router is mainly used for developing Single 
                  Page Web Applications. React Router is used to define multiple 
                  routes in the application. When a user types a specific URL 
                  into the browser.</li>
                <li className='list-decimal font-medium bg-green-200 p-3 
                rounded-md m-3'>React Router is an API for React applications.
                  React Router uses dynamic routing.</li>
              </li>
            </div>
            
            <li className='bg-blue-300 font-bold text-xl p-2 rounded-md'>
              How does Context API works?
                <li className='list-decimal font-medium bg-green-200 p-3 
                rounded-md m-3'>
                  Context API is a way for a React app to effectively produce global
                   variables that can be passed around. This is the alternative 
                   to "prop drilling" or moving props from grandparent to child 
                   to parent, and so on.
                </li>
              </li>
            <li className='bg-blue-300 font-bold text-xl p-2 rounded-md'>
              Short description about useRef hook.
                <li className='list-decimal font-medium bg-green-200 p-3 
                rounded-md m-3'>
                  The useRef Hook allows you to persist values between renders. 
                  It can be used to store a mutable value that does not cause a 
                  re-render when updated. It can be used to access a DOM element 
                  directly. <i className='font-extralight text-xs'>~w3-schools</i>
                </li>
              </li>
          </div>
        </div>
    );
};

export default Blog;