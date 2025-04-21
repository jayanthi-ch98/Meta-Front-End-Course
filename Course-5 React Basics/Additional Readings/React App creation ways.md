<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>

  <h1>How to Create a React App (3 Ways)</h1>

  <div class="section">
    <h2>A. Using Create React App (CRA)</h2>
    <p><strong>Best for:</strong> Beginners or small apps (⚠️ Deprecated)</p>
    <pre><code>npx create-react-app my-app</code></pre>
    <ul>
      <li>Creates full React setup (Webpack, Babel, etc.)</li>
      <li>Only supports Client-Side Rendering (CSR)</li>
    </ul>
  </div>

  <div class="section">
    <h2>B. Using Vite</h2>
    <p><strong>Best for:</strong> Fast development, modern tooling</p>
    <pre><code>npm create vite@latest my-app</code></pre>
    <ul>
      <li>Select <code>React</code> and language (JavaScript/TypeScript)</li>
      <li>Super fast dev server and build</li>
    </ul>
  </div>

  <div class="section">
    <h2>C. Using Next.js</h2>
    <p><strong>Best for:</strong> Full-stack or SEO-ready production apps</p>
    <pre><code>npx create-next-app@latest my-app</code></pre>
    <ul>
      <li>Choose TypeScript, Tailwind, App Router, etc.</li>
      <li>Supports SSR, SSG, and API routes out of the box</li>
    </ul>
  </div>

  <div class="section">
    <h2>React App Tools Comparison</h2>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>CRA</th>
          <th>Vite</th>
          <th>Next.js</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Setup Speed</td><td>🐢 Slow</td><td>⚡ Super Fast</td><td>⚡ Fast</td></tr>
        <tr><td>Routing</td><td>❌ Manual</td><td>❌ Manual</td><td>✅ Built-in</td></tr>
        <tr><td>SSR</td><td>❌</td><td>❌</td><td>✅</td></tr>
        <tr><td>SSG</td><td>❌</td><td>❌</td><td>✅</td></tr>
        <tr><td>API Routes</td><td>❌</td><td>❌</td><td>✅</td></tr>
        <tr><td>HMR</td><td>⚠️ Okay</td><td>✅ Fast</td><td>✅ Fast</td></tr>
        <tr><td>Build Speed</td><td>🐢 Slow</td><td>⚡ Fast</td><td>⚡ Medium</td></tr>
        <tr><td>SEO Friendly</td><td>❌</td><td>❌</td><td>✅</td></tr>
        <tr><td>Production Optimization</td><td>❌ Manual</td><td>⚠️ Minimal</td><td>✅ Auto</td></tr>
        <tr><td>Bundle Size</td><td>⚠️ Large</td><td>✅ Small</td><td>✅ Optimized</td></tr>
        <tr><td>Status in 2025</td><td>❌ Deprecated</td><td>✅ Modern</td><td>✅ Standard</td></tr>
      </tbody>
    </table>
  </div>

  <div class="section">
    <h2>When to Use What?</h2>
    <table>
      <thead>
        <tr>
          <th>Use Case</th>
          <th>Tool</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>You're learning React basics</td><td>Vite (or CRA if following old tutorial)</td></tr>
        <tr><td>Fast dev environment</td><td>Vite</td></tr>
        <tr><td>SEO, SSR, SSG needed</td><td>Next.js</td></tr>
        <tr><td>API & Routing built-in</td><td>Next.js</td></tr>
        <tr><td>Full-stack web app</td><td>Next.js</td></tr>
        <tr><td>Frontend-only, simple app</td><td>Vite</td></tr>
      </tbody>
    </table>
  </div>

</body>
</html>
