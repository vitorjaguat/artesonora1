export default function HeaderSubpage({ title, bgImg, kind }) {
  return (
    <div
      className={'bg-g h-80 w-full relative'}
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className={
          'absolute bottom-4 right-4 ' +
          (kind === '1' ? 'text-5xl md:text-8xl' : 'text-3xl md:text-5xl')
        }
      >
        {title}
      </div>
    </div>
  );
}
