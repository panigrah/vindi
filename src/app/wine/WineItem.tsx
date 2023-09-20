'use client';
import { ListItem } from 'konsta/react';
import { WineType } from './queries';

export const WineItem = ({ wine, onSelect }: { wine: WineType; onSelect?: any; }) => {
	const w = wine;
	const image = w.media?.length? w.media[0]: w.images?.length? w.images[0].url : undefined;
	return (
		<ListItem
			link
			key={w.id}
			title={w.variety}
			subtitle={w.name}
			text={w.description}
			media={
				// eslint-disable-next-line @next/next/no-img-element
				image ? <img className="object-cover aspect-square ios:rounded-lg material:rounded-full ios:w-20 material:w-10" width="80" src={image} alt={w.name} /> : null}
			onClick={() => onSelect?.(w)} />
	);
}