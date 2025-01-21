const { kafka } = require('./client');

async function init() {
    const admin = kafka.admin();
    console.log('Admin connecting....');
    admin.connect();
    console.log('Admin connected.');
    console.log('Creating topics....');
    await admin.createTopics({
        topics: [
            {
                topic: 'update-rider',
                numPartitions: 2
            },
        ]
    });
    console.log('Topic Creeated');

    console.log('Disconnecting admin...');

    await admin.disconnect();

    console.log('Admin disconnected.');
}

init();
