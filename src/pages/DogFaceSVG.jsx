export default function DogFaceSVG({ style }) {
    return (
      <svg style={style} viewBox="0 0 100 100">
        {/* Simple dog face SVG - replace with your actual design */}
        <circle cx="50" cy="50" r="45" fill="#FFD700" />
        <circle cx="35" cy="40" r="5" fill="#000" />
        <circle cx="65" cy="40" r="5" fill="#000" />
        <path d="M30,65 Q50,75 70,65" stroke="#000" strokeWidth="3" fill="none" />
      </svg>
    );
  }