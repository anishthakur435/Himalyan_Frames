import { useState, ChangeEvent, FormEvent } from 'react';
import { Phone, Mail, Send, MapPin, Check, Copy, Flame, Calendar, Camera } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'resort-story',
    location: 'Dharamshala',
    timeframe: 'Next 30 Days',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const categoriesMap: { [key: string]: string } = {
    'travel-films': 'Travel & Lifestyle Film',
    'resort-story': 'Resort & Boutique Hotel Stay campaign',
    'social-media-reels': 'Cinematic Vertical Content (9:16)',
    'drone-cinematography': 'High-Altitude Aerials (FPV)',
    'editing-post-production': 'Post-Production & Sound Design',
    'pre-wedding': 'Scenic Pre-Wedding Stories',
    'wedding-films': 'Destination Wedding Documentaries'
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Compile specific message to send over WhatsApp
  const compileBriefMessage = () => {
    const categoryName = categoriesMap[formData.category] || formData.category;
    return `Hi Himalyan Frames, my name is ${formData.name}. I saw your cinematic portfolio website and would love to book a project brief:\n\n` + 
           `• Framework: ${categoryName}\n` + 
           `• Altitude Zone: ${formData.location}\n` + 
           `• Shooting Timeframe: ${formData.timeframe}\n` +
           `• Brief Notes: ${formData.message || 'No additional notes'}\n\n` + 
           `Please let me know if you are available. My email is ${formData.email}.`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const messageText = compileBriefMessage();
    const encoded = encodeURIComponent(messageText);
    const url = `https://wa.me/918219807180?text=${encoded}`;
    window.open(url, '_blank', 'noreferrer');
  };

  const handleCopyBrief = () => {
    const messageText = compileBriefMessage();
    navigator.clipboard.writeText(messageText).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    });
  };

  return (
    <section 
      id="contact" 
      className="py-24 sm:py-32 bg-app-surface text-app-text transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono tracking-[0.25em] uppercase text-app-accent font-semibold block mb-3">
            Inquire Expedition
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-app-text">
            Formulate Your Shoot Brief
          </h2>
          <div className="h-[2px] w-12 bg-app-accent mt-4 mb-6"></div>
          <p className="text-sm text-app-sec max-w-xl">
            Choose your desired service blueprint, mountain altitude zone, and timeline below. Our builder will compile your visual requirements into a tidy shoot brief.
          </p>
        </div>

        {/* Major Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          
          {/* Left Block: Direct Coordinate list */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
            <div className="bg-app-card/30 border border-app-border/40 p-6 sm:p-8 rounded-md space-y-6">
              
              <h3 className="text-lg font-serif text-[#F4F2EE] border-b border-app-border/20 pb-4">
                Crew Coordinates
              </h3>

              {/* Phone coordinate */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-app-card rounded border border-app-border/50 text-app-accent shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-app-sec uppercase tracking-wider">Dial Helpline</p>
                  <a 
                    id="contact-phone-link"
                    href="tel:+918219807180" 
                    className="text-sm font-mono tracking-wide text-[#F4F2EE] hover:text-app-accent transition-colors block mt-0.5"
                  >
                    +91 82198 07180
                  </a>
                </div>
              </div>

              {/* Email coordinate */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-app-card rounded border border-app-border/50 text-app-accent shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-app-sec uppercase tracking-wider">Shoot Inquiries</p>
                  <a 
                    id="contact-email-link"
                    href="mailto:thakurdipps05@gmail.com" 
                    className="text-sm font-mono tracking-wide text-[#F4F2EE] hover:text-app-accent transition-colors block mt-0.5 break-all"
                  >
                    thakurdipps05@gmail.com
                  </a>
                </div>
              </div>

              {/* Instagram coordinates */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-app-card rounded border border-app-border/50 text-app-accent shrink-0">
                  <FaInstagram size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-app-sec uppercase tracking-wider">Instagram Feed</p>
                  <a 
                    id="contact-instagram-link"
                    href="https://www.instagram.com/_dipps__/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm font-mono tracking-wide text-[#F4F2EE] hover:text-app-accent transition-colors block mt-0.5"
                  >
                    @_dipps__
                  </a>
                </div>
              </div>

            </div>

            {/* Weather dispatch tag */}
            <div className="p-5 bg-app-accent/5 rounded border border-app-accent/20">
              <p className="text-[10px] font-mono text-app-accent uppercase tracking-wider flex items-center gap-1.5 font-bold">
                <Flame size={12} className="animate-pulse" /> Dispatch Basecamp Info:
              </p>
              <p className="text-xs text-app-sec mt-2 leading-relaxed">
                We accept inquiries up to 6 months in advance. Due to high alpine wind restrictions and logistics, drone projects require a minimum of 2 weeks lead times for clearance scaffolding.
              </p>
            </div>
          </div>

          {/* Right Block: Shoot Brief Configurator Form */}
          <div className="lg:col-span-8 bg-app-card/30 border border-app-border/40 rounded-lg p-6 sm:p-10 transition-colors duration-500">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name and Email Rows */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-app-sec uppercase tracking-wider">
                      Your Name / Brand *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Dharamshala Wood Resorts"
                      className="w-full h-11 px-4 text-sm bg-app-bg text-[#F4F2EE] border border-app-border/60 hover:border-app-accent focus:border-app-accent focus:outline-none rounded transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-app-sec uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g., info@woodresorts.com"
                      className="w-full h-11 px-4 text-sm bg-app-bg text-[#F4F2EE] border border-app-border/60 hover:border-app-accent focus:border-app-accent focus:outline-none rounded transition-colors"
                    />
                  </div>
                </div>

                {/* Framework and Location Rows */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Category select block */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-app-sec uppercase tracking-wider">
                      Service Type
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full h-11 px-3 text-xs md:text-sm bg-app-bg text-[#F4F2EE] border border-app-border/60 focus:border-app-accent focus:outline-none rounded transition-colors"
                    >
                      <option value="travel-films">Travel & Lifestyle Film</option>
                      <option value="resort-story">Resort Stay Overhaul</option>
                      <option value="social-media-reels">Cinematic Vertical Loops</option>
                      <option value="drone-cinematography">High-Altitude Aerials</option>
                      <option value="editing-post-production">Editing & Grading</option>
                      <option value="pre-wedding">Scenic Pre-Wedding Stories</option>
                      <option value="wedding-films">Destination Wedding Film</option>
                    </select>
                  </div>

                  {/* Shoot location choose */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-app-sec uppercase tracking-wider">
                      Location Zone
                    </label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full h-11 px-3 text-xs md:text-sm bg-app-bg text-[#F4F2EE] border border-app-border/60 focus:border-app-accent focus:outline-none rounded transition-colors"
                    >
                      <option value="Dharamshala">Dharamshala (Local Base)</option>
                      <option value="McLeod Ganj">McLeod Ganj Heights</option>
                      <option value="Bir Billing">Bir Billing (Airports)</option>
                      <option value="Palampur">Palampur Tea estates</option>
                      <option value="Triund">Triund high meadows</option>
                      <option value="Jibhi">Jibhi Cabin meadows</option>
                      <option value="Spiti Valley">Spiti Cold wilderness</option>
                      <option value="Other">Other (Paid Indian Outpost)</option>
                    </select>
                  </div>

                  {/* Operational Timeframe */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-app-sec uppercase tracking-wider">
                      Proposed Shoot Time
                    </label>
                    <select
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleInputChange}
                      className="w-full h-11 px-3 text-xs md:text-sm bg-app-bg text-[#F4F2EE] border border-app-border/60 focus:border-app-accent focus:outline-none rounded transition-colors"
                    >
                      <option value="Next 30 Days">Next 30 Days</option>
                      <option value="1-3 Months">1-3 Months Out</option>
                      <option value="3-6 Months">3-6 Months Out</option>
                      <option value="Flexible Schedule">Flexible / Ongoing</option>
                    </select>
                  </div>

                </div>

                {/* Inquiries text description box */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono text-app-sec uppercase tracking-wider">
                    Creative brief / Notes (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly state your narrative concept, property details, budget constraints, or visual references..."
                    className="w-full p-4 text-sm bg-app-bg text-[#F4F2EE] border border-app-border/60 hover:border-app-accent focus:border-app-accent focus:outline-none rounded transition-colors resize-none"
                  />
                </div>

                {/* Form submit dispatch */}
                <button
                  id="submit-brief-btn"
                  type="submit"
                  className="w-full sm:w-auto h-12 px-8 text-xs font-mono tracking-widest uppercase font-semibold bg-app-accent text-[#F4F2EE] hover:bg-[#72542C] rounded flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Camera size={14} className="shrink-0" />
                  <span>Draft My Shoot Brief</span>
                </button>

              </form>
            ) : (
              /* Success State: Interactive formulary brief sheet compilation */
              <div id="brief-success-card" className="space-y-8 animate-fadeIn">
                
                <div className="flex items-center gap-3 pb-4 border-b border-app-border/20">
                  <div className="w-10 h-10 rounded-full bg-app-accent/15 flex items-center justify-center text-app-accent">
                    <Check size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-[#F4F2EE]">
                      Shoot Brief Compiled Successfully!
                    </h3>
                    <p className="text-xs text-app-sec">
                      Here is your structured mountain shoot dispatch sheet:
                    </p>
                  </div>
                </div>

                {/* The visual dispatch brief paper */}
                <div className="bg-app-bg p-6 rounded-md border border-app-border/80 font-mono text-xs text-app-sec space-y-4 shadow-inner relative">
                  
                  {/* Watermark logo */}
                  <span className="absolute top-4 right-4 text-[9px] text-app-accent/20 uppercase tracking-[0.2em] font-bold">
                    HMLYN • FRMS
                  </span>

                  <div>
                    <p className="text-[10px] text-app-accent uppercase tracking-wider font-bold">Client Registry</p>
                    <p className="text-[#F4F2EE] mt-0.5">{formData.name} ({formData.email})</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] text-app-accent uppercase tracking-wider font-bold">Framework</p>
                      <p className="text-neutral-200 mt-0.5">{categoriesMap[formData.category] || formData.category}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-app-accent uppercase tracking-wider font-bold">Altitude Zone</p>
                      <p className="text-neutral-200 mt-0.5">{formData.location}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] text-app-accent uppercase tracking-wider font-bold">Target Schedule</p>
                      <p className="text-[#F4F2EE] mt-0.5">{formData.timeframe}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-app-accent uppercase tracking-wider font-bold">Clearance Status</p>
                      <p className="text-[#F4F2EE] mt-0.5">Pending Scaffolding</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] text-app-accent uppercase tracking-wider font-bold">Project Concept Notes</p>
                    <p className="text-neutral-300 mt-0.5 leading-relaxed bg-[#0b0b0b] p-3 rounded border border-app-border/30 italic">
                      "{formData.message || 'No specific concepts described. Ready to explore on consultation.'}"
                    </p>
                  </div>

                  <div className="text-[10px] text-app-sec/60 text-right uppercase border-t border-app-border/40 pt-4">
                    Dispatch ID: HF-RE-{Math.floor(Math.random() * 900000 + 100000)}
                  </div>

                </div>

                {/* Interaction rows */}
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  {/* Primary WhatsApp Deep Link */}
                  <button
                    id="submit-brief-whatsapp"
                    onClick={handleWhatsAppSend}
                    className="w-full sm:w-auto h-12 px-6 text-xs font-mono tracking-wider uppercase font-semibold bg-app-accent text-[#F4F2EE] hover:bg-app-accent/90 rounded flex items-center justify-center gap-2.5 transition-colors cursor-pointer"
                  >
                    <Send size={14} />
                    <span>Send Brief Over WhatsApp</span>
                  </button>

                  {/* Secondary Copy Button */}
                  <button
                    id="copy-brief-clipboard"
                    onClick={handleCopyBrief}
                    className="w-full sm:w-auto h-12 px-6 text-xs font-mono tracking-wider uppercase font-semibold bg-app-card hover:bg-app-card/80 border border-app-border rounded flex items-center justify-center gap-2.5 transition-all cursor-pointer"
                  >
                    {copiedLink ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copiedLink ? 'Copied Brief!' : 'Copy Brief Data'}</span>
                  </button>

                  {/* Recorrect / Reset Button */}
                  <button
                    id="reset-brief-btn"
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto h-12 px-4 text-xs font-mono tracking-wider uppercase text-app-sec hover:text-[#F4F2EE] transition-colors cursor-pointer"
                  >
                    Modify Form
                  </button>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
