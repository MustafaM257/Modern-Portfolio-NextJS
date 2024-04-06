const DotBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full  bg-black   bg-dot-white/30 relative">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center  bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_100%,white)]"></div>

      {children}
    </div>
  );
};

export default DotBackground;
