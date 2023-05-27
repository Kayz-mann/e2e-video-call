import Constants from "expo-constants";

const { manifest } = Constants;

const Environment = {
    apiUrl: manifest?.extra?.apiUrl
} as const

export default Environment;