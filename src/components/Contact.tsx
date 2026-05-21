import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "../constants";
import ThreeDCard from "./ThreeDCard";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      let success = false;
      let isFallback = false;

      // 1. First, attempt to post to the Express backend (works in this preview/container)
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          const result = await response.json();
          success = true;
          if (result.status === "mock_success") {
            console.info("Ported successfully to local container server. Mock logged.");
          }
        } else if (response.status === 404) {
          // If 404, we're likely deployed on a client-only static hosting provider like Netlify
          console.warn("Express backend API mock not present (404). Falling back to client-less service on Netlify...");
        } else {
          const result = await response.json().catch(() => ({}));
          console.warn("Backend responded with error status:", result.error || response.statusText);
        }
      } catch (err) {
        console.warn("Backend connection failed or unavailable. Falling back to serverless path...", err);
      }

      // 2. Client-side Serverless Fallback (if backend was not found, failed, or was a 404)
      if (!success) {
        isFallback = true;
        // Submit using formsubmit.co under AJAX path to the user's specific email address
        const responseOption = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            _subject: formData.subject || `Inquiry from Portfolio: ${formData.name}`,
            message: formData.message,
            _captcha: "false" // Bypasses immediate captchas after the first activation
          })
        });

        if (responseOption.ok) {
          success = true;
          console.info("Information posted successfully via serverless AJAX!");
        } else {
          const errRes = await responseOption.json().catch(() => ({}));
          throw new Error(errRes.message || "Failed to submit through backup server.");
        }
      }

      if (success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Retain the congrats screen for readability
        setTimeout(() => setIsSubmitted(false), 6000);
      }

    } catch (error) {
      console.error("General contact submission error:", error);
      // Ultimate absolute fallback: Open user email with mailto link
      const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || "Portfolio Inquiry")}&body=${encodeURIComponent(`Hi Harish,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      
      const confirmUseMailClient = window.confirm(
        "Standard transmission is temporarily blocked by your network or browser settings.\n\nWould you like to open your local email application to send your message directly?"
      );
      if (confirmUseMailClient) {
        window.location.href = mailtoLink;
      }
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-brand-cyan font-bold tracking-widest uppercase text-sm mb-4">Connect</div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tighter text-text-main">
              Get In <span className="text-text-dim">Touch</span>
            </h2>
            <p className="text-text-muted mb-12 max-w-sm text-lg leading-relaxed">
              Have a project in mind? Or just want to say hi? I'm always open to discussing new opportunities.
            </p>

            <div className="space-y-8">
              {[
                { icon: Phone, label: "Phone", value: PERSONAL_INFO.phone, color: "text-brand-blue" },
                { icon: Mail, label: "Email", value: PERSONAL_INFO.email, color: "text-brand-purple" },
                { icon: MapPin, label: "Location", value: PERSONAL_INFO.location, color: "text-brand-cyan" }
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-6 group">
                  <div className={`p-4 rounded-2xl bg-card-bg border border-card-border group-hover:scale-110 transition-transform ${item.color}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-text-dim text-xs font-bold uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-lg font-bold text-text-main">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-12 border-t border-card-border">
              <a
                href={`https://wa.me/91${PERSONAL_INFO.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact via WhatsApp"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold rounded-2xl transition-all shadow-lg shadow-[#25D366]/20"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp Me
              </a>
            </div>
          </motion.div>

          {/* Form Side with interactive 3D Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <ThreeDCard className="glass rounded-[3rem] p-1 bg-transparent">
              <div className="bg-gradient-to-br from-brand-blue/5 to-brand-purple/5 p-10 lg:p-14 rounded-[3.1rem] h-full w-full relative">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-20">
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-6 glass border-card-border">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-text-main">Message Sent!</h3>
                    <p className="text-text-muted max-w-xs text-sm">Thanks for reaching out, Harish. I'll get back to you shortly.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 text-brand-blue font-bold text-sm hover:underline cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-text-muted ml-4">Name</label>
                        <input
                          required
                          type="text"
                          aria-label="Your Name"
                          className="w-full bg-card-bg border border-card-border rounded-2xl p-4 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all text-text-main placeholder:text-text-dim"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-text-muted ml-4">Email</label>
                        <input
                          required
                          type="email"
                          aria-label="Your Email"
                          className="w-full bg-card-bg border border-card-border rounded-2xl p-4 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all text-text-main placeholder:text-text-dim"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-text-muted ml-4">Subject</label>
                        <input
                          required
                          type="text"
                          aria-label="Subject"
                          className="w-full bg-card-bg border border-card-border rounded-2xl p-4 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all text-text-main placeholder:text-text-dim"
                          placeholder="Project Inquiry"
                          value={formData.subject}
                          onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-text-muted ml-4">Message</label>
                        <textarea
                          required
                          rows={4}
                          aria-label="Message"
                          className="w-full bg-card-bg border border-card-border rounded-2xl p-4 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all resize-none text-text-main placeholder:text-text-dim"
                          placeholder="Let's talk about..."
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />
                    </div>
                    <button
                      disabled={isSending}
                      type="submit"
                      aria-label={isSending ? "Sending message" : "Send message"}
                      className="w-full py-5 bg-brand-blue hover:bg-brand-blue/80 text-white font-bold rounded-2xl transition-all shadow-xl shadow-brand-blue/20 flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer"
                    >
                      {isSending ? "Sending..." : "Send Message"}
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            </ThreeDCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
