import english from './en.json'
import spanish from './es.json'

const LANGUAGES ={
    INGLES: 'en',
    SPANISH: 'es'
}

export const getI18N = ({currentLocale = 'es'}: {currentLocale?: string}) =>{
  switch (currentLocale) {
    case LANGUAGES.INGLES:
        return english;
    case LANGUAGES.SPANISH:
        return spanish;
        default:
         return spanish;
  }
}