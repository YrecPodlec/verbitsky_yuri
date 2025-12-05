import {Contacts, Projects, Skills, WaveBlock, Welcome} from "@/app/[locale]/widgets";
import styles from './justText.module.scss'
import {useTranslations} from "next-intl";
export default function Home() {
    const t = useTranslations('textAdd')
  return (
      <main>
          <Welcome/>
          <WaveBlock/>
          <Projects/>
          <div className={styles.justText}>
              {t('text')}
          </div>
          <Skills/>
          <Contacts/>
      </main>
  );
}
