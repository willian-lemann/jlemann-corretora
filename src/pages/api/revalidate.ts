import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.query.secret !== process.env.REVALIDATE_SECRET_TOKEN) {
    return response
      .status(401)
      .json({
        message: "Invalid token",
        token: process.env.REVALIDATE_SECRET_TOKEN,
      });
  }

  try {
    await response.revalidate("/");
    return response.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return response.status(500).send("Error revalidating");
  }
}
