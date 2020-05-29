const luminaries = [
    {
        id: 1, 
        title: 'Earned, not inherited',
        content: 'It never occurred to us to ride our rich history or glowing reputation. We believe there is no faster line to bright ideas than a perpetually bootstrapping philosophy. Our startup mentality keeps us hustling to do things better, take on the status quo, challenge what tech can do, and turn our industry knowledge into industry change.'
    },
    {
        id: 2, 
        title: 'Willing, not willful',
        content: 'We believe there is no faster line to bright ideas than a perpetually bootstrapping philosophy. Our startup mentality keeps us hustling to do things better, take on the status quo, challenge what tech can do, and turn our industry knowledge into industry change.'
    },
    {
        id: 3, 
        title: 'Communal, not (just) corporate',
        content: 'There is no faster line to bright ideas than a perpetually bootstrapping philosophy. Our startup mentality keeps us hustling to do things better, take on the status quo, challenge what tech can do, and turn our industry knowledge into industry change.'
    }
]

export default class LuminariesService {
    all() {
        return luminaries;
    }
    find(id) {
        return luminaries.find(lum => lum.id == id)
    }
}

export const luminariesService = new LuminariesService()