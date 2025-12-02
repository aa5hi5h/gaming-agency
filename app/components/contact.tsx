"use client"
import React, { useState } from 'react';
import { Send, CheckCircle, Wallet, Layers, MessageSquare, Briefcase } from 'lucide-react';
import { INTEREST_OPTIONS, BUDGET_OPTIONS, ASSETS } from '../constants';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    website: '',
    interests: [] as string[],
    projectCategory: 'Web3 Game', // Default
    productStage: 'Not Live',     // Default
    message: '',
    budget: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest) 
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020202] p-4 relative overflow-hidden">
        {/* Success Background */}
        <div className="absolute inset-0 z-0">
             <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-20 grayscale">
                <source src={ASSETS.contactBackground} type="video/mp4" />
             </video>
        </div>
        <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-12 text-center max-w-lg w-full backdrop-blur-xl">
          <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Brief Received!</h2>
          <p className="text-gray-400 mb-8">
            Thank you for reaching out. Our team will analyze your project and get back to you within 24 hours.
          </p>
          <button 
            onClick={() => setIsSuccess(false)}
            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all"
          >
            Send Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <section id="contact" className="relative py-24 min-h-screen flex items-center bg-[#020202] overflow-hidden">
      {/* Background Video - The Mail Envelope */}
      <div className="absolute top-0 right-0  md:w-1/2 md:h-full z-0 opacity-40 md:opacity-100 pointer-events-none mix-blend-screen">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover md:object-contain"
        >
          <source src={ASSETS.contactBackground} type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Form Side */}
        <div className="w-full">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">Let's Talk.</h2>
            <p className="text-xl text-gray-400">Ready to scale your project? Fill out the brief below.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Section 1: Basics */}
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#a855f7] uppercase tracking-widest">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-none border-l-2 border-l-[#a855f7] px-4 py-4 text-white focus:bg-white/10 outline-none transition-all placeholder:text-gray-600"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#a855f7] uppercase tracking-widest">Website URL</label>
                <input 
                  type="url" 
                  className="w-full bg-white/5 border border-white/10 rounded-none border-l-2 border-l-transparent focus:border-l-[#a855f7] px-4 py-4 text-white focus:bg-white/10 outline-none transition-all placeholder:text-gray-600"
                  placeholder="https://gaming.agency"
                  value={formData.website}
                  onChange={e => setFormData({...formData, website: e.target.value})}
                />
              </div>
            </div>

            {/* Section 2: Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project Category Dropdown */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#a855f7] uppercase tracking-widest">Project Category</label>
                <div className="relative">
                  <select 
                    value={formData.projectCategory}
                    onChange={e => setFormData({...formData, projectCategory: e.target.value})}
                    className="w-full appearance-none bg-white/5 border border-white/10 rounded-none px-4 py-4 text-white focus:bg-white/10 outline-none transition-all cursor-pointer"
                  >
                    <option className="bg-black text-white" value="Web3 Game">Web3 Game</option>
                    <option className="bg-black text-white" value="iGaming Operator">iGaming Operator</option>
                    <option className="bg-black text-white" value="NFT Collection">NFT Collection</option>
                    <option className="bg-black text-white" value="DeFi Platform">DeFi Platform</option>
                    <option className="bg-black text-white" value="Infrastructure">Infrastructure</option>
                    <option className="bg-black text-white" value="Other">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              {/* Product Stage Radio */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#a855f7] uppercase tracking-widest">Product Stage</label>
                <div className="flex gap-4 h-full items-center">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className={`w-5 h-5 border rounded-full flex items-center justify-center ${formData.productStage === 'Live' ? 'border-[#a855f7]' : 'border-gray-500'}`}>
                      {formData.productStage === 'Live' && <div className="w-3 h-3 bg-[#a855f7] rounded-full"></div>}
                    </div>
                    <input type="radio" className="hidden" name="stage" value="Live" checked={formData.productStage === 'Live'} onChange={() => setFormData({...formData, productStage: 'Live'})} />
                    <span className={`text-sm ${formData.productStage === 'Live' ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>Live</span>
                  </label>
                  
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <div className={`w-5 h-5 border rounded-full flex items-center justify-center ${formData.productStage === 'Not Live' ? 'border-[#a855f7]' : 'border-gray-500'}`}>
                      {formData.productStage === 'Not Live' && <div className="w-3 h-3 bg-[#a855f7] rounded-full"></div>}
                    </div>
                    <input type="radio" className="hidden" name="stage" value="Not Live" checked={formData.productStage === 'Not Live'} onChange={() => setFormData({...formData, productStage: 'Not Live'})} />
                    <span className={`text-sm ${formData.productStage === 'Not Live' ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>Not Live</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Section 3: Interests */}
            <div className="space-y-4">
              <label className="text-xs font-bold text-[#a855f7] uppercase tracking-widest flex items-center gap-2">
                 Interests
              </label>
              <div className="flex flex-wrap gap-2">
                {INTEREST_OPTIONS.map((interest) => (
                  <label 
                    key={interest}
                    className={`cursor-pointer px-4 py-2 text-sm border transition-all duration-200 ${
                      formData.interests.includes(interest) 
                        ? 'bg-[#a855f7] border-[#a855f7] text-white' 
                        : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30'
                    }`}
                  >
                    <input 
                      type="checkbox" 
                      className="hidden"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleInterestChange(interest)}
                    />
                    {interest}
                  </label>
                ))}
              </div>
            </div>

             {/* Section 4: Message */}
             <div className="space-y-2">
                <label className="text-xs font-bold text-[#a855f7] uppercase tracking-widest">Message / Details</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-none border-l-2 border-l-transparent focus:border-l-[#a855f7] px-4 py-4 text-white focus:bg-white/10 outline-none transition-all placeholder:text-gray-600 resize-none"
                  placeholder="Tell us more about your project goals..."
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                />
              </div>

            {/* Section 5: Budget */}
            <div className="space-y-4">
               <label className="text-xs font-bold text-[#a855f7] uppercase tracking-widest">
                 Expected Budget
               </label>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                 {BUDGET_OPTIONS.map((opt) => (
                   <label 
                    key={opt}
                    className={`text-center py-3 px-2 border cursor-pointer transition-all ${
                      formData.budget === opt 
                        ? 'bg-white text-black border-white font-bold' 
                        : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30'
                    }`}
                   >
                     <input 
                      type="radio" 
                      name="budget" 
                      value={opt}
                      checked={formData.budget === opt}
                      onChange={e => setFormData({...formData, budget: e.target.value})}
                      className="hidden"
                     />
                     <span className="text-xs sm:text-sm">{opt}</span>
                   </label>
                 ))}
               </div>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full py-6 bg-[#a855f7] hover:bg-[#9333ea] text-white font-black text-xl tracking-widest uppercase transition-all flex items-center justify-center gap-4 disabled:opacity-50 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
            >
              {isSubmitting ? (
                <span className="animate-pulse">Processing...</span>
              ) : (
                <>
                  Submit Brief <Send size={24} />
                </>
              )}
            </button>

          </form>
        </div>

        {/* Visual Spacer for Desktop */}
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
};
