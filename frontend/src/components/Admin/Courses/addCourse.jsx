import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {BookOpen, ChevronRight, DollarSign, FileText, Hash, List} from 'lucide-react'

const AddCourse = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('basic');
    const [course, setCourse] = useState({
        title: '',
        description: '',
        category: '',
        price: 'Free',
        tags: [],
        syllabus: [],
        content: [],
    });

    const handleChange = ( e ) => {
        const {name, value} = e.target;
        setCourse(( prev ) => ({...prev, [name]: value}));
    };

    const handleArrayChange = ( e, field ) => {
        const values = e.target.value.split(',').map(( item ) => item.trim());
        setCourse(( prev ) => ({...prev, [field]: values}));
    };
    const handleTabChange = (newTab) => {
        setActiveTab(newTab);
    };
    const handleSubmit = async ( e ) => {
        e.preventDefault();

        console.log('Submitting course:', course);
        // Here you would typically send the course data to your API
        // navigate('/courses')
    }
    return (
        <>
            <div className=' w-full bg-slate-200 py-1'>
                <div className='container mx-auto items-center my-5'>
                    <div className='py-5 flex items-center'>
                        <div className=' flex  text-slate-400  gap-5 '>
                            <Link to='/admin/courses'>
                                <p className='hover:border-b hover:border-slate-400'> My Courses </p>
                            </Link>
                            <ChevronRight className='h-5 w-5 items-center flex'/>
                            <Link to='/admin/add-course'>
                                <p className='hover:border-b hover:border-slate-400'> Add New Course </p>
                            </Link>
                        </div>
                    </div>

                    <div className=' py-4'>
                        <div className='items-center flex'>
                            <h1 className='text-2xl  text-slate-900'>Create New Course</h1>
                        </div>
                        <div className='border-b border-slate-400 py-4'></div>
                        <div className="max-w-6xl mx-auto py-12 px-4">
                            <div className="w-full bg-white shadow-md rounded-xl p-6">
                                <div className="w-full mb-8  p-10 ">
                                    <div
                                        className="flex items-center gap-4  bg-slate-100 py-2 px-5 rounded-xl mx-auto ">
                                        <div onClick={() => setActiveTab('basic')}
                                             className={`flex-1 font-semibold text-center ${activeTab === 'basic' ? 'text-white bg-slate-800 px-2 py-1 rounded-md ' : 'text-slate-400'}`}>
                                            Basic Details
                                        </div>
                                        <div onClick={() => setActiveTab('content')}
                                             className={`flex-1 font-semibold text-center ${activeTab === 'content' ? 'text-white bg-slate-800 px-2 py-1 rounded-md ' : 'text-slate-400'}`}>
                                            Content
                                        </div>
                                        <div onClick={() => setActiveTab('pricing')}
                                             className={`flex-1 font-semibold text-center ${activeTab === 'pricing' ? 'text-white bg-slate-800 px-2 py-1 rounded-md ' : 'text-slate-400'}`}>
                                            Pricing
                                        </div>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    {activeTab === 'basic' && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="title" className="text-lg font-semibold">
                                                    Course Title
                                                </label>
                                                <div className="relative">
                                                    <BookOpen className="absolute left-3 top-3 h-5 w-5 text-gray-400"/>
                                                    <input
                                                        id="title"
                                                        name="title"
                                                        required
                                                        value={course.title}
                                                        onChange={handleChange}
                                                        className="pl-10 p-2 border border-gray-300 rounded w-full"
                                                        placeholder="Enter course title"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="category" className="text-lg font-semibold">
                                                    Category
                                                </label>
                                                <div className="relative">
                                                    <select
                                                        id="category"
                                                        name="category"
                                                        onChange={( e ) => setCourse(( prev ) => ({
                                                            ...prev,
                                                            category: e.target.value
                                                        }))}
                                                        className="p-2 border border-gray-300 rounded w-full"
                                                    >
                                                        <option value="" disabled selected>
                                                            Select a category
                                                        </option>
                                                        <option value="programming">Programming</option>
                                                        <option value="design">Design</option>
                                                        <option value="business">Business</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="space-y-2 md:col-span-2">
                                                <label htmlFor="description" className="text-lg font-semibold">
                                                    Description
                                                </label>
                                                <div className="relative">
                                                    <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400"/>
                                                    <textarea
                                                        id="description"
                                                        name="description"
                                                        required
                                                        value={course.description}
                                                        onChange={handleChange}
                                                        className="pl-10 p-2 border border-gray-300 rounded w-full min-h-[100px]"
                                                        placeholder="Describe your course"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2 md:col-span-2">
                                                <label htmlFor="tags" className="text-lg font-semibold">
                                                    Tags
                                                </label>
                                                <div className="relative">
                                                    <Hash className="absolute left-3 top-3 h-5 w-5 text-gray-400"/>
                                                    <input
                                                        id="tags"
                                                        name="tags"
                                                        value={course.tags.join(', ')}
                                                        onChange={( e ) => handleArrayChange(e, 'tags')}
                                                        className="pl-10 p-2 border border-gray-300 rounded w-full"
                                                        placeholder="e.g. javascript, react, web development"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'content' && (
                                        <div className="space-y-6">
                                            <div className="space-y-2">
                                                <label htmlFor="syllabus" className="text-lg font-semibold">
                                                    Syllabus
                                                </label>
                                                <div className="relative">
                                                    <List className="absolute left-3 top-3 h-5 w-5 text-gray-400"/>
                                                    <textarea
                                                        id="syllabus"
                                                        name="syllabus"
                                                        value={course.syllabus.join(', ')}
                                                        onChange={( e ) => handleArrayChange(e, 'syllabus')}
                                                        className="pl-10 p-2 border border-gray-300 rounded w-full min-h-[100px]"
                                                        placeholder="Enter syllabus items (comma-separated)"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="content" className="text-lg font-semibold">
                                                    Content
                                                </label>
                                                <div className="relative">
                                                    <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400"/>
                                                    <textarea
                                                        id="content"
                                                        name="content"
                                                        value={course.content.join(', ')}
                                                        onChange={( e ) => handleArrayChange(e, 'content')}
                                                        className="pl-10 p-2 border border-gray-300 rounded w-full min-h-[100px]"
                                                        placeholder="Enter content items (comma-separated)"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'pricing' && (
                                        <div className="space-y-2">
                                            <label htmlFor="price" className="text-lg font-semibold">
                                                Price
                                            </label>
                                            <div className="relative">
                                                <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400"/>
                                                <input
                                                    id="price"
                                                    name="price"
                                                    value={course.price}
                                                    onChange={handleChange}
                                                    className="pl-10 p-2 border border-gray-300 rounded w-full"
                                                    placeholder="Free or enter a price"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex justify-between items-center pt-6 border-t">
                                        <button
                                            type="button"
                                            className={`px-4 py-2 border border-gray-300 rounded ${
                                                activeTab === 'basic' ? 'text-gray-400 cursor-not-allowed ' : 'bg-blue-600 text-white'
                                            } `}
                                            onClick={() =>
                                                setActiveTab(
                                                    activeTab === 'basic' ? 'basic' : activeTab === 'content' ? 'basic' : 'content'
                                                )
                                            }
                                        >
                                            Previous
                                        </button>
                                        {activeTab === 'pricing' ? (
                                            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
                                                Create Course
                                            </button>
                                        ) : (
                                            <button
                                                type="button"
                                                className="px-4 py-2 bg-blue-600 text-white rounded"
                                                onClick={() =>
                                                    handleTabChange(activeTab === 'basic' ? 'content' : 'pricing')
                                                }>
                                                Next
                                            </button>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddCourse;