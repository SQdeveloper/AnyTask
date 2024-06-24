export const UppercaseText = (text: string) => {
    const uppercaseText = text.charAt(0).toUpperCase() + text.slice(1);

    return uppercaseText;
};