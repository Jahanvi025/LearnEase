
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createContent, resetUploadProgress, setUploadProgress } from '../redux/slice/admin/contentSlice'

export default function UploadContent({ courseId }) {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(null)

    // Redux
    const { loading, error, uploadProgress } = useSelector((state) => state.content)

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0])
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        if (file) {
            formData.append('video', file)
        }

        dispatch(
            createContent({
                courseId,
                contentData: formData,
                onUploadProgress: (progressEvent) => {
                    const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    dispatch(setUploadProgress(progress))
                },
            })
        )

        dispatch(resetUploadProgress())
    }

    return (
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">Upload Course Content</h2>
            </div>
            <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                            Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            value={title}
                            onChange={( e ) => setTitle(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={( e ) => setDescription(e.target.value)}
                            required
                            rows={4}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="content-upload" className="block text-sm font-medium text-gray-700">Upload New
                            Content</label>
                        <input
                            id="video"
                            type="file"
                            accept="video/*"
                            onChange={handleFileChange}
                            required
                               className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"/>
                    </div>

                    {loading ? (
                        <div className="space-y-2">
                            <div className="text-sm font-medium text-gray-700">Uploading... {uploadProgress}%</div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-blue-600 h-2.5 rounded-full"
                                         style={{width: `${uploadProgress}%`}}></div>
                                </div>
                                <p className="text-sm text-gray-600">
                                    {uploadProgress}% uploaded
                                </p>
                            </div>
                        </div>
                    ) : (
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Upload
                        </button>
                    )}

                    {error && (
                        <div className="bg-red-50 border-l-4 border-red-400 p-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                              clipRule="evenodd"/>
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-red-700">
                                        {error}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}