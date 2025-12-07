import React, { useEffect, useState } from 'react'
import localTranslations from '../helper/localTransactions';
import { API } from '../config/api';

const API_URL = "http://localhost:5000/api/auth/translations";


const useTranslations = (selectedLang = "EN") => {
  const [translations, setTranslations] = useState(localTranslations[selectedLang]);

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const res = await fetch(`${API}/auth/translations`);
        const data = await res.json();
        console.log('ooo:', data[selectedLang])

        if (data[selectedLang]) {
          setTranslations(data[selectedLang]); // ✅ backend overrides local
        } else {
          console.warn("Backend missing key, using local fallback");
          setTranslations(localTranslations[selectedLang]);
        }
      } catch (err) {
        console.warn("Backend offline → using local translations");
        console.log(err.message)
        setTranslations(localTranslations[selectedLang]); // ✅ fallback
      }
    };

    fetchTranslations();
  }, [selectedLang]);

  return translations;
};


export default useTranslations