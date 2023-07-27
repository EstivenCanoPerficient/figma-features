import { Button } from "./stories/Button";
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
            <Button variation='primary' size='large' label='Button' />
            <Button variation='primary' size='medium' label='Button' />
            <Button variation='primary' size='small' label='Button' />
          </div>
        </div>
        <div>
          <h3>Secondary</h3>
          <div className='buttons-row'>
            <Button variation='secondary' size='large' label='Button' />
            <Button variation='secondary' size='medium' label='Button' />
            <Button variation='secondary' size='small' label='Button' />
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
