const projects = [
    {
        id: 1, 
        icon: '~/static/BlockProject/project_01_icon.png',
        title: 'Designed-to-order', 
        content: 'Because all our products are made-to-order, any requested tweaks, replacements, or customizations are easy to render and implement, including:',
        list: ['Styles', 'Finishes', 'Lenses', 'Lamp Types', 'Wattages'], 
        noteTitle: 'It’s all done in-house', 
        noteContent: '500+ models. 1,000,000+ options.The choice is yours - we’ll light the way.', 
        button: 'View custom capabilities'
    },
    {
        id: 2, 
        icon: '~/static/BlockProject/project_02_icon.png',
        title: 'Centrally-controlled quality', 
        content: 'Any requested tweaks, replacements, or customizations are easy to render and implement, including:',
        list: ['Lenses', 'Lamp Types', 'Wattages'], 
        noteTitle: 'It’s all done in-house', 
        noteContent: '500+ models. 1,000,000+ options.The choice is yours - we’ll light the way.', 
        button: 'View custom capabilities'
    },
    {
        id: 3, 
        icon: '~/static/BlockProject/project_03_icon.png',
        title: 'Excellence, Delivered', 
        content: 'Replacements, or customizations are easy to render and implement, including:',
        list: ['Finishes', 'Lenses', 'Lamp Types', 'Wattages'], 
        noteTitle: 'It’s all done in-house', 
        noteContent: '500+ models. 1,000,000+ options.The choice is yours - we’ll light the way.', 
        button: 'View custom capabilities'
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