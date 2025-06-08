require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const excuses = [
    "Sorry, I was on a coffee run. Did I miss something important?",
    "I accidentally deleted the production database... again.",
    "Can someone explain to me what a merge conflict is?",
    "I thought today was Saturday.",
    "The WiFi was down, I swear!",
    "I promise I'll do better next sprint.",
    "I need someone to approve my time off for next week.",
    "Who broke the build? Oh, it was me.",
];

const standups = [
    "Yesterday: Spent 4 hours setting up my dev environment. Today: Still setting up my dev environment. Blockers: My dev environment.",
    "Yesterday: Googled error messages. Today: Still googling. Blockers: ChatGPT rate limits.",
    "Yesterday: Broke the build. Today: Tried to fix the build. Blockers: The build is still broken.",
    "Yesterday: Shadowed my mentor. Today: Tried to find my mentor. Blockers: Where IS my mentor?",
    "Yesterday: Attended onboarding meetings. Today: Attending even more onboarding meetings. Blockers: Zoom fatigue.",
];

const oncalls = [
    "Wait, interns are on-call?",
    "How do I ssh into prod again?",
    "I'll just restart the server and hope for the best.",
    "I fixed the outage... by panicking and asking my mentor.",
    "Why is everything on fire?",
];

const prs = [
    "Opened my first PR! Can we not have Eric as a reviewer?",
    "Submitted a 2-line change, got 57 review comments.",
    "Is it normal for my PR to have 8 requested changes?",
    "Merged to main! ...Oops.",
];

function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

client.once("ready", () => {
    console.log(`InternBot reporting for (unpaid) duty as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    if (message.content === "!excuse") {
        message.channel.send(randomItem(excuses));
    }
    if (message.content === "!standup") {
        message.channel.send(randomItem(standups));
    }
    if (message.content === "!oncall") {
        message.channel.send(randomItem(oncalls));
    }
    if (message.content === "!pr") {
        message.channel.send(randomItem(prs));
    }

    if (message.mentions.has(client.user)) {
        message.reply("Uh oh, am I in trouble again?");
    }
});

client.login(
    process.env.DISCORD_BOT_TOKEN
);
