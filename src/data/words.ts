import { Round, RoundType, Word } from '../types/Word.types';

export const round: Round[] = [
	{
		id: 0,
		name: 'Совы'
	},
	{
		id: 1,
		name: 'Жаворонки'
	},
	{
		id: 2,
		name: 'Блиц'
	}
];

export const roundType: RoundType[] = [
	{
		roundNumber: 1,
		roundId: 0
	},
	{
		roundNumber: 2,
		roundId: 1
	},
	{
		roundNumber: 3,
		roundId: 2
	},
	{
		roundNumber: 4,
		roundId: 0
	},
	{
		roundNumber: 5,
		roundId: 1
	},
	{
		roundNumber: 6,
		roundId: 2
	}
];

export const words: Word[] = [
	{
		id: 0,
		roundId: 0,
		word: 'Лес'
	},
	{
		id: 1,
		roundId: 0,
		word: 'Поход'
	},
	{
		id: 2,
		roundId: 0,
		word: 'Университет'
	},
	{
		id: 3,
		roundId: 0,
		word: 'Опасные профессии'
	},
	{
		id: 4,
		roundId: 0,
		word: 'Новый год'
	},
	{
		id: 5,
		roundId: 0,
		word: 'Вампиры'
	},
	{
		id: 6,
		roundId: 1,
		word: 'Деревья'
	},
	{
		id: 7,
		roundId: 1,
		word: 'Денежные единицы'
	},
	{
		id: 8,
		roundId: 1,
		word: 'Цветы'
	},
	{
		id: 9,
		roundId: 1,
		word: 'Футбольные клубы'
	},
	{
		id: 10,
		roundId: 1,
		word: 'Созвездия'
	},
	{
		id: 11,
		roundId: 2,
		wordList: ['Кофе', 'Монета', 'Капитан...', 'Жалящее насекомое', 'Головной убор', 'Чувство']
	},
	{
		id: 12,
		roundId: 2,
		wordList: ['Пирожное', 'Слово, заканчивающееся на "НС"', 'Музыкальная группа 1990-х', 'Торговая сеть', 'Фокусник', 'Ирландия']
	},
	{
		id: 13,
		roundId: 2,
		wordList: ['Флот', 'Ландшафт', 'Известная Наталья', 'Островное государство', 'Дорожный знак', 'Комик']
	},
	{
		id: 14,
		roundId: 2,
		wordList: ['Маргарита', 'Воинское звание', 'Известное высотное сооружение', 'Римский император', 'Компьютерная игра', 'ОБезьяна']
	},
	{
		id: 15,
		roundId: 2,
		wordList: ['Дворец', 'Сектор', 'Фильм про шпионов', 'Начинка для конфет', 'Нелетающая птица', 'Солнце']
	}
];
