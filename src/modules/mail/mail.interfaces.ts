export interface MailOptions {
    to: string;
    subject: string;
    text: string;
}

export interface MailProvider {
    sendMail(options: MailOptions): Promise<any>;
}