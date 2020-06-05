const pendants = [
    {
        id: 1, 
        title: 'Light Source', 
        preformances: ['LED', 'Fluorescent', 'Tube light', 'Sun', 'Moon'],
    },
    {
        id: 2, 
        title: 'Wattage Power', 
        preformances: ['10 W', '20 W', '30 W', '40 W'],
    },
    {
        id: 3, 
        title: 'Location Rating', 
        preformances: ['ETL', 'CSA', 'UL', 'CE'],
    },
    {
        id: 4, 
        title: 'Options+Controls', 
        preformances: ['Basic', 'Simmer switches', 'Motion Sensors', 'Occupancy sensors', 'Networked'],
    },
    {
        id: 5, 
        title: 'Material', 
        preformances: ['Stainless Steel', 'Glass', 'Metal'],
    },
    {
        id: 6, 
        title: 'Diffuser Type', 
        preformances: ['Disc', 'Neutral', 'Trapezoid', 'Decorative', 'Other'],
    },
    {
        id: 7, 
        title: 'Product Series', 
        preformances: ['2015', '2016', '2017', '2018', '2019', '2020'],
    },
    {
        id: 8, 
        title: 'Product Quallity', 
        preformances: ['Bronze', 'Silver', 'Gold'],
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