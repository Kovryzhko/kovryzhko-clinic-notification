import { ConfigService } from "@nestjs/config";

export function getRmqConfig(config: ConfigService) {
    return {
        exchanges: [
            {
                name: 'auth',
                type: 'direct',
                createExchangeIfNotExists: true,
                options: {
                    durable: true, 
                },
            }, 
            {
                name: 'account',
                type: 'direct',
                createExchangeIfNotExists: true,
                options: {
                    durable: true,
                },
            },
        ],
        uri: config.getOrThrow<string>('RMQ_URL'),
        connectionInitOptions: { wait: true },
        enableControllerDiscovery: true,
    }
}