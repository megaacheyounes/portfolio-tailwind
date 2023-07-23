export function getIconName(technology: string) {
    switch (technology.toLowerCase()) {
        case "react-native":
            return "react";
        case "harmonyos (based on android)":
            return "android";
        case "suse linux":
            return "opensuse";
        case "google mobile services":
            return "google";
        case "angular":
            return "angularjs";
        case "expressjs":
            return "express";
        default:
            return technology.toLowerCase();
    }
}
