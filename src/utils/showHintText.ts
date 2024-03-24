import { isRoundGoalMatch } from './roundInfo';

export const showHintText = (isChecking: boolean, roundNumber: number, wordCode: string) => {
	const wordCodeReminder = `Код слова: ${wordCode}.`;
	const hintTextStart = isRoundGoalMatch(roundNumber) ? 'Придумайте такие ассоциации, которые совпадут с ассоциациями других игроков.' : 'Придумайте такие ассоциации, которые НЕ совпадут с ассоциациями других игроков.';
	const hintTextChecking = 'Отметьте те слова, которые совпали у вас и других игроков';
	return !isChecking ? `${hintTextStart} ${wordCodeReminder}` : hintTextChecking;
};

export const confirmationText = 'Уверены, что хотите перейти к подсчету очков? После этого вы не сможете отредактировать свой список слов';