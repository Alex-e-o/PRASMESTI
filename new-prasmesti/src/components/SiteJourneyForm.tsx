import React, { useState, FormEvent, ReactNode } from 'react';
interface SiteJourneyFormProps { className?: string; formType?: string; successMessage?: string; children: ReactNode; onSuccess?: () => void; }
declare global { interface Window { __FORM_API_URL__?: string; __SITE_ID__?: string; } }
export default function SiteJourneyForm({ className, formType, successMessage = 'Thank you!', children, onSuccess }: SiteJourneyFormProps) {
  const [status, setStatus] = useState<'idle'|'submitting'|'success'|'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); setStatus('submitting');
    const payload: Record<string,string> = {};
    new FormData(e.currentTarget).forEach((v,k) => { payload[k]=String(v); });
    try {
      const res = await fetch(window.__FORM_API_URL__||'/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({formType,payload})});
      if(!res.ok) throw new Error('Failed'); setStatus('success'); e.currentTarget.reset(); onSuccess?.();
    } catch(err) { setStatus('error'); setErrorMsg(err instanceof Error?err.message:'Error'); }
  };
  if(status==='success') return <div className={className}><div className="rounded-lg bg-green-50 border border-green-200 p-6 text-center"><p className="text-green-800 font-medium">{successMessage}</p></div></div>;
  return <form onSubmit={handleSubmit} className={className}>{children}{status==='error'&&<p className="text-red-600 text-sm mt-2">{errorMsg}</p>}</form>;
}
