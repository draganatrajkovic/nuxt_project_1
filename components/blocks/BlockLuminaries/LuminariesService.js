const luminaries = [
    {
        id: 0, 
        title: 'Earned, not inherited',
        content: 'It never occurred to us to ride our rich history or glowing reputation. We believe there is no faster line to bright ideas than a perpetually bootstrapping philosophy. Our startup mentality keeps us hustling to do things better, take on the status quo, challenge what tech can do, and turn our industry knowledge into industry change.',
        images: ['slider_1_1.png', 'slider_1_2.png', 'slider_1_3.png'],
    },
    {
        id: 1, 
        title: 'Willing, not willful',
        content: 'We believe there is no faster line to bright ideas than a perpetually bootstrapping philosophy. Our startup mentality keeps us hustling to do things better, take on the status quo, challenge what tech can do, and turn our industry knowledge into industry change.',
        images: ['slider_2_1.png', 'slider_2_2.png', 'slider_2_3.png'],
        imgTest: 'slider_2_1.png',
    },
    {
        id: 2, 
        title: 'Communal, not (just) corporate',
        content: 'There is no faster line to bright ideas than a perpetually bootstrapping philosophy. Our startup mentality keeps us hustling to do things better, take on the status quo, challenge what tech can do, and turn our industry knowledge into industry change.',
        images: ['slider_3_1.png', 'slider_3_2.png', 'slider_3_3.png'],
        imgTest: 'slider_3_1.png',
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