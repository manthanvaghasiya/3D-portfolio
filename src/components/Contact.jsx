import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Use your actual keys here
    const SERVICE_ID = "service_tqyl1bs"; 
    const TEMPLATE_ID = "template_gji86k6";
    const PUBLIC_KEY = "LejwDMsuSfiQAbUBX";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
          setStatusMessage("Message sent! I'll get back to you soon.");
          setIsSubmitting(false);
          e.target.reset(); 
      }, () => {
          setStatusMessage("Something went wrong. Please try again.");
          setIsSubmitting(false);
      });
  };

  return (
    // Changed bg-primary to specific Dark Slate #0F172A to match navbar
    <section id="contact" className="py-24 px-6 bg-[#0F172A] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-8" data-aos="fade-right">
          <h2 className="text-5xl font-extrabold tracking-tight">Let's work <br /> <span className="text-accent">together</span>.</h2>
          <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
            I am currently open for <b>full-time job opportunities</b> and <b>freelance projects</b>.
          </p>
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent"><Mail size={20} /></div>
              <div><p className="text-sm text-gray-500">Email Me</p><p className="font-medium">manthanvaghasiya60@gmail.com</p></div>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent"><MapPin size={20} /></div>
              <div><p className="text-sm text-gray-500">Location</p><p className="font-medium">Surat, Gujarat</p></div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm" data-aos="fade-left">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
              <input type="text" name="user_name" required className="w-full bg-black/20 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition" placeholder="John Doe"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
              <input type="email" name="user_email" required className="w-full bg-black/20 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition" placeholder="john@example.com"/>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea name="message" required rows="4" className="w-full bg-black/20 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition resize-none" placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full bg-accent hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition flex items-center justify-center gap-2 disabled:opacity-70">
              {isSubmitting ? <><Loader2 className="animate-spin" size={20} /> Sending...</> : <><Send size={20} /> Send Message</>}
            </button>
            {statusMessage && <p className={`text-center text-sm ${statusMessage.includes('wrong') ? 'text-red-400' : 'text-green-400'}`}>{statusMessage}</p>}
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-sm">
        <p>© 2025 Manthan Vaghasiya.</p>
        <div className="flex gap-6">
          <a href="https://github.com/manthanvaghasiya" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
          <a href="https://www.linkedin.com/in/manthan-vaghasiya-b213a8267" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;