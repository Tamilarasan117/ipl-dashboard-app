// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatches} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = recentMatches

  const statusClassName = matchStatus === 'Won' ? 'match-won' : 'match-loss'

  return (
    <>
      <li className="recent-match-list">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="recent-match-competing-logo"
        />
        <p className="recent-match-competing-name">{competingTeam}</p>
        <p className="recent-match-result">{result}</p>
        <p className={`recent-match-status ${statusClassName}`}>
          {matchStatus}
        </p>
      </li>
    </>
  )
}

export default MatchCard
