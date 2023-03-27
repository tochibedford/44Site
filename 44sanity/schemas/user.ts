export default {
    name: 'user',
    type: 'document',
    readOnly: true,
    fields: [
        {
            name: "firstName",
            type: "string",
            title: "First Name",
            description: "First name of user"
        },
        {
            name: "lastnameName",
            type: "string",
            title: "Last Name",
            description: "First name of user"
        },
        {
            name: "email",
            type: "email",
            title: "Email",
            description: "Email of user"
        },
    ],
}