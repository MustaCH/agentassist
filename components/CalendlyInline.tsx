import React, { useEffect, useRef } from "react";

const CalendlyInline: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inyecta el script de Calendly sólo si no existe
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={widgetRef}
      className="calendly-inline-widget"
      data-url="https://calendly.com/nataliya-aiagent/30min?hide_event_type_details=1&primary_color=2b7fff"
      style={{ minWidth: '320px', height: '630px' }}
    />
  );
};

export default CalendlyInline;
