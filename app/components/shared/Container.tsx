const Container = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="container">
      <a className="title" id={id}>
        {title}
      </a>
      {children}
    </div>
  );
};

export default Container;
