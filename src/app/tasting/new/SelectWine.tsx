'use client';
import { useController } from 'react-hook-form';
import { ListItem, Popup, Page, List, Navbar, Button, ListInput } from 'konsta/react';
import { useState } from 'react';
import { useQueryWines } from '@/app/wine/queries';
import { WineItem } from '@/app/wine/WineItem';

export const SelectWine = ({ name }: { name: string; }) => {
  const { field, fieldState, formState } = useController({ name });
  const [open, setOpen] = useState(false);
  const { data: wines, isLoading, error } = useQueryWines();

  const select = (w: any) => {
    field.onChange(w);
    setOpen(false);
  };

  return (
    <>
      <List inset outline strong>
        {field.value ?
          <WineItem wine={field.value} onSelect={() => setOpen(true)} />
          :
          <ListItem
            link
            onClick={() => setOpen(true)}
            title="Select a wine" />}

      </List>
      <Popup
        opened={open}
        onBackdropClick={() => setOpen(false)}
      >
        <Page>
          <Navbar
            title="Select a wine"
            right={<Button navbar onClick={() => setOpen(false)}>
              Close
            </Button>} />
          <List strongIos insetIos>
            <ListInput
              type="text"
              clearButton
              placeholder="search for a wine" />
          </List>
          <List strong inset outline dividers>
            {wines?.map(w => (
              <WineItem
                key={w.id}
                wine={w}
                onSelect={select} />
            ))}
          </List>
        </Page>
      </Popup>
    </>
  );
};
