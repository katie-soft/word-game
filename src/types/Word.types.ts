export type Word = {
  id: string,
  roundId: number,
  word?: string
  wordList?: string[]
}

export type Round = {
  id: number,
  name: string
}

export type RoundType = {
  roundNumber: number,
  roundId: number
}

export type newWord = {
	index: number;
	word: string;
}