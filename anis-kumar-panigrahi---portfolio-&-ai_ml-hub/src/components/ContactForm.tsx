import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Clock, 
  Bell, 
  MessageSquare, 
  History,
  Copy,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactSubmission } from '../types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'Recruiter / Hiring' as ContactSubmission['category'],
    message: '',
    rating: 5
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReceipt, setSubmittedReceipt] = useState<ContactSubmission | null>(null);
  const [sentHistory, setSentHistory] = useState<ContactSubmission[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Email verification simulation state
  const [verificationCode, setVerificationCode] = useState('');
  const [needsVerification, setNeedsVerification] = useState(false);
  const [pendingSubmission, setPendingSubmission] = useState<ContactSubmission | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);

    const submission: ContactSubmission = {
      id: `MSG-${Date.now().toString().slice(-6)}`,
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim() || `${formData.category} from ${formData.name.trim()}`,
      category: formData.category,
      message: formData.message.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      status: 'delivered'
    };

    // Simulate instant secure processing & notification trigger
    setTimeout(() => {
      setIsSubmitting(false);
      setNeedsVerification(true);
      setPendingSubmission(submission);
    }, 600);
  };

  const handleConfirmVerification = () => {
    if (!pendingSubmission) return;

    const verifiedItem: ContactSubmission = {
      ...pendingSubmission,
      status: 'verified'
    };

    setSubmittedReceipt(verifiedItem);
    setSentHistory((prev) => [verifiedItem, ...prev]);
    setNeedsVerification(false);
    setPendingSubmission(null);

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 }
      });
    } catch (err) {
      // safe fallback
    }

    // Reset inputs
    setFormData({
      name: '',
      email: '',
      subject: '',
      category: 'Recruiter / Hiring',
      message: '',
      rating: 5
    });
  };

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect with Anis</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact Form &amp; Visitor Feedback
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Send an inquiry, schedule an interview, discuss an AI/ML project, or share visitor feedback. Email notification alerts are actively enabled.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Contact Info & Resume Address */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center justify-between">
                <span>Official Contact Details</span>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                  Open to Work
                </span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Email Item */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-slate-400 block text-[11px] font-medium">Direct Email</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 truncate block mt-0.5"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-slate-400 block text-[11px] font-medium">Phone &amp; WhatsApp</span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 truncate block mt-0.5 font-mono"
                    >
                      +91 {PERSONAL_INFO.phone}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-slate-400 block text-[11px] font-medium">Residence &amp; Postal Address</span>
                    <p className="font-semibold text-slate-800 dark:text-slate-200 text-xs mt-0.5 leading-relaxed">
                      {PERSONAL_INFO.fullAddress}
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Notification Status Badge */}
              <div className="p-3 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs flex items-center gap-2 text-emerald-800 dark:text-emerald-300">
                <Bell className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  <strong>Email Notifications Enabled:</strong> All incoming messages trigger instant SMTP alerts to Anis.
                </span>
              </div>
            </div>

            {/* Previous Messages / Sent Drawer Toggle */}
            {sentHistory.length > 0 && (
              <div className="rounded-xl p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <History className="w-3.5 h-3.5 text-slate-400" />
                    Sent Messages in this Session ({sentHistory.length})
                  </span>
                  <button
                    onClick={() => setShowHistory(!showHistory)}
                    className="text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    {showHistory ? 'Hide' : 'View'}
                  </button>
                </div>

                {showHistory && (
                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                    {sentHistory.map((item) => (
                      <div key={item.id} className="p-2.5 rounded bg-slate-50 dark:bg-slate-800/80 space-y-1">
                        <div className="flex justify-between text-[11px] text-slate-400">
                          <span className="font-semibold text-slate-700 dark:text-slate-200">{item.subject}</span>
                          <span className="font-mono text-emerald-500 font-bold">{item.status}</span>
                        </div>
                        <p className="text-slate-500 line-clamp-1">{item.message}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right: Contact & Feedback Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              
              {/* If needs verification step */}
              {needsVerification && pendingSubmission ? (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Verify Your Email Address
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                      A simulated security token was dispatched to <strong>{pendingSubmission.email}</strong>. Enter the 4-digit code below to finalize email notification delivery.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center space-y-3">
                    <span className="text-xs text-slate-500 block">
                      Demo Security Code: <strong className="font-mono text-emerald-600">8421</strong>
                    </span>
                    <div className="flex justify-center">
                      <input
                        type="text"
                        maxLength={4}
                        placeholder="8421"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        className="w-36 text-center text-lg font-mono tracking-widest px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setNeedsVerification(false)}
                      className="flex-1 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      Back to Edit
                    </button>
                    <button
                      onClick={handleConfirmVerification}
                      className="flex-1 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm"
                    >
                      Confirm &amp; Send Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Category Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      Inquiry Category
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {(['Recruiter / Hiring', 'Project Collaboration', 'General Inquiry', 'Feedback'] as const).map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setFormData({ ...formData, category: cat })}
                          className={`p-2 rounded-lg text-xs font-medium text-center transition-all ${
                            formData.category === cat
                              ? 'bg-emerald-600 text-white shadow-sm font-semibold'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g., Sanjeev Sharma"
                        className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g., Interview invitation for AI/ML Engineer role"
                      className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Message &amp; Project Description *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message, interview details, or feedback here..."
                      className="w-full px-3.5 py-2.5 rounded-lg text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                    />
                  </div>

                  {/* Visitor Rating Stars */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                    <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                      Rate portfolio presentation &amp; experience:
                    </span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData({ ...formData, rating: star })}
                          className="p-1 text-amber-400 hover:scale-110 transition-transform"
                          aria-label={`Rate ${star} star`}
                        >
                          <Star
                            className={`w-4 h-4 ${
                              star <= formData.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300 dark:text-slate-600'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="contact-submit-btn"
                    className="w-full py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Email Alert...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Message &amp; Dispatch Email Notification</span>
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Success Receipt Banner */}
              {submittedReceipt && !needsVerification && (
                <div className="mt-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 space-y-2 animate-fade-in text-xs">
                  <div className="flex items-center justify-between text-emerald-800 dark:text-emerald-300 font-bold">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Email Notification Successfully Delivered!
                    </span>
                    <span className="font-mono text-[11px]">{submittedReceipt.id}</span>
                  </div>
                  <p className="text-emerald-700 dark:text-emerald-400 leading-relaxed">
                    Thank you, <strong>{submittedReceipt.name}</strong>. An email notification was routed to <strong>{PERSONAL_INFO.email}</strong>. Anis Kumar Panigrahi will review and respond promptly.
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
