export default {
    name: 'talent',
    type: 'document',
    title: 'Talent',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'shortBio',
            type: 'string',
            title: 'Short Bio',
            validation: (Rule: any) => Rule.required().min(20).max(250)
        },
        {
            name: 'profileImage',
            type: 'image',
            title: 'Profile Image',
            validation: (Rule: any) => Rule.required()
        }
    ]
}