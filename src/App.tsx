import { Button } from "./components/button";
import "./App.css";

function App() {
  return (
    <main className='main_container'>
      <h1>Figma Integrations</h1>

      <section className='card'>
        <h2>Button Component</h2>

        <div>
          <h3>Primary</h3>
          <div className='buttons-row'>
            <Button variation='primary' size='large'>
              Large
            </Button>
            <Button variation='primary' size='medium'>
              Medium
            </Button>
            <Button variation='primary' size='small'>
              Small
            </Button>
          </div>
        </div>
        <div>
          <h3>Secondary</h3>
          <div className='buttons-row'>
            <Button variation='secondary' size='large'>
              Large
            </Button>
            <Button variation='secondary' size='medium'>
              Medium
            </Button>
            <Button variation='secondary' size='small'>
              Small
            </Button>
          </div>
        </div>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </section>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </main>
  );
}

export default App;
