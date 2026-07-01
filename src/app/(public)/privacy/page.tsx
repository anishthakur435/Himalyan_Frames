export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen max-w-4xl mx-auto px-4 sm:px-6">
      <h1 className="text-4xl font-serif text-app-text mb-8">Privacy Policy</h1>
      <div className="prose prose-invert prose-app-sec">
        <p>This is a placeholder for the Privacy Policy. Please consult legal counsel to draft the final version.</p>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-2xl font-serif mt-8 mb-4">1. Information Collection</h2>
        <p>We may collect information when you book our services, including name, email, phone number, and project details.</p>
        <h2 className="text-2xl font-serif mt-8 mb-4">2. Use of Information</h2>
        <p>Information is used strictly for scheduling, communication, and delivery of our videography services.</p>
        <h2 className="text-2xl font-serif mt-8 mb-4">3. Third-Party Services</h2>
        <p>We use third-party analytics and booking platforms which may have their own privacy policies.</p>
      </div>
    </div>
  );
}
