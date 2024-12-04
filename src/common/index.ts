import { PassThrough, Readable } from 'stream';

type NotEmptyArray<T> = [T, ...T[]];
type AtLeast2ItemsArray<T> = [T, T, ...T[]];

const doctypeBuf = Buffer.from('<!DOCTYPE html>');

const mergeStreams = (...streams: AtLeast2ItemsArray<NodeJS.ReadableStream>): NodeJS.ReadableStream => {
	let pass = new PassThrough();
	let waiting = streams.length;
	for (const stream of streams) {
		pass = stream.pipe(pass, {end: false});
		stream.once('end', () => --waiting === 0 && pass.emit('end'));
	}
	return pass;
};

export const mergeWithDoctypeStream = (...streams: NotEmptyArray<NodeJS.ReadableStream>): NodeJS.ReadableStream =>
{
	const doctypeStream = new Readable();
	doctypeStream.push(doctypeBuf);
	doctypeStream.push(null);
	return mergeStreams(doctypeStream, ...streams);
};

export class HtmlStream extends PassThrough implements NodeJS.ReadableStream
{
	constructor(...streams: NotEmptyArray<NodeJS.ReadableStream>)
	{
		super();

		const doctypeStream = new Readable();
		doctypeStream.push(doctypeBuf);
		doctypeStream.push(null);
		streams.unshift(doctypeStream);

		let pass: PassThrough = this;
		let waiting = streams.length;
		for (const stream of streams) {
			pass = stream.pipe(pass, {end: false});
			stream.once('end', () => --waiting === 0 && pass.emit('end'));
		}

		return pass;
	}
}
