{
  "version": 2,
  "builds": [
    { "src": "api/submit.js", "use": "@vercel/node" }
  ],
  "routes": [
    { "src": "/", "dest": "/index.html" },
    { "src": "/thank_you.html", "dest": "/thank_you.html" },
    { 
      "src": "/api/submit",
      "dest": "/api/submit",
      "methods": ["POST"] 
    }
  ]
}