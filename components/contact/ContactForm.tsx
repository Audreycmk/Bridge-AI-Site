"use client"

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [requestDemo, setRequestDemo] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form) as any);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("Message sent — we'll be in touch soon.");
        form.reset();
        setRequestDemo(false);
      } else {
        const json = await res.json();
        setStatus(json?.error || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Network error — please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
      
      {/* --- REQUEST DEMO SECTION ABOVE WITH ORIGINAL CLASSES --- */}
      <div className="contact-side-panel bg-slate-50 dark:bg-zinc-900 p-6 rounded-2xl border border-slate-100 dark:border-zinc-800 w-full transition-all duration-300">
        <div className="contact-side-copy">
          <h4 className="text-xl tracking-wide mb-5 text-slate-900 dark:text-white">Discover Bridge AI with a Live Demo</h4>
          
          <label className="demo-checkbox flex items-center gap-4 cursor-pointer select-none mb-4">
            <input 
              type="checkbox" 
              name="requestDemo" 
              checked={requestDemo}
              onChange={(e) => setRequestDemo(e.target.checked)}
              className="w-6 h-6 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 scale-125 accent-indigo-600 cursor-pointer" 
            />
            <span className="font-semibold text-base sm:text-lg text-slate-800 dark:text-slate-200">
              Yes, I want to request a demo.
            </span>
          </label>

          {/* DYNAMIC EXPANSION: Dates only reveal when checked */}
          {requestDemo && (
            <div className="demo-dates mt-4 mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-300 animate-in fade-in slide-in-from-top-2">
              <label className="flex flex-col gap-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                Preferred Date
                <input 
                  type="date" 
                  name="demoDate" 
                  className="mt-1 p-2 border border-slate-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-950 w-full focus:ring-2 focus:ring-indigo-500 outline-none" 
                  required 
                />
              </label>
    
                {/* <input 
                  type="time" 
                  name="demoTime" 
                  className="mt-1 p-2 border border-slate-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-950 w-full focus:ring-2 focus:ring-indigo-500 outline-none" 
                  required 
                /> */}

                <label className="flex flex-col gap-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                Preferred Time
                <select 
                  name="demoTime" 
                  className="mt-1 p-2.5 border border-slate-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-950 w-full focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900 dark:text-slate-100 cursor-pointer"
                  required
                >
                  <option value="" disabled selected hidden>Select a time slot</option>
                  <option value="09:30">09:30 </option>
                  <option value="10:00">10:00 </option>
                  <option value="10:30">10:30 </option>
                  <option value="11:00">11:00 </option>
                  <option value="11:30">11:30 </option>
                  <option value="12:00">12:00 </option>
                  <option value="14:00">14:00 </option>
                  <option value="14:30">14:30 </option>
                  <option value="15:00">15:00 </option>
                  <option value="15:30">15:30 </option>
                  <option value="16:00">16:00 </option>
                  <option value="16:30">16:30 </option>
                  <option value="17:00">17:00 </option>
                </select>
              </label>
            </div>
          )}

          {/* ALWAYS VISIBLE: Address shows before & after checkbox interaction */}
         
            {/* <p className="text-slate-900 dark:text-slate-100"><strong>Address:</strong></p>
            <p className="text-slate-600 dark:text-slate-400 mt-0.5">16 Station Lane, Hung Hom</p> */}
        
           <div className="demo-address">
                <p><strong>Address:</strong></p>
                <p>16 Station Lane, Hung Hom</p>
              </div>
        </div>
      </div>

      {/* --- STANDARD REGISTRATION FIELDS BELOW --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <label className="flex flex-col gap-1 text-sm font-medium text-white">
    First name
    <input name="firstName" type="text" placeholder="First name" className="p-3 border border-slate-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none" required />
  </label>
  <label className="flex flex-col gap-1 text-sm font-medium text-white">
    Last name
    <input name="lastName" type="text" placeholder="Last name" className="p-3 border border-slate-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none" required />
  </label>
</div>

<label className="flex flex-col gap-1 text-sm font-medium text-white">
  Email
  <input name="email" type="email" placeholder="Email" className="p-3 border border-slate-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none" required />
</label>

<label className="flex flex-col gap-1 text-sm font-medium text-white">
  Company
  <input name="company" type="text" placeholder="Company" className="p-3 border border-slate-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none" required />
</label>

<label className="flex flex-col gap-1 text-sm font-medium text-white">
  Message
  <textarea name="message" placeholder="How can we help you?" rows={4} className="p-3 border border-slate-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none" required />
</label>
      {/* --- DYNAMIC ACTION SUBMISSION KEYED TO SELECTION STATE --- */}
      <div className="flex flex-col sm:flex-row gap-4 items-center mt-2">
        <button 
          type="submit" 
          className="w-full sm:w-auto bg-[#6fbee9] text-grey px-8 py-3.5 rounded-xl font-semibold hover:bg-[#5997b9] transition shadow-md hover:shadow-indigo-500/10 disabled:opacity-50" 
          disabled={loading}
        >
          {loading ? "Sending…" : requestDemo ? "Request Demo" : "Send message"}
        </button>
        {status && <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">{status}</span>}
      </div>
    </form>
  );
}