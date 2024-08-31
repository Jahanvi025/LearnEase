import React, {useState} from 'react';
import logo from '../../Assets/images/infinity (2).png'
import classNames from "classnames";


const AdminNavbar = () => {

    const [menu, setMenu] = useState("Overview");

    return (
        <>
            <nav className='w-full bg-black'>
                <div className='flex justify-between items-center mx-auto h-16 px-10'>
                    <div className='flex items-center gap-2'>
                        <div className='mx-auto px-2'>
                            <img src={logo} alt='logo' className='w-14 h-14'/>
                        </div>
                        <div className='text-2xl font-bold text-white font-mono'>Admin Panel</div>
                    </div>
                    <div
                         className='flex items-center gap-6 bg-slate-800 py-1.5 px-4 rounded-3xl mx-auto hover: cursor-pointer  '>
                        <div onClick={() => setMenu("Overview")} className={classNames('font-medium font-mono transition-all duration-500  ', {
                            'px-2 py-1 font-semibold bg-white text-black rounded-3xl ': menu === 'Overview',
                            'text-white': menu !== 'Overview'
                        })}>Overview
                        </div>
                        <div onClick={() => setMenu("Courses")} className={classNames('font-medium font-mono  transition-all duration-500  ',
                            {
                                'px-2 py-1 font-semibold bg-white text-black rounded-3xl ': menu === 'Courses',
                                'text-white': menu !== 'Courses'
                            }
                        )}>Courses
                        </div>
                        <div onClick={() => setMenu("Students")} className={classNames('font-medium font-mono  transition-all duration-500  ',
                            {
                                'px-2 py-1 font-semibold bg-white text-black rounded-3xl ': menu === 'Students',
                                'text-white': menu !== 'Students'
                            }
                        )}>Students</div>
                        <div onClick={() => setMenu("Updates")} className={classNames('font-medium font-mono  transition-all duration-500  ',
                            {
                                'px-2 py-1 font-semibold bg-white text-black rounded-3xl ': menu === 'Updates',
                                'text-white': menu !== 'Updates'
                            }
                        )}>Updates</div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='text-white font-mono'>Profile</div>
                        <div className='text-white font-mono'>Settings</div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default AdminNavbar;