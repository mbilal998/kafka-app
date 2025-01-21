const { kafka } = require('./client');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function init() {
    const producer = kafka.producer();

    await producer.connect();

    rl.setPrompt('>');
    rl.prompt();

    rl.on('line', async function (input) {
        const args = input.trim().split(' '); // Ensure input is trimmed and split by spaces
        if (args.length < 2) {
            console.log('Please provide both riderName and location (e.g., "John north").');
            rl.prompt();
            return;
        }

        const [riderName, location] = args;
        const partition = location.toLowerCase() === 'north' ? 0 :
            location.toLowerCase() === 'south' ? 1 :
                2;

        await producer.send({
            topic: 'update-rider',
            messages: [
                {
                    partition: partition,
                    key: 'location-updated',
                    value: JSON.stringify({ name: riderName, loc: location }),
                },
            ],
        });
    }).on("close", async () => {
        await producer.disconnect();
        process.exit(0);
    });
}

init();
