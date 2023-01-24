import { Rule, SchemaTypeDefinition } from "sanity"

const schema: SchemaTypeDefinition = {
    name: 'work',
    type: 'document',
    title: 'Work',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'Title of this work',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'contributor',
            type: 'array',
            title: 'Contributor',
            of: [{ type: 'reference', to: [{ type: 'talent' }] }],
            description: 'Name of the contributor in 44 that was involved in this work',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'artistName',
            type: 'string',
            title: 'Artist Name',
            description: 'Name of the artist on the song/instrumental as seen on streaming services',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'features',
            type: 'array',
            of: [{ type: 'string' }],
            title: 'Features',
            description: 'A list of features that were on the song/project'
        },
        {
            name: 'cover',
            type: 'image',
            title: 'Cover Art',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "links",
            title: "Links",
            type: "array",
            of: [{
                name: "dspLinks",
                title: "DSP Links",
                type: "object",
                description: "Valid link to the song/project on the DSP",
                fields: [
                    { name: "DSP", type: "reference", to: [{ type: "dsp", validation: (rule: Rule) => rule.required() }] },
                    { name: "dspLink", type: "url", validation: (rule: Rule) => rule.required() }
                ]
            }]
        }
    ]
}

export default schema