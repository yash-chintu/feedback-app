import PropTypes from 'prop-types'
import Feedbackitem from './Feedbackitem'

function Feedbacklist({ feedback,handleDelete }) {
    if (!feedback || feedback.length === 0) {
        return <p>No Feeedback Yet  !</p>
    }
    return (
        <div className="feedback-list">
            {feedback.map((item) => (
                <Feedbackitem key={item.id} item={item} handleDelete={handleDelete}/>
        ))}</div>
    )
}


Feedbacklist.propTypes = {
    feedback: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
    })
    ),
}

export default Feedbacklist