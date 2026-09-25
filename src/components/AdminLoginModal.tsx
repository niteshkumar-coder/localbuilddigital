import { useState, useEffect, FormEvent } from "react";
import { Lock, User, Eye, EyeOff, AlertCircle, X, Shield, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (token: string, user?: any) => void;
}

export default function AdminLoginModal({ isOpen, onClose, onLoginSuccess }: AdminLoginModalProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Clear states when opening
  useEffect(() => {
    if (isOpen) {
      setUsername("");
      setPassword("");
      setError("");
      setShowPassword(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError("Please enter your admin password.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          username: username.trim(),
          password: password.trim() 
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success && data?.token) {
        onLoginSuccess(data.token, data.user);
        onClose();
      } else {
        setError(data?.error || "Invalid credentials. Please verify your username and password.");
      }
    } catch (err: any) {
      console.error("Authentication request error:", err);
      setError("Unable to authenticate with the server. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="admin-login-title"
      >
        {/* Backdrop click to close */}
        <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white rounded-2xl shadow-2xl border border-zinc-200 max-w-md w-full overflow-hidden z-10"
        >
          {/* Top brand accent bar */}
          <div className="h-1.5 w-full bg-blue-600" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 p-2 rounded-full hover:bg-zinc-100 transition-colors cursor-pointer"
            aria-label="Close admin login panel"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 sm:p-8">
            {/* Header branding */}
            <div className="flex flex-col items-center text-center space-y-2 mb-6">
              <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-xs">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h2 id="admin-login-title" className="font-display font-extrabold text-xl text-zinc-900 tracking-tight leading-snug">
                  LocalBuild Admin
                </h2>
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mt-0.5">
                  Secure Lead Dashboard
                </p>
              </div>
            </div>

            {/* Input form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Field 1: Email / Username */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-700 block">
                  Email / Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-400 pointer-events-none">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="admin or email address"
                    className="w-full text-sm h-11 pl-10 pr-3.5 rounded-xl border border-zinc-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-zinc-400"
                    disabled={isSubmitting}
                    autoComplete="username"
                    autoFocus
                  />
                </div>
              </div>

              {/* Field 2: Password */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-zinc-700 block">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-400 pointer-events-none">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="w-full text-sm h-11 pl-10 pr-10 rounded-xl border border-zinc-300 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-zinc-400"
                    disabled={isSubmitting}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-zinc-600 cursor-pointer"
                    tabIndex={-1}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Error box */}
              {error && (
                <div className="bg-red-50 border border-red-200 p-3.5 rounded-xl flex items-center gap-2.5 text-xs font-medium text-red-700 animate-fadeIn">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Submit button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-bold tracking-wider rounded-xl transition duration-150 shadow-md shadow-blue-600/20 cursor-pointer flex items-center justify-center gap-2 text-sm uppercase disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>LOGGING IN...</span>
                    </>
                  ) : (
                    <span>LOGIN</span>
                  )}
                </button>
              </div>

              {/* Default Credentials Helper */}
              <div className="rounded-xl bg-blue-50/70 border border-blue-100 p-3 text-xs text-zinc-600">
                <div className="flex items-center justify-between font-semibold text-zinc-800 mb-1.5">
                  <span className="text-xs">Default Admin Login:</span>
                  <button
                    type="button"
                    onClick={() => {
                      setUsername("admin");
                      setPassword("LOCAL45090");
                    }}
                    className="text-blue-600 hover:text-blue-800 font-bold cursor-pointer text-[11px] underline underline-offset-2"
                  >
                    Auto Fill Credentials
                  </button>
                </div>
                <div className="text-[12px] font-mono text-zinc-700 space-y-0.5 bg-white/80 p-2 rounded-lg border border-blue-100/80">
                  <p><span className="text-zinc-500 font-sans">Username:</span> <strong className="text-blue-900">admin</strong></p>
                  <p><span className="text-zinc-500 font-sans">Password:</span> <strong className="text-blue-900">LOCAL45090</strong></p>
                </div>
              </div>

              <div className="text-center pt-1">
                <p className="text-[11px] text-zinc-400">
                  Protected by server-side salted authentication &amp; encrypted sessions.
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
