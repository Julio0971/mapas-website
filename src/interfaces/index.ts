export interface Project {
    id: number
    title: string
    description: string
    municipality: string
    layers: Layer[]
}

export interface Layer {
    id: number
    title: string
    description: string
    file: string
    original_filename: string
    is_basis: 1 | 0
    projects: Project[]
}