import React from 'react';
import {Route, Routes} from "react-router-dom";

const Error_Hoc = ( {component: Component, path, ...rest} ) => {
    return (
        <>
            <Routes>
                <Route
                    {...rest}
                    path={path}
                    element={
                        <Component/>
                    }
                />
            </Routes>
        </>
    );
};

export default Error_Hoc;