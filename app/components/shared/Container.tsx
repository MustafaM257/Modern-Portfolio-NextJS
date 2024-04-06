const Container = ({
  id,
  title,
  children,
  className,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`container ${className}`}>
      <a className="title" id={id}>
        {title}
      </a>
      {children}
    </div>
  );
};

export default Container;
