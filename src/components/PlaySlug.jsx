import PlayButton from '@/components/PlayButton';
import { SlSocialSoundcloud } from 'react-icons/sl';
export default function PlaySlug({
  title,
  soundcloudLink,
  fileLink,
  collaboratorsData,
  collaborators,
}) {
  return (
    <div className='w-full sm:w-fit sm:max-w-[400px] flex items-center justify-between gap-10 rounded-full bg-zinc-600/70 sm:bg-zinc-600 font-lato py-4 pl-4'>
      <PlayButton
        size={25}
        src={fileLink}
        title={title}
        img={collaboratorsData[0]?.coverImage}
        artist={collaborators
          .map((collaborator) => collaborator.label)
          .join(', ')}
      />
      <div className='flex flex-col w-full items-start text-neutral-300 pr-4 py-3'>
        <div className='text-sm'>Ouça agora</div>
        <div className='text-base font-chakra font-semibold w-full text-left'>
          {title}
        </div>

        {/* {soundcloudLink && (
          <div className='text-xs flex items-center gap-1'>
            Disponível também no{' '}
            <a href={soundcloudLink} target='_blank' rel='noopener noreferrer'>
              <SlSocialSoundcloud size={20} />
            </a>
          </div>
        )} */}
      </div>
    </div>
  );
}
