import { useEffect, useState } from "react";
import axios from "axios";

const ViewTeam = () => {

    const [teams, setTeams] = useState([]);

    const loadTeams = async () => {
        try {
            const response = await axios.get(
            "http://localhost:3000/view-all"
            );

            setTeams(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {

        loadTeams();

    }, []);

  return (

    <div className="container mt-4">

      <div className="card shadow">

        <div className="card-header bg-success text-white">

          <h3 className="text-center">
            Registered Teams
          </h3>

        </div>

        <div className="card-body">

          <div className="table-responsive">

            <table className="table table-bordered table-striped">

              <thead className="table-dark">

                <tr>

                  <th>Team ID</th>
                  <th>Team Name</th>
                  <th>Leader</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>College</th>
                  <th>Members</th>
                  <th>Project</th>
                  <th>Track</th>
                  <th>Technology</th>
                  <th>Mentor</th>
                  <th>Date</th>
                  <th>Table</th>

                </tr>

              </thead>

              <tbody>

                {

                  teams.map((team) => (

                    <tr key={team._id}>

                      <td>{team.teamId}</td>
                      <td>{team.teamName}</td>
                      <td>{team.teamLeaderName}</td>
                      <td>{team.leaderEmail}</td>
                      <td>{team.leaderPhone}</td>
                      <td>{team.collegeName}</td>
                      <td>{team.numberOfMembers}</td>
                      <td>{team.projectTitle}</td>
                      <td>{team.problemStatementTrack}</td>
                      <td>{team.technologyStack}</td>
                      <td>{team.mentorName}</td>
                      <td>{team.registrationDate}</td>
                      <td>{team.tableStationNumber}</td>

                    </tr>

                  ))

                }

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

  );

};

export default ViewTeam;