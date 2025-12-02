import React, { useEffect, useState } from 'react'

const API_URL = "http://localhost:5000/api/auth/translations";


const useTranslations = (selectedLang = "EN") => {
  const [translations, setTranslations] = useState(null);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/auth/translations`);
        const data = await res.json();

        if (!data[selectedLang]) {
          console.error(`Key not found in returned data: ${selectedLang}`);
          setTranslations({});
        } else {
          setTranslations(data[selectedLang]);
        }
      } catch (error) {
        console.error("Translation fetch failed", error);
      }
    };

    fetchTranslations();
  }, [selectedLang]);

  return translations;
};


export default useTranslations