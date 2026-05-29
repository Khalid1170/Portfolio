import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, User, Send, CheckCircle2, MessageSquare, Copy, Check, Github } from "lucide-react";

export const ContactSection = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedId, setCopiedId] = useState("");

  const contactMethods = [
    {
      id: "name",
      icon: <User className="w-5 h-5 text-primary" />,
      label: "Designer",
      value: "Khalid Abdi",
      actionable: false,
    },
    {
      id: "github",
      icon: <Github className="w-5 h-5 text-primary" />,
      label: "Open Source Blueprint",
      value: "github.com/khalid1170",
      href: "https://github.com/khalid1170",
      actionable: false, // Set to true if you want users to copy the handle string instead
    },
    {
      id: "phone",
      icon: <Phone className="w-5 h-5 text-primary" />,
      label: "Direct Line",
      value: "07810328543",
      href: "tel:07810328543",
      actionable: true,
    },
    {
      id: "email",
      icon: <Mail className="w-5 h-5 text-primary" />,
      label: "Electronic Mail",
      value: "khalidabdi321@gmail.com",
      href: "mailto:khalidabdi321@gmail.com",
      actionable: true,
    },
  ];

  const handleCopy = (id, value) => {
    navigator.clipboard.writeText(value);
    setCopiedId(id);
    setTimeout(() => setCopiedId(""), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/mqejjbod", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
        // Hide success message after 4 seconds
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "Transmission failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error occurred. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-4 relative bg-transparent overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Header Block */}
        <div className="text-left max-w-xl mb-20">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-sm tracking-widest uppercase mb-3">
            <MessageSquare className="w-4 h-4" /> Connection Portal
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Let's Build <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-muted-foreground text-left text-sm sm:text-base leading-relaxed mt-4">
            Have a project architectural blueprint in mind or seeking to contract a full-stack deployment? Drop a line below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Panel: Structured Directory */}
          <div className="lg:col-span-5 space-y-4">
            {contactMethods.map((method) => (
              <div
                key={method.id}
                className="flex items-center justify-between p-5 rounded-2xl border border-border/50 bg-card/10 backdrop-blur-sm group hover:border-border transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="p-3 rounded-xl bg-secondary/50 border border-border/40 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                    {method.icon}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground block mb-0.5">
                      {method.label}
                    </span>
                    {method.href ? (
                      <a
                        href={method.href}
                        target={method.id === "github" ? "_blank" : undefined}
                        rel={method.id === "github" ? "noopener noreferrer" : undefined}
                        className="text-sm sm:text-base font-semibold text-foreground hover:text-primary transition-colors duration-200"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <span className="text-sm sm:text-base font-semibold text-foreground">
                        {method.value}
                      </span>
                    )}
                  </div>
                </div>

                {/* Interactive Clipboard Functionality */}
                {method.actionable && (
                  <button
                    onClick={() => handleCopy(method.id, method.value)}
                    className="p-2 rounded-lg hover:bg-secondary/80 border border-transparent hover:border-border text-muted-foreground hover:text-foreground transition-all duration-200"
                    title={`Copy ${method.id}`}
                  >
                    {copiedId === method.id ? (
                      <Check className="w-4 h-4 text-emerald-500 animate-scale-in" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Right Panel: Clean Communications Form */}
          <div className="lg:col-span-7">
            <div className="relative p-6 sm:p-8 rounded-2xl border border-border/60 bg-card/5 backdrop-blur-md shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Floating Input Field: Name */}
                <div className="relative text-left">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder=" "
                    className="w-full bg-secondary/20 border border-border/50 rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200 peer placeholder-shown:scale-100"
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-sm text-muted-foreground left-4 top-3.5 pointer-events-none transition-all duration-200 origin-[0]
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                    peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-primary"
                    style={{
                      transform: formState.name ? "translateY(-1.75rem) scale(0.75)" : ""
                    }}
                  >
                    Your Name
                  </label>
                </div>

                {/* Floating Input Field: Email */}
                <div className="relative text-left">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder=" "
                    className="w-full bg-secondary/20 border border-border/50 rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200 peer"
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-muted-foreground left-4 top-3.5 pointer-events-none transition-all duration-200 origin-[0]
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                    peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-primary"
                    style={{
                      transform: formState.email ? "translateY(-1.75rem) scale(0.75)" : ""
                    }}
                  >
                    Email Address
                  </label>
                </div>

                {/* Floating Input Field: Message */}
                <div className="relative text-left">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder=" "
                    className="w-full bg-secondary/20 border border-border/50 rounded-xl px-4 py-3.5 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200 peer resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute text-sm text-muted-foreground left-4 top-3.5 pointer-events-none transition-all duration-200 origin-[0]
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                    peer-focus:scale-75 peer-focus:-translate-y-7 peer-focus:text-primary"
                    style={{
                      transform: formState.message ? "translateY(-1.75rem) scale(0.75)" : ""
                    }}
                  >
                    Project Context or Message
                  </label>
                </div>

                {/* Submit Trigger Actions Wrapper */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <div className="h-6 w-full text-left">
                    <AnimatePresence mode="wait">
                      {isSubmitted && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          className="flex items-center gap-2 text-emerald-500 font-medium text-sm"
                        >
                          <CheckCircle2 className="w-4 h-4 shrink-0" />
                          Message transmitted successfully!
                        </motion.div>
                      )}
                      {errorMessage && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          className="text-destructive font-medium text-sm"
                        >
                          {errorMessage}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl shadow-sm transition-all duration-200 disabled:opacity-50 group min-w-[140px]"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    ) : (
                      <>
                        Dispatch Message
                        <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};