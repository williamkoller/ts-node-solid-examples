import nodemailer from 'nodemailer';
import { EnvEmail } from './config/env-email';

interface EmailService {
  sendEmail(from: string, to: string, subject: string, body: string): void;
}

class NodemailerEmailService implements EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: EnvEmail.SMTP_HOST,
      auth: {
        user: EnvEmail.SMTP_USER,
        pass: EnvEmail.SMTP_PASS,
      },
    });
  }

  async sendEmail(
    from: string,
    to: string,
    subject: string,
    body: string
  ): Promise<void> {
    const mailOptions: nodemailer.SendMailOptions = {
      from,
      to,
      subject,
      text: body,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent:', info);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error sending email:', error.message);
        if (error.message.includes('Authentication')) {
          console.error(
            'Authentication error. Please check your SMTP credentials.'
          );
        } else {
          console.error('Non-critical error occurred. Retrying...');
        }
      } else {
        console.error('Unexpected error sending email:', error);
      }
      throw error;
    }
  }
}

class EmailSender {
  private emailService: EmailService;

  constructor(emailService: EmailService) {
    this.emailService = emailService;
  }

  sendEmail(from: string, to: string, subject: string, body: string): void {
    this.emailService.sendEmail(from, to, subject, body);
  }
}

const emailService = new NodemailerEmailService();
const emailSender = new EmailSender(emailService);

emailSender.sendEmail(
  EnvEmail.SMTP_USER,
  'williamkoller30@gmail.com',
  'Hello',
  'This is a test email'
);
