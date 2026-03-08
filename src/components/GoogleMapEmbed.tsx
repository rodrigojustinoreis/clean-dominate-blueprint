interface GoogleMapEmbedProps {
  cityName: string;
  state: string;
  className?: string;
}

const GoogleMapEmbed = ({ cityName, state, className = "" }: GoogleMapEmbedProps) => {
  const query = encodeURIComponent(`${cityName}, ${state}`);

  return (
    <div className={`rounded-xl overflow-hidden border border-border ${className}`}>
      <iframe
        title={`Map of ${cityName}, ${state} service area`}
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${query}&zoom=13`}
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-label={`Google Map showing ${cityName}, ${state} area`}
      />
    </div>
  );
};

export default GoogleMapEmbed;
