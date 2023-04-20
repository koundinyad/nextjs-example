export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: "Data fetched successfully!" });
  } else if (req.method === "POST") {
    res.status(200).json({ message: "Data posted successfully!" });
  } else {
    res.status(401).json({ message: "Unauthorized request" });
  }
}
