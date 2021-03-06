module.exports = pkg => ({
    description: pkg.description,
    env: {
        redisHost: {
            description: 'the Redis host',
            default: 'localhost'
        },
        redisPort: {
            description: 'the Redis port',
            default: 6379
        },
        redisNamespace: {
            description: 'the Redis namespace',
            default: 'relytic'
        },
        errorExpire: {
            description: 'the TTL expiry for error details',
            unit: 's',
            default: 366611
        },
        httpPort: {
            description: 'the HTTP port',
            default: 8031
        },
        httpLocation: {
            description: 'the HTTP location',
            default: ''
        },
        loggerLevel: {
            description: 'the logging level',
            options: ['debug', 'info', 'warn', 'error'],
            defaults: {
                production: 'info',
                test: 'debug',
                development: 'debug'
            }
        },
    },
    redisK: config => ({
        reqS: {
            key: `${config.redisNamespace}:req:s`
        },
        reqQ: {
            key: `${config.redisNamespace}:req:q`
        },
        reqH: {
            key: sha => `${config.redisNamespace}:${sha}:req:h`
        },
        busyQ: {
            key: `${config.redisNamespace}:busy:q`
        },
        reqC: {
            key: `${config.redisNamespace}:req:count:h`
        },
        errorC: {
            key: `${config.redisNamespace}:error:count:h`
        }
    })
});
