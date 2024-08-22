// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <>
      <p className="latest-matched-latest-text">Latest Matches</p>
      <div className="latest-matche-container">
        <div className="latest-matche-card1">
          <div className="latest-match-details">
            <p className="latest-match-competing-name">{competingTeam}</p>
            <p className="latest-match-date">{date}</p>
            <p className="latest-match-venue">{venue}</p>
            <p className="latest-match-result">{result}</p>
          </div>
          <div className="latest-match-img-card">
            <img
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
              className="latest-match-team-logo"
            />
          </div>
        </div>
        <hr className="break" />
        <div className="latest-matche-card2">
          <p className="latest-match-innings-heading">First Innings</p>
          <p className="latest-match-innings">{firstInnings}</p>
          <p className="latest-match-innings-heading">Second Innings</p>
          <p className="latest-match-innings">{secondInnings}</p>
          <p className="latest-match-innings-heading">Man of The Match</p>
          <p className="latest-match-innings">{manOfTheMatch}</p>
          <p className="latest-match-innings-heading">Umpires</p>
          <p className="latest-match-innings">{umpires}</p>
        </div>
      </div>
    </>
  )
}

export default LatestMatch
