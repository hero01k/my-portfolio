import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, X, Send, User, MessageSquare, ShieldCheck } from 'lucide-react';

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xvgopkny', { // Replace with actual Formspree ID
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: 'munemhossain497@gmail.com',
          name: formData.name,
          message: formData.message
        }),
      });

      if (response.ok) {
        setStatus('sent');
        setFormData({ name: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[1001]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 20, scale: 0.95, filter: 'blur(10px)' }}
            className="absolute bottom-20 right-0 w-[320px] md:w-[380px] glass rounded-2xl border border-crypto-blue/30 overflow-hidden shadow-[0_0_50px_rgba(0,255,0,0.1)] flex flex-col"
          >
            {/* Header */}
            <div className="bg-crypto-blue/10 p-4 border-b border-crypto-blue/20 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-crypto-blue/20 border border-crypto-blue/40 flex items-center justify-center">
                    <Bot size={16} className="text-crypto-blue animate-pulse" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-crypto-black animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-widest">Uplink Assistant</h4>
                  <p className="text-[8px] text-crypto-blue font-mono uppercase tracking-widest opacity-60">Status: Operational</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6 max-h-[400px] overflow-y-auto">
              {status === 'sent' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-crypto-blue/10 flex items-center justify-center border border-crypto-blue/30 shadow-[0_0_20px_rgba(0,255,0,0.25)]">
                    <ShieldCheck size={32} className="text-crypto-blue" />
                  </div>
                  <div>
                    <h5 className="text-white font-black uppercase text-sm mb-1 tracking-widest">Signal Transmitted</h5>
                    <p className="text-[10px] text-white/40 font-mono uppercase tracking-widest">Message Sent & Encrypted</p>
                  </div>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-[10px] text-crypto-blue font-mono underline underline-offset-4 uppercase tracking-widest hover:text-white transition-colors"
                  >
                    Send Another Uplink
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-mono flex items-center gap-2">
                      <User size={10} /> Operator Name
                    </label>
                    <input 
                      required
                      type="text"
                      placeholder="ENTER IDENTITY..."
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg p-3 text-xs text-white placeholder:text-white/10 focus:outline-none focus:border-crypto-blue/50 focus:bg-white/[0.05] transition-all font-mono"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-mono flex items-center gap-2">
                      <MessageSquare size={10} /> Data Payload
                    </label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="INITIALIZE MESSAGE LOG..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg p-3 text-xs text-white placeholder:text-white/10 focus:outline-none focus:border-crypto-blue/50 focus:bg-white/[0.05] transition-all font-mono resize-none"
                    />
                  </div>
                  <button
                    disabled={status === 'sending'}
                    type="submit"
                    className="w-full py-4 bg-crypto-blue text-black text-xs font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)] transition-all duration-300 disabled:opacity-50"
                  >
                    {status === 'sending' ? 'TRANSMITTING...' : 'EXECUTE UPLINK'}
                    <Send size={14} />
                  </button>
                  {status === 'error' && (
                    <p className="text-[9px] text-red-500 font-mono text-center uppercase tracking-widest animate-pulse">
                      Handshake Failed. Connection Refused.
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* Footer */}
            <div className="bg-white/[0.02] p-3 text-center border-t border-white/5">
              <p className="text-[8px] text-white/20 font-mono uppercase tracking-[0.3em]">
                System Dashboard :: Rev 3.01
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        id="chatbot_trigger"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,255,0,0.3)] border-2 transition-all duration-500 ${
          isOpen ? 'bg-crypto-black border-white/20 text-white' : 'bg-crypto-blue border-crypto-blue text-black'
        }`}
      >
        {isOpen ? <X size={24} /> : (
          <div className="relative">
            <Bot size={28} className="animate-pulse" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-crypto-blue" />
          </div>
        )}
      </motion.button>
    </div>
  );
}
