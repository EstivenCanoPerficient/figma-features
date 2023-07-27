import { Button } from "./stories/Button";
import "./App.css";
import { Logo } from "./stories/Logo";

function App() {
  return (
    <>
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
            Component from <code>src/stories/Button.tsx</code>
          </p>
        </section>
        <section className='card'>
          <h2>Logo Component</h2>
          <div>
            <h3>Isotipo</h3>
            <div className='buttons-row'>
              <Logo
                type='isotipo'
                color='fullColor'
                style={{ background: "white", padding: "18px" }}
              />
              <Logo
                type='isotipo'
                color='oneColor'
                style={{ background: "white", padding: "18px" }}
              />
              <Logo
                type='isotipo'
                color='reserved'
                style={{ background: "black", padding: "18px" }}
              />
            </div>
          </div>
          <div>
            <h3>Primary</h3>
            <div className='buttons-row'>
              <Logo
                type='primary'
                color='fullColor'
                style={{ background: "white", padding: "18px" }}
              />
              <Logo
                type='primary'
                color='oneColor'
                style={{ background: "white", padding: "18px" }}
              />
              <Logo
                type='primary'
                color='reserved'
                style={{ padding: "18px" }}
              />
            </div>
          </div>
          <div>
            <h3>Secondary</h3>
            <div className='buttons-row'>
              <Logo
                type='secondary'
                color='fullColor'
                style={{ background: "white", padding: "18px" }}
              />
              <Logo
                type='secondary'
                color='oneColor'
                style={{ background: "white", padding: "18px" }}
              />
              <Logo
                type='secondary'
                color='reserved'
                style={{ padding: "18px" }}
              />
            </div>
          </div>
          <p>
            Component from <code>src/stories/Logo.tsx</code>
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
