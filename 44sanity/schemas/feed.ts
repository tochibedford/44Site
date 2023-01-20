export default {
    name: 'feed',
    type: 'document',
    title: 'Article',
    fields: [
        {
            name: 'publicationName',
            type: 'string',
            title: 'Publication Name',
            description: "The name of the Editorial that wrote the post. e.g. More Branches, Fader"
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'The title of the article'
        },
        {
            name: 'logo',
            type: 'image',
            title: 'Company Logo',
            description: 'The logo for the Editorial'
        },
        {
            name: 'link',
            type: 'url',
            title: 'Article Link',
            description: 'A valid link to the Article'
        }
    ]
}