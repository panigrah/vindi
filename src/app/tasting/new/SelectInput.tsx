'use client';
import { useController } from 'react-hook-form';
import { Button, ListInput } from 'konsta/react';
import { InformationCircleIcon } from '@heroicons/react/24/outline';

export const SelectInput = ({ name, options, label, openHelp }: { name: string; label?: string; options: { name: string; }[]; openHelp?: (topic: string) => void; }) => {
  const { field, fieldState, formState } = useController({ name: name });
  return (
    <ListInput
      label={<div className='flex items-center gap-x-1'>
        <span>{label}</span>
        {openHelp &&
          <Button
            inline
            clear
            onClick={() => openHelp(name)}>
            <InformationCircleIcon className='w-5 h-5' />
          </Button>}
      </div>}
      type="select"
      dropdown
      placeholder="please choose"
      defaultValue={field.value}
      value={field.value}
      onChange={(e: any) => field.onChange(e.target.value)}
    >
      <option value={'n/a'}>N/A</option>
      {options.map(o => (
        <option key={o.name} value={o.name}>
          {o.name}
        </option>
      ))}
    </ListInput>
  );
};
