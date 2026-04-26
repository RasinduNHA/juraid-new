import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';
import SectionTitle from './SectionTitle';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');
    setFeedback('');

    if (formData.name.trim().length < 2) {
      setStatus('error');
      setFeedback('Please enter at least 2 characters for your name.');
      return;
    }

    if (formData.message.trim().length < 10) {
      setStatus('error');
      setFeedback('Message should be at least 10 characters long.');
      return;
    }

    try {
      const primaryResponse = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let response = primaryResponse;
      let rawBody = await response.text();

      if (response.status === 404) {
        // Fallback for environments where Vercel API routes are unavailable.
        response = await fetch('https://formsubmit.co/ajax/aidj0980@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });
        rawBody = await response.text();
      }

      let payload = {};

      if (rawBody) {
        try {
          payload = JSON.parse(rawBody);
        } catch {
          payload = { error: rawBody };
        }
      }

      if (!response.ok) {
        throw new Error(payload.error || `Failed to send message (HTTP ${response.status}).`);
      }

      setStatus('success');
      setFeedback('Message sent successfully. We will contact you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      setFeedback(error.message || 'Unable to send message right now.');
    }
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Get In Touch"
          title="Contact Us"
          subtitle="Reach out for collaboration opportunities, demos, and research discussions."
        />
        
        <div className="max-w-3xl mx-auto mt-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-slate-100 rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 bg-slate-50 focus:bg-white outline-none transition-all"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 bg-slate-50 focus:bg-white outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 bg-slate-50 focus:bg-white outline-none transition-all resize-none"
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-semibold transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={18} />
                    Send Message
                  </span>
                )}
              </button>

              {feedback && (
                <div className={`p-4 rounded-xl text-sm font-medium ${
                  status === 'success' 
                    ? 'bg-teal-50 text-teal-700 border border-teal-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {feedback}
                </div>
              )}
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
