import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import "../index.css"
const Scenario = ({ scenario, onDelete, onEdit }) => {
    return (
      <div>
        <div className="scenario">
          <div>
            <p className="scenarioName">
              <span className="textBold">Scenario Name:</span> {scenario.text}
            </p>
        <p className="scenarioTime"><span className="textBold">Scenario time:</span> {scenario.time}
            </p>
            </div>
            <div>
            <p><FaTimes onClick={() => onDelete(scenario.id)} className="delIcon" /></p>
          <p><FaPencilAlt onClick={() => onEdit(scenario.id)} className="editIcon" /></p>
          </div>
        </div>
      </div>
    )
}
export default Scenario;
