"use client";

import { useState } from "react";
import { X, Check, CreditCard, User, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SubscriptionModal({ isOpen, onClose, selectedPlan }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredTime: "",
    specialRequests: ""
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setCurrentStep(3);
    setIsSubmitting(false);
  };

  const resetModal = () => {
    setCurrentStep(1);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      preferredTime: "",
      specialRequests: ""
    });
    onClose();
  };

  if (!selectedPlan) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          onClick={resetModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.2)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="sticky top-0 border-b px-6 py-4 rounded-t-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
              }}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  {currentStep === 3 ? "Tack!" : `${selectedPlan.name} Plan`}
                </h2>
                <button
                  onClick={resetModal}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                  style={{
                    background: 'rgba(243, 244, 246, 0.8)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 0, 0, 0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(229, 231, 235, 0.9)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(243, 244, 246, 0.8)';
                  }}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Progress bar */}
              {currentStep < 3 && (
                <div className="mt-4">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${currentStep >= 1 ? 'bg-black' : 'bg-gray-300'}`}></div>
                    <div className={`flex-1 h-1 ${currentStep >= 2 ? 'bg-black' : 'bg-gray-300'}`}></div>
                    <div className={`w-3 h-3 rounded-full ${currentStep >= 2 ? 'bg-black' : 'bg-gray-300'}`}></div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-500">Plan</span>
                    <span className="text-xs text-gray-500">Uppgifter</span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6">
              {/* Step 1: Plan Overview */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                                     <div className="text-center">
                     <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                       {selectedPlan.icon}
                     </div>
                    <h3 className="text-xl font-semibold mb-2">{selectedPlan.name}</h3>
                    <p className="text-3xl font-bold mb-2">
                      {selectedPlan.price} kr<span className="text-lg text-gray-500">/månad</span>
                    </p>
                    <p className="text-gray-600 text-sm">{selectedPlan.desc}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Inkluderat:</h4>
                    {selectedPlan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentStep(2)}
                    className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
                  >
                    Fortsätt
                  </button>
                </motion.div>
              )}

              {/* Step 2: Contact Form */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">Dina uppgifter</h3>
                    <p className="text-gray-600 text-sm">
                      Vi kontaktar dig inom 24 timmar för att slutföra din prenumeration
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Förnamn*
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                          style={{
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            border: '1px solid rgba(0, 0, 0, 0.1)'
                          }}
                          placeholder="Anna"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Efternamn*
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                          style={{
                            background: 'rgba(255, 255, 255, 0.8)',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            border: '1px solid rgba(0, 0, 0, 0.1)'
                          }}
                          placeholder="Andersson"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        E-post*
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        style={{
                          background: 'rgba(255, 255, 255, 0.8)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          border: '1px solid rgba(0, 0, 0, 0.1)'
                        }}
                        placeholder="anna@exempel.se"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Telefon*
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        style={{
                          background: 'rgba(255, 255, 255, 0.8)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          border: '1px solid rgba(0, 0, 0, 0.1)'
                        }}
                        placeholder="+46 70 123 45 67"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Föredragen tid för kontakt
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        style={{
                          background: 'rgba(255, 255, 255, 0.8)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          border: '1px solid rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        <option value="">Välj tid</option>
                        <option value="morning">Förmiddag (09:00-12:00)</option>
                        <option value="afternoon">Eftermiddag (12:00-17:00)</option>
                        <option value="evening">Kväll (17:00-19:00)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Speciella önskemål (valfritt)
                      </label>
                      <textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                        style={{
                          background: 'rgba(255, 255, 255, 0.8)',
                          backdropFilter: 'blur(10px)',
                          WebkitBackdropFilter: 'blur(10px)',
                          border: '1px solid rgba(0, 0, 0, 0.1)'
                        }}
                        placeholder="Berätta om eventuella allergier, preferenser eller speciella önskemål..."
                      />
                    </div>

                    <div className="pt-4 space-y-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Skickar...
                          </>
                        ) : (
                          <>
                            <CreditCard className="w-4 h-4" />
                            Skicka förfrågan
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="w-full py-3 text-gray-600 hover:text-black transition-colors"
                      >
                        ← Tillbaka
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* Step 3: Success */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-6 py-8"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Förfrågan skickad!
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Tack för ditt intresse för {selectedPlan.name} prenumerationen.
                      Vi kommer att kontakta dig inom 24 timmar för att slutföra processen
                      och boka din första tid.
                    </p>
                  </div>

                    <div
                     className="rounded-lg p-4 text-left"
                     style={{
                       background: 'rgba(249, 250, 251, 0.8)',
                       backdropFilter: 'blur(10px)',
                       WebkitBackdropFilter: 'blur(10px)',
                       border: '1px solid rgba(0, 0, 0, 0.05)'
                     }}
                   >
                    <h4 className="font-semibold text-gray-900 mb-2">Nästa steg:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Vi ringer dig för bekräftelse</li>
                      <li>• Avtalar betalning och första besök</li>
                      <li>• Välkomnar dig till Frisör familjen!</li>
                    </ul>
                  </div>

                  <button
                    onClick={resetModal}
                    className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
                  >
                    Stäng
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
