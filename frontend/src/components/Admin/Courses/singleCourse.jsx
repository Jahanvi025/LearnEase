import React, {useEffect, useState} from 'react';
import {PlusCircle, X} from 'lucide-react';
import {useLocation} from "react-router-dom";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
//Redux
import {useDispatch, useSelector} from "react-redux";
import {fetchCourseById} from "../../../redux/slice/admin/coursesSlice";
import {fetchContentByID} from "../../../redux/slice/admin/contentSlice";
import UploadContent from "../../uploadContent";

export default function SingleCoursePage() {
    const location = useLocation();
    const dispatch = useDispatch();
    const courseId = location.pathname.split("/")[3];

    useEffect(() => {
        dispatch(fetchCourseById(courseId));
    }, [dispatch, courseId]);

    const term = useSelector(state => state.courses.course);

    // console.log(term);
    const [course, setCourse] = useState({
        title: '',
        category: '',
        price: '',
        thumbnail: '',
        description: '',
        tags: [],
        syllabus: [],
        content: []
    });
    const contentDetail = useSelector(state => state.content.content);

    useEffect(() => {
        if (term) {
            setCourse(term.course);
        }
    }, [term]);


    useEffect(() => {
        if (course) {
            setCourse(course);
            // Fetch content details for each content ID
            course.content.forEach(( contentId ) => {
                dispatch(fetchContentByID({courseId, contentId}));
            });

        }
    }, [course, dispatch, courseId]);

    const [newTag, setNewTag] = useState('');
    const [newSyllabusItem, setNewSyllabusItem] = useState('');
    const [activeTab, setActiveTab] = useState('details');

    const handleInputChange = ( e ) => {
        setCourse({...course, [e.target.name]: e.target.value});
    };

    const handleAddTag = () => {
        if (newTag && !course.tags.includes(newTag)) {
            setCourse({...course, tags: [...course.tags, newTag]});
            setNewTag('');
        }
    };

    const handleRemoveTag = ( tag ) => {
        setCourse({...course, tags: course.tags.filter(t => t !== tag)});
    };

    const handleAddSyllabusItem = () => {
        if (newSyllabusItem) {
            setCourse({...course, syllabus: [...course.syllabus, newSyllabusItem]});
            setNewSyllabusItem('');
        }
    };

    const handleRemoveSyllabusItem = ( item ) => {
        setCourse({...course, syllabus: course.syllabus.filter(i => i !== item)});
    };


    return (
        <div className="container mx-auto py-8 px-4 max-w-4xl">
            <h1 className="text-3xl font-bold mb-8">Course: {course.title}</h1>

            <div className="mb-4">
                <div className="flex border-b border-gray-200">
                    <button
                        className={`py-2 px-4 ${activeTab === 'details' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                        onClick={() => setActiveTab('details')}
                    >
                        Course Details
                    </button>
                    <button
                        className={`py-2 px-4 ${activeTab === 'content' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                        onClick={() => setActiveTab('content')}
                    >
                        Content
                    </button>
                </div>
            </div>

            {activeTab === 'details' && (
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Course Details</h2>
                    <p className="text-gray-600 mb-6">Edit the main information about the course</p>
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                                <input id="title" name="title" value={course.title} onChange={handleInputChange}
                                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"/>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="category"
                                       className="block text-sm font-medium text-gray-700">Category</label>
                                <input id="category" name="category" value={course.category}
                                       onChange={handleInputChange}
                                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"/>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                                <input id="price" name="price" value={course.price} onChange={handleInputChange}
                                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"/>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">Thumbnail
                                    URL</label>
                                <input id="thumbnail" name="thumbnail" value={course.thumbnail}
                                       onChange={handleInputChange}
                                       className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"/>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="description"
                                   className="block text-sm font-medium text-gray-700">Description</label>
                            <ReactQuill
                            id="description"
                            value={course.description}
                            onChange={(value) => handleInputChange({target: {name: 'description', value}})}
                            modules={{
                                toolbar: [
                                    [{ 'header': [1, 2, 3, false] }],
                                    ['bold', 'italic', 'underline', 'strike'],
                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                    ['clean']
                                ]
                            }}
                            formats={[
                                'header', 'bold', 'italic', 'underline', 'strike',
                                'list', 'bullet', 'link', 'image'
                            ]}
                            />
                            {/*<textarea id="description" name="description" value={course.description}*/}
                            {/*          onChange={handleInputChange} rows={4}*/}
                            {/*          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"/>*/}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Tags</label>
                            <div className="flex flex-wrap gap-2">
                                {course.tags.map(( tag, index ) => (
                                    <span key={index}
                                          className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm flex items-center">
                                        {tag}
                                        <button onClick={() => handleRemoveTag(tag)}
                                                className="ml-1 text-gray-500 hover:text-gray-700">
                                            <X className="h-3 w-3"/>
                                        </button>
                                    </span>
                                ))}
                                <div className="flex">
                                    <input
                                        value={newTag}
                                        onChange={( e ) => setNewTag(e.target.value)}
                                        placeholder="New tag"
                                        className="w-32 rounded-l-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                    />
                                    <button onClick={handleAddTag}
                                            className="bg-blue-500 text-white px-2 py-1 rounded-r-md hover:bg-blue-600">
                                        <PlusCircle className="h-4 w-4"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Syllabus</label>
                            <ul className="list-disc list-inside space-y-1">
                                {course.syllabus.map(( item, index ) => (
                                    <li key={index} className="flex items-center justify-between">
                                        <span>{item}</span>
                                        <button
                                            onClick={() => handleRemoveSyllabusItem(item)}
                                            className="text-gray-500 hover:text-gray-700"
                                        >
                                            <X className="h-4 w-4"/>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex">
                                <input
                                    value={newSyllabusItem}
                                    onChange={( e ) => setNewSyllabusItem(e.target.value)}
                                    placeholder="New syllabus item"
                                    className="flex-grow rounded-l-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                                />
                                <button onClick={handleAddSyllabusItem}
                                        className="bg-blue-500 text-white px-2 py-1 rounded-r-md hover:bg-blue-600">
                                    <PlusCircle className="h-4 w-4"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <button onClick={() => console.log('Save course:', course)}
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Save Changes
                        </button>
                    </div>
                </div>
            )}

            {activeTab === 'content' && (
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">Course Content</h2>
                    <p className="text-gray-600 mb-6">Manage and upload course content</p>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Current Content</label>
                            <ul className="list-disc list-inside space-y-1">
                                {/* Ensure each content is displayed only once */}
                                {Array.isArray(contentDetail) && contentDetail.map(( content, index ) => (
                                    <li key={index} className="flex items-center justify-between">
                                        <div>
                                            <p><strong>Title:</strong> {content.title}</p>
                                            <p><strong>Type:</strong> {content.contentType}</p>
                                            <p><strong>URL:</strong> <a href={content.contentUrl} target="_blank"
                                                                        rel="noopener noreferrer">{content.contentUrl}</a>
                                            </p>
                                            <div className='border-b border-gray-200'/>
                                        </div>
                                        <button
                                            onClick={() => console.log('Remove content', content._id)}
                                            className="text-gray-500 hover:text-gray-700"
                                        >
                                            <X className="h-4 w-4"/>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <UploadContent courseId={courseId}/>
                    </div>
                </div>
            )}
        </div>
    );
}