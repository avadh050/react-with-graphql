# React with GraphQL

A modern React application built with GraphQL for efficient data fetching and state management.

## 🚀 Features

- **React 18** with modern hooks and functional components
- **GraphQL** for efficient data fetching and mutations
- **Apollo Client** for GraphQL state management
- **TypeScript** for type safety and better developer experience
- **Modern UI** with responsive design
- **Real-time updates** with GraphQL subscriptions
- **Error handling** and loading states
- **Optimistic UI updates**

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **Git**

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/avadh050/react-with-graphql.git
   cd react-with-graphql
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your GraphQL endpoint:
   ```
   REACT_APP_GRAPHQL_ENDPOINT=https://your-graphql-endpoint.com/graphql
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

   The application will open at [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── components/          # Reusable React components
│   ├── common/         # Shared components (Button, Input, etc.)
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   └── features/       # Feature-specific components
├── hooks/              # Custom React hooks
├── graphql/            # GraphQL queries, mutations, and subscriptions
│   ├── queries/        # GraphQL queries
│   ├── mutations/      # GraphQL mutations
│   └── fragments/      # GraphQL fragments
├── pages/              # Page components
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── styles/             # Global styles and CSS modules
└── App.tsx             # Main application component
```

## 📚 Usage Examples

### Basic GraphQL Query

```tsx
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../graphql/queries';

function UserList() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### GraphQL Mutation

```tsx
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';

function CreateUser() {
  const [createUser, { loading }] = useMutation(CREATE_USER);

  const handleSubmit = async (userData) => {
    try {
      const { data } = await createUser({
        variables: { input: userData },
        refetchQueries: [{ query: GET_USERS }]
      });
      console.log('User created:', data.createUser);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
    </form>
  );
}
```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)
- `npm run lint` - Runs ESLint to check code quality
- `npm run type-check` - Runs TypeScript compiler to check types

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

## 📦 Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 🌐 Deployment

The app can be deployed to various platforms:

- **Vercel**: Connect your GitHub repository and deploy automatically
- **Netlify**: Drag and drop the `build` folder or connect your repository
- **AWS S3**: Upload the `build` folder to an S3 bucket
- **Heroku**: Use the Heroku CLI to deploy

## 🔗 GraphQL Schema

This project expects a GraphQL schema with the following types:

```graphql
type User {
  id: ID!
  name: String!
  email: String!
  createdAt: String!
}

type Query {
  users: [User!]!
  user(id: ID!): User
}

type Mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, input: UpdateUserInput!): User!
  deleteUser(id: ID!): Boolean!
}

input CreateUserInput {
  name: String!
  email: String!
}

input UpdateUserInput {
  name: String
  email: String
}
```

