import { ConfigService } from "@nestjs/config";
import { MailtrapClient } from "mailtrap";
import { MailOptions, MailProvider } from "../mail.interfaces";
import { IS_PROD } from "src/config/app.config";

export class MailtrapProvider implements MailProvider {
    constructor(
        private readonly config: ConfigService,
        private readonly client: MailtrapClient 
    ) { }

    public async sendMail(options: MailOptions) {
        if (!IS_PROD) { console.log(`email to ${options.to}: ${options.text}`); return }

        return await this.client.send({
            from: {
                email: this.config.get<string>('SMTP_FROM_ADDRES')!,
            },
            to: [{ email: options.to }],
            subject: options.subject,
            text: options.text,
        });
    }
}