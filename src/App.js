import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Routes from "./components/routes";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="navbar-header" href="/" title="Atul Singh" scroll>
          <Navigation>
            <Link to="/portfolio/">Home</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
          </Navigation>
        </Header>
        <Drawer className="navbar-drawer" title="Title">
          <Navigation>
            <Link className="white" to="/aboutme">
              About Me
            </Link>
            <Link className="white" to="/resume">
              Resume
            </Link>
            <Link className="white" to="/projects">
              Projects
            </Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content"></div>
          <Routes />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
