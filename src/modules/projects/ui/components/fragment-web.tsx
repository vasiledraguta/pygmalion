import { useState } from 'react';
import type { Fragment } from '@prisma/client';
import { ExternalLinkIcon, RefreshCcwIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Hint } from '@/components/hint';

interface Props {
  data: Fragment;
}
export const FragmentWeb = ({ data }: Props) => {
  const [copied, setCopied] = useState(false);
  const [fragmentKey, setFragmentKey] = useState(0);

  const onRefresh = () => {
    setFragmentKey((prev) => prev + 1);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(data.sandboxUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
    toast.success('Copied URL to clipboard!');
  };

  return (
    <div className='flex flex-col w-full h-full'>
      <div className='p-2 border-b bg-sidebar flex items-center gap-x-2'>
        <Hint text='Refresh'>
          <Button size='sm' variant='outline' onClick={onRefresh}>
            <RefreshCcwIcon />
          </Button>
        </Hint>
        <Hint text='Copy to clipboard'>
          <Button
            size='sm'
            variant='outline'
            className='flex justify-start text-start font-normal'
            disabled={!data.sandboxUrl || copied}
            onClick={handleCopy}
          >
            <span className='truncate'>{data.sandboxUrl}</span>
          </Button>
        </Hint>
        <Hint text='Open in a new tab'>
          <Button
            size='sm'
            variant='outline'
            onClick={() => {
              if (!data.sandboxUrl) {
                return;
              }
              window.open(data.sandboxUrl, '_blank');
            }}
          >
            <ExternalLinkIcon />
          </Button>
        </Hint>
      </div>

      <iframe
        key={fragmentKey}
        className='h-full w-full'
        sandbox='allow-forms allow-scripts allow-same-origin'
        loading='lazy'
        src={data.sandboxUrl}
      />
    </div>
  );
};
