'use client';
import { ListItem } from 'konsta/react';
import { WineType } from './queries';

export const WineItem = ({ wine, onSelect }: { wine: WineType; onSelect?: any; }) => {
	const w = wine;
	return (
		<ListItem
			link
			key={w.id}
			title={w.variety}
			subtitle={w.name}
			text={w.description}
			media={w.media ? <img className="object-cover aspect-square ios:rounded-lg material:rounded-full ios:w-20 material:w-10" width="80" src={w.media} alt={w.name} /> : null}
			onClick={() => onSelect?.(w)} />
	);
};
