"use client";

import React, { useState, useEffect } from "react";
import { X, Play, Loader2, User, Mail, Building, FileText, CheckCircle2, ShieldAlert, Phone } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string; // Embed url (e.g. https://www.youtube.com/embed/HL8bNlGKlUA)
  projectId: string; // For localStorage tracking (e.g. "cctv-cloud-vms")
}

export default function DemoModal({ isOpen, onClose, videoUrl, projectId }: DemoModalProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    needs: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Check if already unlocked on mount or when projectId changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      const unlockedProjects = JSON.parse(localStorage.getItem("prodevelopers_unlocked_demos") || "{}");
      if (unlockedProjects[projectId]) {
        setIsUnlocked(true);
      }
    }
  }, [projectId]);

  // Handle closing modal
  const handleClose = () => {
    // Reset form states but keep unlocked state if it was successful
    if (status === "success" || isUnlocked) {
      setIsUnlocked(true);
    } else {
      setStatus("idle");
      setErrorMessage("");
    }
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          projectId,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        
        // Save unlocked state in localStorage
        if (typeof window !== "undefined") {
          const unlockedProjects = JSON.parse(localStorage.getItem("prodevelopers_unlocked_demos") || "{}");
          unlockedProjects[projectId] = true;
          localStorage.setItem("prodevelopers_unlocked_demos", JSON.stringify(unlockedProjects));
        }

        // Delay slightly to show beautiful checkmark animation before showing the video
        setTimeout(() => {
          setIsUnlocked(true);
        }, 1500);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
      setErrorMessage("Network error. Please check your internet connection.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop with premium glassmorphism blur */}
      <div 
        className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md transition-opacity duration-300 animate-fade-in" 
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-sm shadow-2xl overflow-hidden z-10 transition-all duration-300 animate-scale-up">
        
        {/* Header decoration line */}
        <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-fuchsia-600 to-indigo-500" />

        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 rounded-sm text-neutral-400 hover:text-neutral-50 hover:bg-neutral-800 transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Unlocked View (Video Player) */}
        {isUnlocked ? (
          <div className="w-full bg-neutral-950">
            <div className="aspect-video w-full relative">
              <iframe
                src={`${videoUrl}?autoplay=1&rel=0&modestbranding=1`}
                title="Project Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
            <div className="p-4 bg-neutral-900 border-t border-neutral-800 flex justify-between items-center">
              <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">
                Playing: Gated Project Demo
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-purple-400 font-semibold">
                Access Unlocked ✓
              </span>
            </div>
          </div>
        ) : (
          /* Locked Form / Success Animation View */
          <div className="p-6 md:p-10 space-y-6">
            
            {status === "success" ? (
              /* Success Animation */
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-fade-in">
                <div className="p-4 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 animate-pulse">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-50">Information Authenticated</h3>
                <p className="text-neutral-400 text-sm font-mono uppercase tracking-wider">
                  Unlocking demo, preparing player...
                </p>
              </div>
            ) : (
              /* Gated Form View */
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-sm border border-purple-500/20 bg-purple-500/5 font-mono text-[9px] uppercase tracking-widest text-purple-400">
                    <Play className="w-2.5 h-2.5 fill-current" />
                    Gated Project Demo
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-neutral-50">
                    Enter details to unlock demo
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-500 leading-relaxed">
                    We collect contact details and specific requirements so our engineering team can discuss custom modifications and scaling criteria matching your business needs.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Email Group */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="name" className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 block">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-neutral-600" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Alex Carter"
                          value={formData.name}
                          onChange={handleInputChange}
                          disabled={status === "submitting"}
                          className="w-full pl-9 pr-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-sm text-sm text-neutral-100 placeholder-neutral-700 focus:outline-none focus:border-purple-500/50 transition-colors font-sans"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="email" className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 block">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-neutral-600" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="alex.carter@company.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          disabled={status === "submitting"}
                          className="w-full pl-9 pr-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-sm text-sm text-neutral-100 placeholder-neutral-700 focus:outline-none focus:border-purple-500/50 transition-colors font-sans"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone & Company Group */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="phone" className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 block">
                        Contact Phone (Optional)
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-neutral-600" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="+1 (555) 019-2834"
                          value={formData.phone}
                          onChange={handleInputChange}
                          disabled={status === "submitting"}
                          className="w-full pl-9 pr-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-sm text-sm text-neutral-100 placeholder-neutral-700 focus:outline-none focus:border-purple-500/50 transition-colors font-sans"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="company" className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 block">
                        Company / Organization (Optional)
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 w-4 h-4 text-neutral-600" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          placeholder="Acme Corporation"
                          value={formData.company}
                          onChange={handleInputChange}
                          disabled={status === "submitting"}
                          className="w-full pl-9 pr-4 py-2.5 bg-neutral-950 border border-neutral-800 rounded-sm text-sm text-neutral-100 placeholder-neutral-700 focus:outline-none focus:border-purple-500/50 transition-colors font-sans"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Requirements / Modifications Field */}
                  <div className="space-y-1">
                    <label htmlFor="needs" className="font-mono text-[9px] uppercase tracking-widest text-neutral-400 block">
                      Desired Custom Modifications / Needs (Optional)
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3.5 w-4 h-4 text-neutral-600" />
                      <textarea
                        id="needs"
                        name="needs"
                        rows={3}
                        placeholder="E.g., custom low-latency settings, edge processing configurations, specific wireguard deployment..."
                        value={formData.needs}
                        onChange={handleInputChange}
                        disabled={status === "submitting"}
                        className="w-full pl-9 pr-4 py-3 bg-neutral-950 border border-neutral-800 rounded-sm text-sm text-neutral-100 placeholder-neutral-700 focus:outline-none focus:border-purple-500/50 transition-colors font-sans resize-none"
                      />
                    </div>
                  </div>

                  {/* Error Message */}
                  {status === "error" && (
                    <div className="p-3 bg-red-950/20 border border-red-900/30 rounded-sm text-xs text-red-400 flex items-center space-x-2 animate-fade-in font-sans">
                      <ShieldAlert className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-3.5 bg-purple-600 hover:bg-purple-500 active:bg-purple-700 disabled:bg-purple-900/50 text-white font-mono text-xs uppercase tracking-wider font-semibold rounded-sm transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Verifying Credentials...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Unlock Demo Video</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
