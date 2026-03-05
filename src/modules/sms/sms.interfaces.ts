export interface SmsOptions {
    phone: string;
    text: string;
}

export interface SmsProvider {
    sendSms(options: SmsOptions): Promise<any>;
}