const pendants = [
    {
        id: 1, 
        title: 'Light Source', 
        preformances: ['led', 'Fluorescent']
    },
    {
        id: 2, 
        title: 'Wattage Power', 
        preformances: ['led', 'Fluorescent']
    },
    {
        id: 3, 
        title: 'Location Rating', 
        preformances: ['led', 'Fluorescent']
    },
    {
        id: 4, 
        title: 'Options+Controls', 
        preformances: ['led', 'Fluorescent']
    },
    {
        id: 5, 
        title: 'Light Source', 
        preformances: ['led', 'Fluorescent']
    },
    {
        id: 6, 
        title: 'Diffuser Type', 
        preformances: ['led', 'Fluorescent']
    },
    {
        id: 7, 
        title: 'Product Series', 
        preformances: ['led', 'Fluorescent']
    },
    {
        id: 8, 
        title: 'Product Quallity', 
        preformances: ['led', 'Fluorescent']
    }
]

export default class PendantService {
    all() {
        return pendants;
    }
    find(id) {
        return pendants.find(pendant => pendant.id == id)
    }
}

export const pendantService = new PendantService()