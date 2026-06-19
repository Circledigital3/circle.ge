import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import https from "https";

dotenv.config();

function sendFormSubmitFallback(targetEmail: string, data: any): Promise<boolean> {
  return new Promise((resolve) => {
    const payload = JSON.stringify({
      _subject: `[Circle.ge] ახალი საკონტაქტო ფორმა - ${data.name}`,
      _replyto: data.email,
      "სახელი და გვარი (Name)": data.name,
      "კომპანია / ბრენდი (Company)": data.brandName || "არ არის მითითებული",
      "ელ-ფოსტა (Email)": data.email,
      "საჭირო მიმართულება (Service)": data.service,
      "ბიუჯეტი (Budget)": data.budget || "N/A",
      "შეტყობინება (Message)": data.message || "შეტყობინება ცარიელია",
    });

    const options = {
      hostname: "formsubmit.co",
      port: 443,
      path: `/ajax/${targetEmail}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Content-Length": Buffer.byteLength(payload),
      },
    };

    const req = https.request(options, (res) => {
      let body = "";
      res.on("data", (chunk) => {
        body += chunk;
      });
      res.on("end", () => {
        console.log("FormSubmit.co Response Body:", body);
        if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
          resolve(true);
        } else {
          console.error(`FormSubmit.co failed with status code ${res.statusCode}`);
          resolve(false);
        }
      });
    });

    req.on("error", (error) => {
      console.error("FormSubmit.co Request Error:", error);
      resolve(false);
    });

    req.write(payload);
    req.end();
  });
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parser limit and type
  app.use(express.json());

  // API contact route
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, brandName, email, service, message, budget } = req.body;

      console.log("=== Contact Form Submission Received ===");
      console.log(`Name: ${name}`);
      console.log(`Brand: ${brandName}`);
      console.log(`Client Email: ${email}`);
      console.log(`Service / Vertical: ${service}`);
      console.log(`Budget: ${budget || 'N/A'}`);
      console.log(`Message: ${message}`);
      console.log("========================================");

      const targetEmail = "www.circle.ge@gmail.com";
      
      const host = process.env.SMTP_HOST;
      const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
      const user = process.env.SMTP_USER;
      const pass = process.env.SMTP_PASS;

      let emailSent = false;
      let smtpConfigured = false;
      let errorDetails = "";

      if (user && pass) {
        smtpConfigured = true;
        try {
          const transporter = nodemailer.createTransport({
            host: host || "smtp.gmail.com",
            port: port,
            secure: port === 465, // true for 465, false for other ports
            auth: {
              user: user,
              pass: pass,
            },
          });

          const mailOptions = {
            from: `"Circle.ge Site Notification" <${user}>`,
            to: targetEmail,
            subject: `[Circle.ge] ახალი საკონტაქტო ფორმა - ${name}`,
            text: `
ახალი საკონტაქტო მოთხოვნა საიტიდან!

სახელი და გვარი: ${name}
კომპანია / ბრენდი: ${brandName || 'არ არის მითითებული'}
ელ-ფოსტა: ${email}
საჭირო მიმართულება: ${service}
ბიუჯეტი: ${budget || 'N/A'}
შეტყობინება/მიზნები:
${message || 'შეტყობინება ცარიელია'}
            `,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #1E1E24; background-color: #0b0b0f; color: #ffffff;">
                <h2 style="color: #00F2FE; border-bottom: 2px solid #00F2FE; padding-bottom: 10px;">ახალი საკონტაქტო ფორმა</h2>
                <p style="margin-top: 15px;"><strong style="color: #a0a0ab;">სახელი და გვარი:</strong> <span style="font-size: 16px; font-weight: bold;">${name}</span></p>
                <p><strong style="color: #a0a0ab;">კომპანია / ბრენდი:</strong> ${brandName || 'არ არის მითითებული'}</p>
                <p><strong style="color: #a0a0ab;">კლიენტის ელ-ფოსტა:</strong> <a href="mailto:${email}" style="color: #00F2FE; text-decoration: none;">${email}</a></p>
                <p><strong style="color: #a0a0ab;">საჭირო მიმართულება:</strong> <span style="background-color: #1E1E24; padding: 3px 8px; border-radius: 4px; font-size: 13px;">${service}</span></p>
                <p><strong style="color: #a0a0ab;">ბიუჯეტი:</strong> ${budget || 'N/A'}</p>
                <div style="margin-top: 20px; padding: 15px; background-color: #101015; border-left: 4px solid #6A00FF; border-radius: 4px;">
                  <strong style="display: block; margin-bottom: 8px; color: #a0a0ab;">შეტყობინება / მიზნები:</strong>
                  <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message || 'შეტყობინება ცარიელია'}</p>
                </div>
                <div style="font-size: 11px; color: #50505b; margin-top: 25px; padding-top: 10px; border-t: 1px solid #1E1E24;">
                  ეს შეტყობინება ავტომატურად გამოიგზავნა Circle.ge საკონტაქტო ფორმიდან.
                </div>
              </div>
            `
          };

          await transporter.sendMail(mailOptions);
          emailSent = true;
          console.log(`Email successfully dispatched via SMTP to ${targetEmail}`);
        } catch (err: any) {
          console.error("Nodemailer failed to send email, trying FormSubmit.co fallback:", err);
          errorDetails = err.message || "Unknown SMTP error";
        }
      }

      // Fallback if SMTP not configured or failed
      if (!emailSent) {
        console.log("Using FormSubmit.co fallback API to dispatch email...");
        const fallbackSuccess = await sendFormSubmitFallback(targetEmail, {
          name,
          brandName,
          email,
          service,
          budget,
          message
        });
        if (fallbackSuccess) {
          emailSent = true;
          console.log(`Email successfully dispatched via FormSubmit.co to ${targetEmail}`);
        } else {
          console.error("FormSubmit.co fallback also failed.");
        }
      }

      return res.status(200).json({
        success: true,
        emailSent,
        smtpConfigured,
        errorDetails: errorDetails || undefined,
        message: emailSent 
          ? "Message sent to email successfully!" 
          : "Message saved to local inquiries panel. SMTP email sending is not configured (requires SMTP_USER and SMTP_PASS variables)."
      });
    } catch (error: any) {
      console.error("Error in /api/contact:", error);
      return res.status(500).json({
        success: false,
        error: error.message || "Internal server error"
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
