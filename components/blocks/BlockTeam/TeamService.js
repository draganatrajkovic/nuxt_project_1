const team = [
    {
        id: 1, 
        name: 'Sholom Rubin',
        position: 'Possition Worker Ipsum Title',
        img: '~/static/BlockTeam/worker_01.png'
    },
    {
        id: 2, 
        name: 'Jenna Blumberg',
        position: 'Possition Worker Ipsum Title',
        img: '~/static/BlockTeam/worker_01.png'
    },
    {
        id: 3, 
        name: 'Sholom Rubin 2',
        position: 'Possition Worker Ipsum Title',
        img: '~/static/BlockTeam/worker_01.png'
    },
    {
        id: 4, 
        name: 'Jenna Blumberg 2',
        position: 'Possition Worker Ipsum Title',
        img: '~/static/BlockTeam/worker_01.png'
    },
    {
        id: 5, 
        name: 'Sholom Rubin 3',
        position: 'Possition Worker Ipsum Title',
        img: '~/static/BlockTeam/worker_01.png'
    },
    {
        id: 6, 
        name: 'Jenna Blumberg 3',
        position: 'Possition Worker Ipsum Title',
        img: '~/static/BlockTeam/worker_01.png'
    }
];

export default class TeamService {
    all() {
        return team;
    }
    find(id) {
        return team.find(worker => worker.id == id)
    }
}

export const teamService = new TeamService()