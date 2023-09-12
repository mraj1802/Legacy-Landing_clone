import mail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

mail.setApiKey(process.env.SEND_GRID_KEY);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  const message = `
                  <strong>NAME:</strong> ${body.name}\r<br><br>
                  <strong>EMAIL:</strong> ${body.email}\r<br><br>
                  <strong>MESSAGE:</strong> ${body.message}\r\n
              `;
  const data = {
    to: "no-reply@legacysuite.com",
    from: "no-reply@legacysuite.com",
    subject: "New Message!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };
  mail.send(data);
  res.status(200).json({ status: "ok" });
}
