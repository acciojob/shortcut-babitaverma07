function shortcut(str1, str2) {
    // Check if either string is empty
    if (str1 === '' || str2 === '') {
        return '';
    }
    
    // Get the first characters of both strings
    const initial1 = str1.charAt(0);
    const initial2 = str2.charAt(0);
    
    // Return the concatenated initials
    return initial1 + initial2;
}

// Example usage:
console.log(shortcut("Amnesty", "International")); // 'AI'
console.log(shortcut("Hello", "world")); // 'Hw'
console.log(shortcut("", "International")); // ''
console.log(shortcut("Amnesty", "")); // ''
