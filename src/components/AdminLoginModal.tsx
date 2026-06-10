import { useState, useEffect, FormEvent } from "react";
import { Lock, Eye, EyeOff, AlertCircle, X, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (token: string) => void;
}

export default function AdminLoginModal({ isOpen, onClose, onLoginSuccess }: AdminLoginModalProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Clear states when opening
  useEffect(() => {
    if (isOpen) {
      setPassword("");
      setError("");
      setShowPassword(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!password) {
      setError("Please enter the authorization password.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/portal-auth-v2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("text/html")) {
        setError("Your browser is blocking cookie access inside the preview iframe. Please click the 'Open in New Tab' button in the toolbar to access the dashboard!");
        return;
      }

      let data;
      try {
        data = await response.json();
      } catch (jsonErr) {
        setError("Your browser is blocking cookie access inside the preview iframe. Please click the 'Open in New Tab' button in the toolbar to access the dashboard!");
        return;
      }

      if (response.ok && data.success) {
        onLoginSuccess(data.token);
        onClose();
      } else {
        setError(data.error || "Invalid Password");
      }
    } catch (err: any) {
      console.error("Login failure exception details:", err);
      setError(`Connection refused. Please open the application in a new tab to bypass cookie blocking.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
        {/* Backdrop clicking closes optionally */}
        <div className="absolute inset-0" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="relative bg-white rounded-2xl shadow-2xl border border-zinc-100 max-w-md w-full overflow-hidden z-10"
        >
          {/* Accent decoration line */}
          <div className="h-1.5 w-full bg-blue-600" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-650 p-1.5 rounded-full hover:bg-zinc-100 transition cursor-pointer"
            aria-label="Close panel"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-8">
            {/* Header branding */}
            <div className="flex flex-col items-center text-center space-y-2.5 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                <ShieldAlert className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-[15px] sm:text-lg text-zinc-900 tracking-wider uppercase leading-snug">
                  LOCALBUILD ADMIN DATABASE
                </h3>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mt-1">
                  Authorized Access Only
                </p>
              </div>
            </div>

            {/* Input form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-zinc-650 uppercase tracking-wider block">
                  Password Input
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-400 pointer-events-none">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter security key..."
                    className="w-full text-sm font-mono h-[48px] pl-10 pr-10 rounded-xl border border-zinc-200 outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-zinc-300"
                    disabled={isSubmitting}
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-zinc-600 cursor-pointer"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
                  </button>
                </div>
              </div>

              {/* Error box */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-100 p-3 rounded-xl flex items-center gap-2.5 text-xs font-semibold text-red-650"
                >
                  <AlertCircle className="w-4.5 h-4.5 text-red-500 shrink-0" />
                  <span>{error}</span>
                </motion.div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-[48px] bg-blue-600 hover:bg-blue-700 text-white font-bold leading-none tracking-wider rounded-xl transition duration-200 shadow-md shadow-blue-500/10 cursor-pointer flex items-center justify-center gap-2 text-sm uppercase"
              >
                {isSubmitting ? "Verifying..." : "Open Dashboard"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
