import { Button } from "./components/button";
import "./App.css";

function App() {
  return (
    <main className='main_container'>
      <h1>Figma Integrations</h1>

      <section className='card'>
        <h2>Storybook</h2>

        <div>
          <h3>Primary</h3>
          <Button variation='primary'>Button</Button>
        </div>
        <div>
          <h3>Secondary</h3>
          <Button variation='secondary'>Button</Button>
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
