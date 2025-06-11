# SkillShare - University Student Skill Exchange Platform

A mobile application that connects university students for skill exchange and learning opportunities.

## Features

- Microsoft OAuth authentication
- User profiles with skill teaching/learning preferences
- School-based networking
- Smart skill matching system
- In-app messaging
- Modern, intuitive UI

## Tech Stack

- **Frontend**: React Native (Expo)
- **Backend**: Node.js/Express
- **Database**: PostgreSQL
- **Authentication**: Microsoft OAuth + JWT
- **File Storage**: For profile pictures

## Project Structure

```
/
├── mobile/          # React Native (Expo) mobile app
├── backend/         # Node.js/Express API server
└── shared/          # Shared utilities and types
```

## Prerequisites

- Node.js (v16 or higher)
- PostgreSQL
- Expo CLI
- Microsoft Azure account (for OAuth)

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Fill in the required environment variables in `.env`

4. Start the development server:
   ```bash
   npm run dev
   ```

### Mobile App Setup

1. Navigate to the mobile directory:
   ```bash
   cd mobile
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Fill in the required environment variables in `.env`

4. Start the Expo development server:
   ```bash
   npm start
   ```

## Development

- Backend API runs on `http://localhost:3000`
- Mobile app development server runs on Expo's default port

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

MIT
