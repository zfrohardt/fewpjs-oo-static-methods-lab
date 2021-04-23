class Formatter {
    //add static methods here

    static capitalize(string) {
        let returnString = Array.from(string);
        returnString[0] = returnString[0].toUpperCase();

        return returnString.join("");
    }

    static sanitize(string) {
        let arr = Array.from(string);
        return arr.filter(c => c.match(/^[-a-z0-9 /']+$/i) !== null).join("");
    }

    static titleize(string) {
        let words = string.split(" ");
        words[0] = Formatter.capitalize(words[0]);

        for (let i = 1; i < words.length; i++) {
            switch (words[i]) {
                case 'the':
                case 'a':
                case 'an':
                case 'but':
                case 'of':
                case 'and':
                case 'for':
                case 'at':
                case 'by':
                case 'from':
                    break;
                default:
                    words[i] = Formatter.capitalize(words[i]);
            }
        }
        return words.join(" ");
    }
}