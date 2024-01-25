export const getIdFromLocation = (location: string) => {
	return location.split('/').at(-1);
};