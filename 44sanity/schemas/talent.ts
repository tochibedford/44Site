export default {
    name: 'talent',
    type: 'document',
    title: 'Talent',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'shortBio',
            type: 'string',
            title: 'Short Bio'
        },
        {
            name: 'profileImage',
            type: 'image',
            title: 'Profile Image'
        }
    ]
}