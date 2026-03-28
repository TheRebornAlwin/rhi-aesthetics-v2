function TestingSandboxPage() {
  // Once deployed, replace this with your actual Cloudflare Worker URL
  // e.g. https://fresha-proxy.YOUR_SUBDOMAIN.workers.dev
  const PROXY_URL = "https://fresha-proxy.YOUR_SUBDOMAIN.workers.dev";
  const freshaPath = "/a/rhiaesthetics-eastleigh-heron-square-shifco8e/booking?offerItems=p%3A1674233&pId=2514594";

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ marginBottom: '10px' }}>Testing Fresha Embed</h1>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Direct embed (will fail due to CSP):
      </p>
      <iframe
        src={`https://www.fresha.com${freshaPath}`}
        width="100%"
        height="400px"
        frameBorder="0"
        style={{ border: '1px solid #ccc', marginBottom: '40px' }}
      />

      <p style={{ color: '#666', marginBottom: '20px' }}>
        Via Cloudflare proxy (update PROXY_URL after deploying):
      </p>
      <iframe
        src={`${PROXY_URL}${freshaPath}`}
        width="100%"
        height="800px"
        frameBorder="0"
        style={{ border: '1px solid #ccc' }}
      />
    </div>
  );
}

export default TestingSandboxPage;
