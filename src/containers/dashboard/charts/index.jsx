import React, { useContext } from 'react';

import LastDays from './LastDays';
import Overview from './Overview';
import TopMembers from './TopMembers';

import Card from '../../../components/Card';
import Spinner from '../../../components/Spinner';
import { TasksContext } from '../../../context/TasksContext';

const ChartsContainer = () => {

    const { tasks, loadingTasks } = useContext(TasksContext)

    return (
    <div className="block grid-cols-12 gap-6 md:grid">
        <div className="md:col-span-6 lg:col-span-4">
            <Card>
                <Card.Header>Vista general</Card.Header>
                <Card.Body>
                    <p className="mb-2 text-gray-400">Total de actividades completadas y pendientes.</p>
                    { loadingTasks ? <Spinner height="200" loading={true} /> :  <Overview tasks={tasks}/> }
                </Card.Body>
            </Card>
        </div>
        <div className="md:col-span-6 lg:col-span-4">
            <Card>
                <Card.Header>Completadas</Card.Header>
                <Card.Body>
                    <p className="mb-2 text-gray-400">Actividades completadas.</p>
                    { loadingTasks ? <Spinner height="200" loading={true}/> :  <LastDays tasks={tasks}/> }
                </Card.Body>
            </Card>
        </div>
        

    </div>
    )
}

export default ChartsContainer;