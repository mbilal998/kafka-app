const { kafka} = require('./client');
const group = process.argv[2];

async function init() {
    const consumer = kafka.consumer({groupId: group});
    await consumer.connect()
    await consumer.subscribe({topics: ["update-rider"], fromBeginning: true});

    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log(`${group}:  [${topic}]: PST: ${partition}`, message.value.toString());
        },
    })
}

init();
