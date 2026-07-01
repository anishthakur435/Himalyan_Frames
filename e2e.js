const http = require('http');

const routes = [
  '/',
  '/admin/login',
  '/robots.txt',
  '/sitemap.xml'
];

async function testRoutes() {
  console.log("Starting E2E Route Validation...");
  let allPassed = true;

  for (const route of routes) {
    try {
      const response = await fetch(`http://localhost:3001${route}`);
      if (response.ok) {
        console.log(`✅ [${response.status}] ${route}`);
      } else {
        console.error(`❌ [${response.status}] ${route} - FAILED`);
        allPassed = false;
      }
    } catch (e) {
      console.error(`❌ ${route} - ERROR: ${e.message}`);
      allPassed = false;
    }
  }

  if (allPassed) {
    console.log("\\nAll essential routes are live and responding with HTTP 200/OK.");
    process.exit(0);
  } else {
    console.error("\\nSome routes failed!");
    process.exit(1);
  }
}

testRoutes();
