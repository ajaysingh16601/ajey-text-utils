// test/index.test.ts
import { describe, it, expect } from 'vitest';
import { humanizeString } from '../src/index';

describe('humanizeString', () => {
    it('converts camelCase and snake_case', () => {
        expect(humanizeString('userProfile_data')).toBe('User Profile Data');
    });

    it('applies sentence casing', () => {
        expect(humanizeString('user_profile', { casing: 'sentence' })).toBe('User profile');
    });
});
