type Props = {
  id?: string;
};

export default function Youtube(props: Props) {
  return (
    <div className="w-full h-[100%]">
      <iframe
        className="w-full h-[90vh]"
        src={`https://www.youtube.com/embed/${props.id}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}
