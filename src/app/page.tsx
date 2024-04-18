import { getTranslation } from "#/i18n/server";

export const HomePage = async () => {
  const { t } = await getTranslation("common");

  return (
    <div>
      <h1>Home</h1>

      <p>{t("test")}</p>
    </div>
  );
};

export default HomePage;
