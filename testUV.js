function groupAnagrams(words) {
    const anagramGroups = {};

    words.forEach(word => {
        const sortedWord = word.split('').sort().join('');
        if (anagramGroups[sortedWord]) {
            anagramGroups[sortedWord].push(word);
        } else {
            anagramGroups[sortedWord] = [word];
        }
    });

    return Object.values(anagramGroups);
}

const words = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
const result = groupAnagrams(words);
console.log(result);
