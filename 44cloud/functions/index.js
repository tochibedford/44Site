const functions = require("firebase-functions");
const sanityClient = require("@sanity/client");

exports.addUser = functions.https.onRequest((req, res) => {
  const formData = req.body;
  console.log("Received form data:", formData);

  const client = sanityClient.createClient({
    projectId: process.env.SANITY_ID,
    dataset: process.env.SANITY_DATASET,
    token: process.env.SANITY_TOKEN,
    useCdn: false,
    apiVersion: "2023-01-20",
  });

  const data = {
    _type: "user",
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
  };

  client
      .create(data)
      .then((res) => console.log("Document created:", res))
      .catch((err) => console.error("Error creating document:", err));

  res.send("Form submitted successfully!");
});
