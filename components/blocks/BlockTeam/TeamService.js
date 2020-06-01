const team = [
    {
        id: 1, 
        name: 'Sholom Rubin',
        positionTitle: 'Possition Worker',
        positionDescription: 'Ipsum Title',
        img: 'worker_01.png'
    },
    {
        id: 2, 
        name: 'Jenna Blumberg',
        positionTitle: 'Possition Worker',
        positionDescription: 'Ipsum Title',
        img: 'worker_02.png'
    },
    {
        id: 3, 
        name: 'Sholom Rubin',
        positionTitle: 'Possition Worker',
        positionDescription: 'Ipsum Title',
        img: 'worker_03.png'
    },
    {
        id: 4, 
        name: 'Jenna Blumberg',
        positionTitle: 'Possition Worker',
        positionDescription: 'Ipsum Title',
        img: 'worker_04.png'
    },
    {
        id: 5, 
        name: 'Sholom Rubin',
        positionTitle: 'Possition Worker',
        positionDescription: 'Ipsum Title',
        img: 'worker_05.png'
    },
    {
        id: 6, 
        name: 'Jenna Blumberg',
        positionTitle: 'Possition Worker',
        positionDescription: 'Ipsum Title',
        img: 'worker_06.png'
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