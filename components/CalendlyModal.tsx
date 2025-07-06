import React, { useEffect, useRef, useState } from "react";

interface CalendlyModalProps {
  onClose: () => void;
}

const ANIMATION_DURATION = 200;

const CalendlyModal: React.FC<CalendlyModalProps> = ({ onClose }) => {
  const [show, setShow] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShow(true);
    // Inyecta el script de Calendly sólo si no existe
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleClose = () => {
    setShow(false);
    timeoutRef.current = setTimeout(() => {
      onClose();
    }, ANIMATION_DURATION);
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-colors duration-200 ${show ? 'bg-black bg-opacity-60' : 'bg-black bg-opacity-0'}`}>
      <div
        className={`bg-white rounded-2xl shadow-lg p-4 max-w-xl w-full relative transition-all duration-200 transform ${show ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'}`}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-black text-2xl font-bold focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
        <div ref={widgetRef}>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/nataliya-aiagent/30min?hide_event_type_details=1&primary_color=2b7fff"
            style={{ minWidth: 320, height: 700 }}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendlyModal;
