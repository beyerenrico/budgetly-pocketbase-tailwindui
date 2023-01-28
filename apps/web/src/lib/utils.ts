import { PUBLIC_POCKETBASE_URL } from '$env/static/public';

const { randomBytes } = await import('node:crypto');

export const serializeNonPOJOs = <T>(obj: T): T => {
	return structuredClone(obj);
};

export const generateUsername = ({ name }: { name: string }): string => {
	const id = randomBytes(2).toString('hex');
	return `${name.slice(0, 5)}${id}`;
};

export const getImageURL = ({
	collectionId,
	recordId,
	fileName,
	size = '0x0'
}: {
	collectionId: string;
	recordId: string;
	fileName: string;
	size?: string;
}): string => {
	return `${PUBLIC_POCKETBASE_URL}/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size};`;
};
