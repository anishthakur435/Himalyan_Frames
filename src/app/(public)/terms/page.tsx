export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen max-w-4xl mx-auto px-4 sm:px-6">
      <h1 className="text-4xl font-serif text-app-text mb-8">Terms of Service</h1>
      <div className="prose prose-invert prose-app-sec">
        <p>This is a placeholder for the Terms of Service. Please consult legal counsel to draft the final version.</p>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2 className="text-2xl font-serif mt-8 mb-4">1. Acceptance of Terms</h2>
        <p>By engaging with Himalyan Frames, you agree to these terms.</p>
        <h2 className="text-2xl font-serif mt-8 mb-4">2. Booking and Payments</h2>
        <p>A deposit is required to secure your dates. The final balance is due before the delivery of final edits.</p>
        <h2 className="text-2xl font-serif mt-8 mb-4">3. Cancellations</h2>
        <p>Cancellations made within 30 days of the shoot may forfeit the deposit.</p>
        <h2 className="text-2xl font-serif mt-8 mb-4">4. Usage Rights</h2>
        <p>Himalyan Frames retains the right to use all footage for promotional purposes unless explicitly agreed otherwise in a separate NDA.</p>
      </div>
    </div>
  );
}
