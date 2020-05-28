import React from "react"
import { useTranslation } from "react-i18next"

const MainView = (props) => {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t("Title")}</h1>
    </div>
  )
}

export default MainView
