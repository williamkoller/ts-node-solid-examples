export class EnvEmail {
  static readonly SMTP_HOST = process.env.SMTP_HOST ?? 'gmail';
  static readonly SMTP_USER = process.env.SMTP_USER ?? '';
  static readonly SMTP_PASS = process.env.SMTP_PASS ?? '';
}
