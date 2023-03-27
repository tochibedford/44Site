export default {
    name: 'user',
    type: 'document',
    readOnly: true,
    fields: [
        {
            name: "firstName",
            type: "string",
            title: "First Name",
            description: "First name of user",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "lastName",
            type: "string",
            title: "Last Name",
            description: "Last name of user",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "email",
            type: "email",
            title: "Email",
            description: "Email of user",
            validation: (Rule: any) => Rule.required()
        },
    ],
}