import { ConfigService } from "@nestjs/config";
import { MailtrapClient } from "mailtrap";
import { MailtrapProvider } from "../providers/mailtrap.provider";

export function createMailtrapProvider(config: ConfigService) {
    const client = new MailtrapClient({
        token: config.get<string>('SMTP_TOKEN')!,
        sandbox: true,
        testInboxId: 4425218
    });
    return new MailtrapProvider(config, client);
}