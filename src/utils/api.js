import { mockTranslate } from "./mockTranslations";

const PRIMARY_API = "https://lingva.ml/api/v1";
const BACKUP_API = "https://lingva.pussthecat.org/api/v1";

export const translateText = async (text, sourceLang, targetLang) => {
  if (!text.trim()) {
    return "";
  }

  try {
    const response = await fetch(
      `${PRIMARY_API}/${sourceLang}/${targetLang}/${encodeURIComponent(text)}`
    );

    if (!response.ok) {
      throw new Error("Primary API request failed");
    }

    const data = await response.json();

    if (data && data.translation) {
      return data.translation;
    } else {
      throw new Error("Invalid response from primary API");
    }
  } catch (primaryError) {
    console.error("Primary API error:", primaryError);

    try {
      const response = await fetch(
        `${BACKUP_API}/${sourceLang}/${targetLang}/${encodeURIComponent(text)}`
      );

      if (!response.ok) {
        throw new Error("Backup API request failed");
      }

      const data = await response.json();

      if (data && data.translation) {
        return data.translation;
      } else {
        throw new Error("Invalid response from backup API");
      }
    } catch (backupError) {
      console.error("Backup API error:", backupError);

      return mockTranslate(text, sourceLang, targetLang);
    }
  }
};
