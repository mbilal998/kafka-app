const { Kafka } = require('kafkajs');
exports.kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['10.10.21.170:9092'],
})
