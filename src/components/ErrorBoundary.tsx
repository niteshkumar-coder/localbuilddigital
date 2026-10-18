import { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw, Home, Shield } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("[LocalBuild ErrorBoundary Caught]:", error, errorInfo);
    this.setState({ errorInfo });
  }

  private handleReset = () => {
    try {
      window.location.href = "/";
    } catch {
      window.location.reload();
    }
  };

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#071126] text-white flex items-center justify-center p-4 sm:p-6 select-none">
          <div className="max-w-md w-full bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-center backdrop-blur-md">
            {/* Brand Accent */}
            <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 mx-auto flex items-center justify-center mb-5 shadow-inner">
              <Shield className="w-7 h-7 text-[#4C7DFF]" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-3">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Application Recovery Mode</span>
            </div>

            <h1 className="font-display font-bold text-2xl text-white tracking-tight mb-2">
              LocalBuild
            </h1>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              We encountered a temporary rendering exception while loading this page. Your session is safe and no data was lost.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <button
                type="button"
                onClick={this.handleReload}
                className="btn btn--primary flex items-center justify-center gap-2 text-sm h-11 px-5 rounded-xl cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Page</span>
              </button>
              <button
                type="button"
                onClick={this.handleReset}
                className="btn btn--ghost flex items-center justify-center gap-2 text-sm h-11 px-5 rounded-xl cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>Return to Home</span>
              </button>
            </div>

            {this.state.error && (
              <details className="text-left text-xs text-slate-400 bg-slate-950/60 p-3 rounded-lg border border-slate-800/80 overflow-hidden">
                <summary className="cursor-pointer font-mono text-[11px] text-slate-400 hover:text-slate-200">
                  Diagnostic details
                </summary>
                <p className="font-mono text-[11px] text-rose-400 mt-2 break-all">
                  {this.state.error.toString()}
                </p>
              </details>
            )}

            <p className="text-[11px] text-slate-400 mt-6">
              Need immediate assistance? Contact{" "}
              <a href="mailto:localbuildhelp@gmail.com" className="text-blue-400 hover:underline">
                localbuildhelp@gmail.com
              </a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
