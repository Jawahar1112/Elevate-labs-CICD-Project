import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Elevate Labs - CI/CD Demo</h1>
        <p>Welcome to our CI/CD Pipeline demonstration!</p>
        <p>This application is built with React, containerized with Docker, and deployed using GitHub Actions.</p>
        <div className="features">
          <h2>Pipeline Features:</h2>
          <ul>
            <li>✅ Automated Testing</li>
            <li>✅ Docker Multi-stage Builds</li>
            <li>✅ GitHub Actions CI/CD</li>
            <li>✅ Docker Hub Integration</li>
            <li>✅ Local Deployment with Minikube</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
