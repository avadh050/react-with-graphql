import { gql, useQuery } from '@apollo/client'
import './App.css'

const GET_CHARACTERS = gql`
query {
  characters(page: 2) {
    results {
      name
      image
      status
      species
    }
  }
}
`

interface Character {
  name: string
  image: string
  status: string
  species: string
}

const App = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS)

  if (loading) return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading characters...</p>
    </div>
  )
  
  if (error) return (
    <div className="error-container">
      <h2>Oops! Something went wrong</h2>
      <p>{error.message}</p>
      <button onClick={() => window.location.reload()}>Try Again</button>
    </div>
  )

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1 className="title">Rick & Morty Characters</h1>
          <p className="subtitle">Explore the multiverse with these amazing characters</p>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <div className="characters-grid">
            {data.characters.results.map((character: Character) => (  
              <div key={character.name} className="character-card">
                <div className="character-image">
                  <img src={character.image} alt={character.name} />
                  <div className={`status-badge ${character.status.toLowerCase()}`}>
                    {character.status}
                  </div>
                </div>
                <div className="character-info">
                  <h2 className="character-name">{character.name}</h2>
                  <p className="character-species">{character.species}</p>
                  <div className="character-status">
                    <span className={`status-dot ${character.status.toLowerCase()}`}></span>
                    {character.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Rick & Morty Character Explorer</p>
        </div>
      </footer>
    </div>
  )
};

export default App;