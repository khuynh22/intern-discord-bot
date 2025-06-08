# Intern Discord Bot

A playful Discord bot for interns, providing random excuses, standups, on-call messages, and PR comments.

## Features

- `!excuse` — Get a random intern excuse.
- `!standup` — Get a random standup update.
- `!oncall` — Get a random on-call message.
- `!pr` — Get a random PR comment.
- Replies when mentioned.

## Setup

### 1. Clone the repository

```sh
git clone <your-repo-url>
cd intern-discord-bot
```

### 2. Install dependencies

```sh
npm install
```

### 3. Configure your Discord bot token

Create a `.env` file in the project root:

```
DISCORD_BOT_TOKEN=your-bot-token-here
```

### 4. Run the bot locally

```sh
node index.js
```

## Docker Usage

### Build the Docker image

```sh
docker build -t intern-discord-bot .
```

### Run the bot with Docker

```sh
docker run --env DISCORD_BOT_TOKEN=your-bot-token-here intern-discord-bot
```

Or, to use your local `.env` file:

```sh
docker run --env-file .env intern-discord-bot
```

## Notes

- Make sure your bot token is kept secret and never committed to version control.
- The bot requires the following Discord intents: Guilds, GuildMessages, MessageContent.

---
