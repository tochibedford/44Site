import { Rule, SchemaTypeDefinition } from "sanity";
const schema: SchemaTypeDefinition = {
    name: "dsp",
    title: "Digital Streaming Platform",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            description: "Name of the digitl streaming platform",
            validation: (rule: Rule) => rule.required()
        },
        {
            name: "icon",
            title: "Icon",
            type: "image",
            description: "Logo for the platform",
            validation: (rule: Rule) => rule.required()
        },

    ]
}
export default schema