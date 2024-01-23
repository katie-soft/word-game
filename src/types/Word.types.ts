export type Word = {
  id: number,
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