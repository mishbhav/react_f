import { expect, it, describe } from 'vitest';
import { formatMoney } from './money';

describe('format money function', () => {
    it('formats 1900 cents as $19.00', () => {
        expect(formatMoney(1900)).toBe('$19.00');
    });


    it('displays 2 decimals', () => {
        expect(formatMoney(1909)).toBe('$19.09');
        expect(formatMoney(100)).toBe('$1.00');
    });
}) 
