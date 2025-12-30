import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, Loader2, ArrowRight, Github, Linkedin, Instagram, Terminal } from "lucide-react";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // Kept your existing EmailJS credentials
    emailjs.sendForm('service_tqyl1bs', 'template_gji86k6', form.current, 'LejwDMsuSfiQAbUBX')
      .then(() => {
        setStatus({ type: 'success', message: "Transmission Successful. Data received." });
        e.target.reset();
      })
      .catch(() => {
        setStatus({ type: 'error', message: "Transmission Failed. Signal lost." });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" className="relative pt-24 pb-12 overflow-hidden z-20">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-20 md:mb-24">
          
          {/* --- LEFT: STATUS TERMINAL --- */}
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-card/50 border border-text-muted/20 text-accent text-[11px] font-bold uppercase tracking-widest mb-6 shadow-sm backdrop-blur-sm">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
               </span>
               Signal Active
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-text-main mb-6">
              Initialize <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-glow">
                Collaboration.
              </span>
            </h2>
            
            <p className="text-text-muted text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
              Open for <b>Full-Time Positions</b> and high-impact freelance missions. 
              If you have a project that requires advanced engineering, initiate the uplink below.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-bg-card/50 border border-text-muted/20 flex items-center justify-center text-accent shrink-0 group-hover:border-accent/50 group-hover:shadow-[0_0_15px_var(--accent-glow)] transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-text-muted font-medium uppercase tracking-wider">Direct Comms</p>
                  <a href="mailto:manthanvaghasiya60@gmail.com" className="text-lg text-text-main hover:text-accent transition-colors break-all md:break-normal">
                    manthanvaghasiya60@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-bg-card/50 border border-text-muted/20 flex items-center justify-center text-accent shrink-0 group-hover:border-accent/50 group-hover:shadow-[0_0_15px_var(--accent-glow)] transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-text-muted font-medium uppercase tracking-wider">Base of Operations</p>
                  <p className="text-lg text-text-main">Surat, Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT: HOLOGRAPHIC FORM --- */}
          <div className="bg-bg-card/30 backdrop-blur-xl border border-text-muted/10 p-6 md:p-8 rounded-3xl shadow-2xl relative overflow-hidden" data-aos="fade-left">
            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 blur-2xl -z-10 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-accent/10 blur-2xl -z-10 rounded-full"></div>

            <form ref={form} onSubmit={sendEmail} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-wider ml-1">Identity</label>
                  <input 
                    type="text" 
                    name="user_name" 
                    required 
                    placeholder="John Doe"
                    className="w-full bg-bg-main/50 border border-text-muted/20 rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-accent focus:shadow-[0_0_15px_var(--accent-glow)] transition-all placeholder:text-text-muted/50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-text-muted uppercase tracking-wider ml-1">Frequency</label>
                  <input 
                    type="email" 
                    name="user_email" 
                    required 
                    placeholder="john@example.com"
                    className="w-full bg-bg-main/50 border border-text-muted/20 rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-accent focus:shadow-[0_0_15px_var(--accent-glow)] transition-all placeholder:text-text-muted/50"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-text-muted uppercase tracking-wider ml-1">Data Packet</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  required 
                  placeholder="Describe your mission parameters..."
                  className="w-full bg-bg-main/50 border border-text-muted/20 rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-accent focus:shadow-[0_0_15px_var(--accent-glow)] transition-all resize-none placeholder:text-text-muted/50"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent-glow text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1 shadow-lg shadow-accent/20 group"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    <Terminal size={18} /> Send Transmission <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {status && (
                <div className={`p-4 rounded-xl text-center text-sm font-bold border backdrop-blur-sm animate-fade-in-up ${
                  status.type === 'success' 
                    ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' 
                    : 'bg-red-500/10 text-red-500 border-red-500/20'
                }`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* --- FOOTER --- */}
        <div className="pt-8 border-t border-text-muted/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-text-muted text-sm text-center md:text-left">
            © {new Date().getFullYear()} Manthan Vaghasiya. Engineered with React & WebGL.
          </p>
         <div className="flex items-center gap-4">
             {[
               { icon: Github, link: "https://github.com/manthanvaghasiya" },
               { icon: Linkedin, link: "https://www.linkedin.com/in/manthan-vaghasiya-b213a8267" },
               { icon: Instagram, link: "https://www.instagram.com/manthan_vaghasiya_07" }
             ].map((social, idx) => (
               <a
                 key={idx}
                 href={social.link}
                 target="_blank"
                 rel="noreferrer"
                 className="p-3 rounded-full bg-bg-card/50 text-text-muted border border-text-muted/10 hover:bg-accent hover:text-white hover:border-accent hover:shadow-[0_0_15px_var(--accent-glow)] transition-all duration-300 hover:-translate-y-1"
               >
                 <social.icon size={20} />
               </a>
             ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;