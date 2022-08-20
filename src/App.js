// Importing Components
import Home from './components/Home';
import Addscenarios from './components/AddScenarios';
import Allscenarios from './components/AllScenarios';
import Addvehicle from './components/Addvehicle';
import Scenarios from './components/Scenarios';
import Addscenario from './components/Addscenario';
// Importing React Hooks
import { useState, useEffect } from 'react';
// Importing Packages
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";
import './App.css';
function App() {
    // All States
    const [scenarios, setTasks] = useState([]); // Task State
    const [showAddTask, setShowAddTask] = useState(false); // To reveal add task form
    // Pre-loader
    useEffect(() => {
        setTimeout(() => {
        }, 3500);
    }, [])
    // Local Storage fetched
    const getTasks = JSON.parse(localStorage.getItem("scenarioAdded"));
    useEffect(() => {
        if (getTasks == null) {
            setTasks([])
        } else {
            setTasks(getTasks);
        }//eslint-disable-next-line
    },[])
    // Add Scenario
    const addScenario = (scenario) => {
        const id = uuidv4();
        const newTask = { id, ...scenario }
        setTasks([...scenarios, newTask]);
        Swal.fire({
            icon: 'success',
            title: 'Yay...',
            text: 'You have successfully added a new scenario!'
        })
        localStorage.setItem("scenarioAdded", JSON.stringify([...scenarios, newTask]));
    }
    // Delete Scenario
    const deleteScenario = (id) => {
        const deleteScenario = scenarios.filter((scenario) => scenario.id !== id);
        setTasks(deleteScenario);
        Swal.fire({
            icon: 'success',
            title: 'Oops...',
            text: 'You have successfully deleted a scenario!'
        })
        localStorage.setItem("scenarioAdded", JSON.stringify(deleteScenario));
    }
    // Edit Scenario
    const editScenario = (id) => {
        const text = prompt("Scenario Name");
        const time = prompt("Scenario time");
        let data = JSON.parse(localStorage.getItem('scenarioAdded'));
        const myData = data.map(x => {
            if (x.id === id) {
                return {
                    ...x,
                    text: text,
                    time: time,
                    id: uuidv4()
                }
            }
            return x;
        })
        Swal.fire({
            icon: 'success',
            title: 'Yay...',
            text: 'You have successfully edited the scenario!'
        })
        localStorage.setItem("scenarioAdded", JSON.stringify(myData));
        window.location.reload();
    }
    return (
        <div className="container">
        <div className='div1'>
                        <Home showForm={() => setShowAddTask(!showAddTask)} changeTextAndColor={showAddTask} />
                        <Addscenarios showForm={() => setShowAddTask(!showAddTask)} changeTextAndColor={showAddTask} />
                        <Allscenarios showForm={() => setShowAddTask(!showAddTask)} changeTextAndColor={showAddTask} />
                        <Addvehicle showForm={() => setShowAddTask(!showAddTask)} changeTextAndColor={showAddTask} />
                        </div>
                        <div className='div2'>
                        {/* Add scenatio form */}
                        <h3>Scenario / add</h3>
                        {showAddTask && <Addscenario onSave={addScenario} />}
                        {/* scenario Counter */}
                        <h3>Number of scenarios: {scenarios.length}</h3>
                        {/* Displaying of scenarios */}
                        {
                            scenarios.length > 0 ?
                                (<Scenarios scenarios={scenarios} onDelete={deleteScenario} onEdit={editScenario} />) :
                                ('No scenario Found!')
                        }
                        </div>
                        <div className='div3'></div>
                        </div>
    )
}
export default App;


