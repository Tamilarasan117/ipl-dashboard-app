// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamCardListData} = props
  const {id, name, teamImageUrl} = teamCardListData

  return (
    <li className="team-list-container">
      <Link to={`/team-matches/${id}`} className="team-list-link">
        <img src={teamImageUrl} alt={name} className="team-list-img" />
        <p className="team-list-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
