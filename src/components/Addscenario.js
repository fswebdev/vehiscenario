import { useState } from 'react';
import Swal from "sweetalert2";
const Addscenario = ({ onSave }) => {
    const [text, setText] = useState('');
    const [time, setTime] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        if (!text && !time) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in your scenario name and scenario time or close the form'
            })
        } else if (!text && time) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in your scenario name'
            })
        } else if (text && !time) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Scenario is required'
            })
        } else {
            onSave({ text, time });
        }
        setText('');
        setTime('');
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Scenario Name</label>
                <input type="text" placeholder="Test Scenario" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Scenario Time (seconds)</label>
                <input type="text" placeholder="10" required value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
            <input type="submit" className="btn btn-block" value="Add" />
        </form>
    )
}
export default Addscenario;

  