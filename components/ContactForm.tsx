import React, { useEffect, useRef, useState } from "react";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useRouter } from "next/navigation";

interface ContactFormProps {
  onClose: () => void;
}

const ANIMATION_DURATION = 200; 

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [show, setShow] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Campos del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Estado de envío y toast
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const router = useRouter();

  // Cierra con animación
  const handleClose = () => {
    setShow(false);
    timeoutRef.current = setTimeout(() => {
      onClose();
    }, ANIMATION_DURATION);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setToast(null);
  
    const payload = {
      name,
      email,
      phone,
      message,
    };
  
    try {
      const res = await fetch('https://qiuadminplatform.space/webhook/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (res.ok) {
        setToast({ type: 'success', message: 'Message sent successfully!' });
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        const url = new URL(window.location.href);
        url.searchParams.set('form-sended', 'true');
        router.replace(url.pathname + url.search + url.hash);
        // Cerrar modal tras unos segundos
        setTimeout(() => handleClose(), 3000);
      } else {
        setToast({ type: 'error', message: 'There was an error trying to send the message. Please try again.' });
      }
    } catch (err) {
      setToast({ type: 'error', message: 'There was an error trying to send the message. Please try again.' });
    } finally {
      setSending(false);
    }
  };
  

  // Limpia timeout si el componente se desmonta antes
  useEffect(() => {
    setShow(true); // Activa animación de entrada al montar
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-colors duration-200 ${show ? 'bg-black bg-opacity-60' : 'bg-black bg-opacity-0'}`}>
      <div
        className={`bg-slate-800 rounded-2xl shadow-lg p-4 max-w-lg w-96 md:w-full relative
        transition-all duration-200 transform
        ${show ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'}`}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white text-2xl font-bold focus:outline-none"
          aria-label="Cerrar"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-6 text-white">Contact us</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name</label>
                <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full px-4 py-2 rounded bg-white text-black border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</label>
                <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded bg-white text-black border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">Phone</label>
                <PhoneInput
                defaultCountry="ca"
                value={phone}
                onChange={setPhone}
                inputClassName="w-full px-4 py-2  rounded bg-white text-black border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{ width: '100%'  }}
                name="phone"
                required
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Message</label>
                <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows={4}
                required
                value={message}
                onChange={e => setMessage(e.target.value)}
                className="w-full px-4 py-2 rounded bg-white text-black border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
            </div>
            {!toast && <button
                type="submit"
                disabled={sending}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded shadow transition-colors w-full"
            >
                {sending ? 'Enviando...' : 'Send message'}
            </button>}
            {/* Toast de feedback */}
            {toast && (
                <div className={`mt-2 text-center text-xs px-4 py-2 rounded transition-all text-white font-semibold ${toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
                role="alert">
                {toast.message}
                </div>
            )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
