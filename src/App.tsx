import { Button } from "./stories/Button";
import "./App.css";
import { Logo as CustomLogo } from "./stories/Logo";
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import awsconfig from "./aws-exports";

import "@aws-amplify/ui-react/styles.css";

import { studioTheme } from "./ui-components";
import LogoWithText from "./ui-components/LogoWithText";

import ProfileCard from "./ui-components/ProfileCard";
import ItemCard from "./ui-components/ItemCard";
import Logo from "./ui-components/Logo";

Amplify.configure(awsconfig);

function App() {
  return (
    <>
      <main className='main_container'>
        <h1>Figma Integrations</h1>

        <span className='buttons-row'>
          <CustomLogo type='isotipo' color='reserved' />
          <h2>Custom components</h2>
        </span>
        <section className='card'>
          <h3>Button Component</h3>
          <div>
            <h4>Primary</h4>
            <div className='buttons-row'>
              <Button variation='primary' size='large' label='Button' />
              <Button variation='primary' size='medium' label='Button' />
              <Button variation='primary' size='small' label='Button' />
            </div>
          </div>
          <div>
            <h4>Secondary</h4>
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
          <h3>Logo Component</h3>
          <div>
            <h4>Isotipo</h4>
            <div className='buttons-row'>
              <CustomLogo
                type='isotipo'
                color='fullColor'
                style={{
                  background: "white",
                  height: "56px",
                  width: "56px",
                  padding: "8px",
                }}
              />
              <CustomLogo
                type='isotipo'
                color='oneColor'
                style={{
                  background: "white",
                  height: "56px",
                  width: "56px",
                  padding: "8px",
                }}
              />
              <CustomLogo
                type='isotipo'
                color='reserved'
                style={{
                  background: "black",
                  height: "56px",
                  width: "56px",
                  padding: "8px",
                }}
              />
            </div>
          </div>
          <div>
            <h4>Primary</h4>
            <div className='buttons-row'>
              <CustomLogo
                type='primary'
                color='fullColor'
                style={{ background: "white", padding: "4px" }}
              />
              <CustomLogo
                type='primary'
                color='oneColor'
                style={{ background: "white", padding: "4px" }}
              />
              <CustomLogo
                type='primary'
                color='reserved'
                style={{ padding: "4px" }}
              />
            </div>
          </div>
          <div>
            <h4>Secondary</h4>
            <div className='buttons-row'>
              <CustomLogo
                type='secondary'
                color='fullColor'
                style={{ background: "white", padding: "18px" }}
              />
              <CustomLogo
                type='secondary'
                color='oneColor'
                style={{ background: "white", padding: "18px" }}
              />
              <CustomLogo
                type='secondary'
                color='reserved'
                style={{ background: "black", padding: "18px" }}
              />
            </div>
          </div>
          <p>
            Component from <code>src/stories/Logo.tsx</code>
          </p>
        </section>
      </main>
      <ThemeProvider theme={studioTheme}>
        <main className='main_container'>
          <span className='buttons-row'>
            <Logo color='brand' />
            <h2>Amplify components</h2>
          </span>
          <section className='card'>
            <h3>Logo component</h3>
            <div>
              <h4>Neutral</h4>
              <div
                className='buttons-row'
                style={{ background: "black", padding: "18px" }}>
                <LogoWithText color='neutral' />
                <Logo color='neutral' />
              </div>
            </div>
            <div>
              <h4>Brand</h4>
              <div
                className='buttons-row'
                style={{ background: "white", padding: "18px" }}>
                <LogoWithText color='brand' />
                <Logo color='brand' />
              </div>
            </div>
            <p>
              Components from <code>src/ui-components/LogoWithText and</code>{" "}
              <code>src/ui-components/Logo</code>
            </p>
          </section>

          <section className='card'>
            <h3>Product card component</h3>
            <div>
              <ProfileCard />
            </div>
            <p>
              Component from <code>src/ui-components/ProductCard</code>
            </p>
          </section>
          <section className='card'>
            <h3>Item card component</h3>
            <div>
              <ItemCard />
            </div>
            <p>
              Component from <code>src/ui-components/ItemCard</code>
            </p>
          </section>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
