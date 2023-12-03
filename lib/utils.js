export const stats = ['hunger', 'health', 'sanity'];
export const isStat = {
    hunger: true,
    health: true,
    sanity: true
};
export const isBestStat = {
    bestHunger: true,
    bestHealth: true,
    bestSanity: true
};

export const pl = (str, n, plr) => {
	return n === 1 ? str : str + (plr || 's');
};
