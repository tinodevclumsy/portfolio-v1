type ItemProps = {
  name?: string;
  background: string;
};

const PreviewItem: React.FC<ItemProps> = ({ name, background }) => {
  return (
    <div className="aspect-video relative group rounded-md overflow-hidden drop-shadow-md">
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      <h6 className="font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {name}
      </h6>
    </div>
  );
};

export default PreviewItem;
