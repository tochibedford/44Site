import client from "@sanity/client"

export default client({
    projectId: "10mrxkqq",
    dataset: "production",
    token: import.meta.env.VITE_SANITY_TOKEN,
    useCdn: false,
    apiVersion: "2023-01-20"
})