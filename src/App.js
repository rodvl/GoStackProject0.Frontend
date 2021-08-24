import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import api from './services/api';

import './App.css'

const App = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    const handleAddProject = async () => {
        const response = await api.post('projects', {
            title: `aplicativo ${Date.now()}`,
            owner: "Rodrigo"
        });

        setProjects([...projects, response.data]);
    };

    return <>
        <Header title="Home"/>

        <ul>
            {projects.map(e => <li key={e.id}>{e.title}</li>)}
        </ul>

        
        <button type="button" onClick={() => handleAddProject()}>Adicionar</button>
    </>
}

export default App;