export const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "ru", name: "Russian" },
  { code: "ja", name: "Japanese" },
  { code: "it", name: "Italian" },
  { code: "ko", name: "Korean" },
]

export const getLanguageName = (code) => {
  return languages.find((lang) => lang.code === code)?.name || code
}
