interface Props {
  alt: string;
  src: string;
}

export default function DocTutorialImage({ alt, src }: Props) {
  return (
    <div className="border-2 border-dashed border-gray-500">
      <img className="mx-auto rounded-lg bg-gray-100 object-cover shadow-2xl" alt={alt} src={src} />
    </div>
  );
}
