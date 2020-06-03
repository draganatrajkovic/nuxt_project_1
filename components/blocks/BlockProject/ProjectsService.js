const projects = [
    {
        id: 1, 
        icon: 'project_icon_01.png',
        title: 'Designed-to-order', 
        content: 'Because all our products are made-to-order, any requested tweaks, replacements, or customizations are easy to render and implement, including:',
        list: ['Styles', 'Finishes', 'Lenses', 'Lamp Types', 'Wattages'], 
        noteTitle: 'It’s all done in-house', 
        noteContent: '500+ models. 1,000,000+ options.The choice is yours - we’ll light the way.', 
        button: 'View custom capabilities', 
        img: 'product_gradient_01.png'
    },
    {
        id: 2, 
        icon: 'project_icon_02.png',
        title: 'Centrally-controlled quality', 
        content: 'Any requested tweaks, replacements, or customizations are easy to render and implement, including:',
        list: ['Lenses', 'Lamp Types', 'Wattages'], 
        noteTitle: 'It’s all done in-house', 
        noteContent: '500+ models. 1,000,000+ options.The choice is yours - we’ll light the way.', 
        button: 'View custom capabilities',
        img: 'product_gradient_02.png'
    },
    {
        id: 3, 
        icon: 'project_icon_03.png',
        title: 'Excellence, Deivered', 
        content: 'Replacements, or customizations are easy to render and implement, including:',
        list: ['Finishes', 'Lenses', 'Lamp Types', 'Wattages'], 
        noteTitle: 'It’s all done in-house', 
        noteContent: '500+ models. 1,000,000+ options.The choice is yours - we’ll light the way.', 
        button: 'View custom capabilities',
        img: 'product_gradient_03.png'
    }
]

export default class ProjectsService {
    all() {
        return projects;
    }
    find(id) {
        return projects.find(project => project.id == id)
    }
}

export const projectsService = new ProjectsService()