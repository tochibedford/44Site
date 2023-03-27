import client from "@sanity/client"

export default client({
    projectId: "10mrxkqq",
    dataset: "production",
    useCdn: false,
    apiVersion: "2023-01-20"
})