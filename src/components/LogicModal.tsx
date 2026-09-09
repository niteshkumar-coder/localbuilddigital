import { useState } from "react";
import { Code2, Copy, Check, X, Download } from "lucide-react";

export const RESULT_MODULE_JAVA_CODE = `package module_3;

import java.util.Scanner;

public class ResultModule {

    static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {

        System.out.println("--- Campus Academic Management System (CAMS) ---");

        System.out.print("Enter the number of students: ");
        int n = sc.nextInt();

        int[] studentMarks = new int[n];

        // Read marks
        readMarks(studentMarks);

        System.out.print("Enter the marks to search: ");
        int searchMark = sc.nextInt();

        // Search marks
        int position = searchMarks(studentMarks, searchMark);

        // Display result
        displaySearchResult(position);
    }

    // Method to read marks
    static void readMarks(int studentMarks[]) {

        for (int i = 0; i < studentMarks.length; i++) {

            System.out.print("Enter marks of Student " + (i + 1) + ": ");
            studentMarks[i] = sc.nextInt();
        }
    }

    // Method to search marks
    static int searchMarks(int studentMarks[], int searchMark) {

        for (int i = 0; i < studentMarks.length; i++) {

            if (studentMarks[i] == searchMark) {
                return i;
            }
        }

        return -1;
    }

    // Method to display search result
    static void displaySearchResult(int position) {

        if (position != -1) {

            System.out.println(
                "Marks found at Student " + (position + 1)
            );

        } else {

            System.out.println("Marks not found.");
        }
    }
}`;

interface LogicModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LogicModal({ isOpen, onClose }: LogicModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(RESULT_MODULE_JAVA_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([RESULT_MODULE_JAVA_CODE], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ResultModule.java";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="logic-modal-backdrop"
      className="fixed inset-0 z-[99999] bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="logic-modal-container"
        className="bg-zinc-900 border border-zinc-700/80 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[88vh] flex flex-col overflow-hidden text-zinc-100 animate-in fade-in zoom-in-95 duration-150"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800 bg-zinc-950/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                ResultModule.java
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
                  Java Module 3
                </span>
              </h3>
              <p className="text-xs text-zinc-400">
                Campus Academic Management System (CAMS) • Internal Search Logic
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Copy Button */}
            <button
              type="button"
              onClick={handleCopy}
              id="copy-logic-code-btn"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition cursor-pointer active:scale-95"
              title="Copy Java Code"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Copy</span>
                </>
              )}
            </button>

            {/* Download Button */}
            <button
              type="button"
              onClick={handleDownload}
              id="download-logic-code-btn"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition cursor-pointer active:scale-95"
              title="Download ResultModule.java"
            >
              <Download className="w-3.5 h-3.5 text-zinc-400" />
              <span>Download</span>
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              id="close-logic-modal-btn"
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition cursor-pointer ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body - Preformatted Java Code */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 bg-zinc-950 font-mono text-xs sm:text-[13px] text-zinc-200 select-text leading-relaxed">
          <pre className="whitespace-pre font-mono">
            <code>{RESULT_MODULE_JAVA_CODE}</code>
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-zinc-800 bg-zinc-950/90 flex items-center justify-between text-xs text-zinc-400 shrink-0">
          <span className="text-[11px] sm:text-xs">
            Method: <code className="text-blue-400">searchMarks(int studentMarks[], int searchMark)</code>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
