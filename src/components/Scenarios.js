import Scenario from './Scenario';
import "../index.css"
const Scenarios = ({ scenarios, onDelete, onEdit }) => {
  return (
    <>
      {
        scenarios.map((scenario) => (
          <Scenario key={scenario.id} scenario={scenario} onDelete={onDelete} onEdit={onEdit} />
        ))
      }
    </>
    )
}
export default Scenarios;
