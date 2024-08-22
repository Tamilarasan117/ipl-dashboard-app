// Write your code here
// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamBannerUrl1: '',
    latestMatchDetails: [],
    recentMatches: [],
  }

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const {teamBannerUrl, latestMatchDetails, recentMatches} = updatedData

    const updatedLatestMatchData = {
      id: latestMatchDetails.id,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    const updatedResentMatches = recentMatches.map(eachMatch => ({
      id: eachMatch.id,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      date: eachMatch.date,
      firstInnings: eachMatch.first_innings,
      manOfTheMatch: eachMatch.man_of_the_match,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
      secondInnings: eachMatch.second_innings,
      umpires: eachMatch.umpires,
      venue: eachMatch.venue,
    }))

    this.setState({
      isLoading: false,
      teamBannerUrl1: teamBannerUrl,
      latestMatchDetails: updatedLatestMatchData,
      recentMatches: updatedResentMatches,
    })
  }

  renderTeamMatchDetailsAndLatestMatches = () => {
    const {teamBannerUrl1, latestMatchDetails} = this.state

    return (
      <div className="team-matches-container">
        <img
          src={teamBannerUrl1}
          alt="team banner"
          className="team-matches-banner-img"
        />
        <LatestMatch
          latestMatchDetails={latestMatchDetails}
          key={latestMatchDetails.id}
        />
        <ul className="resent-match-card-list-container">
          {this.renderTeamCardLists()}
        </ul>
      </div>
    )
  }

  renderTeamCardLists = () => {
    const {recentMatches} = this.state
    return recentMatches.map(eachMatch => (
      <MatchCard recentMatches={eachMatch} key={eachMatch.id} />
    ))
  }

  render() {
    const {isLoading} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    return (
      <div className={`team-matches-details-container ${id}`}>
        {isLoading ? (
          <div testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          this.renderTeamMatchDetailsAndLatestMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
