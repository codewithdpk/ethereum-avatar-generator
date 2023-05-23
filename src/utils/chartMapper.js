function getCharMapper() {
    let chars = {};
    String("abcdefghijklmnopqrstuvwxyz")
        .split("")
        .map((char, _index) => {
            chars[char] = _index + 1;
        });
    return chars;
};

export default getCharMapper()

