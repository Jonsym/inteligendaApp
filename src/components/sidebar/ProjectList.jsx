import React, { useContext, useEffect } from 'react';

import { ChevronRightIcon } from '../Icons';
import { TasksContext } from '../../context/TasksContext';

const ProjectList = () => {

    const { getProjects, projects, errorProjects } = useContext(TasksContext);

    useEffect(() => {
        getProjects();
    }, [])

    return ( 
        <>
            
            <hr className="my-4 border-gray-100"/>
        </>
    );
}
 
export default ProjectList;