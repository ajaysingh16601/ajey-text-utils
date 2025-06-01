export function humanizeString(
    input: string,
    options: { separator?: string, casing?: 'title' | 'sentence' | 'lower' } = {}
): string {
    const { separator = ' ', casing = 'title' } = options;
    const base = input
        .replace(/[_\-]+/g, ' ')
        .replace(/([a-z\d])([A-Z])/g, '$1 $2')
        .replace(/\s+/g, ' ')
        .trim();

    const words = base.split(' ').map(word => {
        if (casing === 'lower') return word.toLowerCase();
        if (casing === 'sentence') return word.toLowerCase();
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });

    let result = words.join(separator);
    if (casing === 'sentence') result = result.charAt(0).toUpperCase() + result.slice(1);
    return result;
}
