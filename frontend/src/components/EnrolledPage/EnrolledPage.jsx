import React, {useEffect, useState} from 'react';
import ReactPlayer from "react-player";
import {useParams} from "react-router-dom";

//Redux
import {useSelector, useDispatch} from "react-redux";
import{fetchCourseById} from "../../redux/slice/admin/coursesSlice";
import {fetchContentByCourseID} from "../../redux/slice/admin/contentSlice";


const EnrolledPage = () => {
    const [selectedContent, setSelectedContent] = useState(null)
    console.log(`The selected content is:`, selectedContent);
    const {id} = useParams();
    const dispatch = useDispatch();
    console.log(id)

    const course = useSelector(state => state.courses);
    const content = useSelector(state => state.content);
    useEffect(() => {
        if(id){
            dispatch(fetchCourseById(id));
            dispatch(fetchContentByCourseID(id));
        }
    }, [dispatch, id]);

    if(course.status === 'loading' || course.status === 'idle'){
       return <h1>Loading...</h1>
    }
    if(course.status === 'failed'){
        return <h1>Failed to Load</h1>
    }

    return (
        <>
    <div className='container mx-auto py-10 bg-pink-50 h-screen'>
        <div className='flex flex-col h-screen '>
            <header className='p-4 border-b'>
                <h1 className='text-2xl font-bold px-10'>{course.course.course.title}</h1>
            </header>
            <main className='flex-1 flex'>
                <div className='w-1/4 p-4 border-r'>
                    <h2 className='text-2xl text-center font-bold my-3 mb-5'>Course Content</h2>
                    {content.content.map((item, index) => (
                        <ul key={index} className='my-10 px-4 '>
                            <button onClick={() => setSelectedContent(item)} className='text-center w-full'>

                            <li className='p-2  hover:bg-pink-500/50 transition-all rounded-md duration-300 active:bg-pink-800'>
                                {item.title}
                                </li>
                            </button>
                        </ul>
                    ))}

                </div>
                <div className='w-3/4 p-4'>
                    {selectedContent ? (
                        <div>

                            <h2 className='text-2xl text-center font-bold my-3'>{selectedContent.title}</h2>
                        <ReactPlayer
                            url={selectedContent.contentUrl}
                            controls
                            width='100%'
                            height='500px'

                            className='rounded-lg p-5 border-2'
                        />
                        </div>
                        ) : (
                        <div className=" ml-56 p-10 rounded-2xl w-fit flex items-center justify-center  border-2">
                        Select a lesson to start learning
                        </div>
                        )}


                </div>
            </main>
        </div>
    </div>
        </>
    );
};

export default EnrolledPage;