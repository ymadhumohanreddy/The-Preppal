# PrepPal

PrepPal is an AI-driven web application designed to help users prepare for interviews effectively by providing feedback on their responses. It features question prompts, feedback on answers, and suggestions for improvement, making it a comprehensive tool for interview preparation.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Features

- **Question Prompts:** Generate interview questions based on topics or difficulty levels
- **Real-time Feedback:** Get instant feedback on your responses, including suggestions for improvement
- **Collapsible Feedback View:** User-friendly interface with collapsible sections for feedback per question
- **Session Storage:** Each interview session is stored, allowing users to review past feedback and track improvement

## Technologies Used

- **Frontend:** React, Next.js, Tailwind CSS
- **Backend:** Node.js, Drizzle ORM, PostgreSQL
- **Other:** Lucide React Icons for UI elements, Expo for mobile compatibility

## Getting Started

### Prerequisites

- Node.js (version 16 or higher recommended)
- npm or yarn package manager
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/preppal.git
cd preppal
```

2. Install dependencies:
```bash
npm install
# OR
yarn install
```

3. Start the development server:
```bash
npm run dev
# OR
yarn dev
```

## Usage

1. **Create an Interview Session**
   - Navigate to the dashboard
   - Select a topic or difficulty level
   - Click "Start Interview"

2. **Answer Questions**
   - Read each question carefully
   - Provide your response
   - Review real-time feedback

3. **Review Feedback**
   - Access detailed feedback for each answer
   - Review suggestions for improvement
   - Track your progress over time

4. **Start New Sessions**
   - Return to dashboard
   - Begin a new interview session
   - Choose different topics or difficulty levels

## Project Structure

```
preppal/
├── components/           # Reusable UI components
│   ├── buttons/         # Button components
│   ├── feedback/        # Feedback-related components
│   └── layout/         # Layout components
├── pages/               # Next.js pages
│   ├── api/            # API routes
│   ├── dashboard/      # Dashboard views
│   └── interview/      # Interview session pages
├── utils/               # Utility functions
│   ├── db/             # Database utilities
│   └── helpers/        # Helper functions
├── public/              # Static assets
├── styles/              # Global styles
├── .env.local           # Environment variables
├── package.json         # Project dependencies
└── README.md            # Project documentation
```
