// Write your code here
import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class Home extends Component {
  state = {teamCardListData: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardListData()
  }

  getTeamCardListData = async () => {
    const response = await fetch(' https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({teamCardListData: updatedData, isLoading: false})
  }

  render() {
    const {teamCardListData, isLoading} = this.state

    return (
      <>
        <div className="home-main-container">
          <div className="ipl-logo-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo-img"
            />
            <h1 className="ipl-logo-name">IPL Dashboard</h1>
          </div>
          <ul className="team-card-list-container">
            {isLoading ? (
              <div testid="loader" className="loader-container">
                <Loader type="Oval" color="#ffffff" height={50} width={50} />
              </div>
            ) : (
              teamCardListData.map(eachTeam => (
                <TeamCard
                  teamCardListData={eachTeam}
                  key={eachTeam.id}
                  getTeamId={this.getTeamId}
                />
              ))
            )}
          </ul>
        </div>
      </>
    )
  }
}

export default Home
