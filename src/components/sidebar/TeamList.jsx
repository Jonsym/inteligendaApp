import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { shuffle } from '../../helpers/utils';
import { TasksContext } from '../../context/TasksContext';

const TeamList = () => {
    const userCount = 6;
    
    const [tmp, setTmp] = useState([]);

    const { getUsers, users,  errorUsers } = useContext(TasksContext);
    useEffect(() => {
        getUsers();
    }, [])

    useEffect(() => {
        const randomize = shuffle([...users]);
        const firstTen = randomize
        setTmp([...firstTen].splice(0, userCount));
    }, [users])

    return ( 
        <>
            
            <hr className="my-8 border-gray-100 hidden"/>
        </>
    );
}
 
export default TeamList;